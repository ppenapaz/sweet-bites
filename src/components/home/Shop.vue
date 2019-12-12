<template>
  <div class="container" id="content-wrap">
        <br>
        <div class="row">
            <div class="col-sm-6" v-for="cupcake in cupcakes" :key="cupcake.id">
                <div class="cupcake-container row" style="/*width: 10rem;*/">
                    <div class="col-sm-4">
                        <img class="card-img-top" v-bind:src="cupcake.img" alt="Card image cap">
                    </div>
                    <div class="col-sm-8">
                        <h5 class="">{{ cupcake.name }}</h5>
                        <p class="">{{ cupcake.description }}</p>
                        <h4>${{ cupcake.price.toFixed(2) }}</h4>
                        <span v-for="(ing, index) in cupcake.ingredients" :key="index" class="badge badge-pill pink ingredient">{{ing}}</span>
                        <p></p>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <div class="input-group-append">
                                    <input type="number" id="quantity" name="quantity" class="form-control input-number" v-model="cupcake.quantity" min="1" max="10" size="3">
                                    <a @click.prevent="addCart(cupcake)" class="btn-buy btn btn-primary" role="button"><i class="fas fa-shopping-cart"></i> Add to cart</a>
                                </div>
                            </div>
                        </div>
                        <p></p>
                        
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'

export default {
    name: 'Shop',
    data(){
        return {
            cupcakes: [],
            cart: []
        }
    },
    methods: {
        addCart(param_cupcake) {
            let id = param_cupcake.id
            let user = firebase.auth().currentUser

            // FIND CUPCAKE
            let ref = db.collection('cupcakes').doc(id).get().then( (doc) => {    
                let add_cupcake = {
                    cupcake_id: doc.id,
                    user_id: user.uid,
                    price: param_cupcake.price,
                    name: doc.data().name,
                    quantity: param_cupcake.quantity,
                    description: doc.data().description
                }
                //console.log(add_cupcake) 
                    
                //add cupcake to cart
                db.collection('cart').add(add_cupcake).catch(err => {
                    console.log(err)
                })

                alert(`${add_cupcake.name} was added to cart!`);

            }).catch( (error) => { })
        }
    },
    created(){
        //fetch data from the firestore
        db.collection('cupcakes').get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                let cupcake = doc.data();
                cupcake.id = doc.id
                cupcake.quantity = 1
                this.cupcakes.push(cupcake)
            })
        })
    }
}
</script>

<style>
.cupcake-container{
    border-radius: 12px;
    border: 1px solid rgba(0,0,0,.125);
    margin: 2px;
    padding: 1px 10px;
}
.ingredient{
    margin-right: 2px;
}

.input-number{
    width: auto;
}
/* Hover Effects on Card */

@media (min-width: 992px) {
  .cupcake-container:hover {
    margin-top: -.25rem;
    margin-bottom: .25rem;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);
  }
}
</style>