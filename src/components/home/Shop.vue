<template>
  <div class="container">
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
                        <span v-for="(ing, index) in cupcake.ingredients" :key="index" class="badge badge-pill badge-primary">{{ing}}</span>
                        <p></p>
                        <a @click.prevent="addCart(cupcake.id)" class="btn-buy btn btn-primary" role="button"><i class="fas fa-shopping-cart"></i> Add to cart</a>
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
        addCart(id) {
            let user = firebase.auth().currentUser

            // FIND CUPCAKE
            let ref = db.collection('cupcakes').doc(id).get().then( (doc) => {    
                let add_cupcake = {
                    cupcake_id: doc.id,
                    user_id: user.uid,
                    price: doc.data().price,
                    name: doc.data().name,
                    quantity: 1,
                    description: doc.data().description
                }
                //console.log(add_cupcake) 
                    
                //add cupcake to cart
                db.collection('cart').add(add_cupcake).catch(err => {
                    console.log(err)
                })

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
</style>