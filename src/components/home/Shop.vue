<template>
  <div class="container">
        <br>
        <div class="card-columns text-center" v-for="cupcake in cupcakes" :key="cupcake.id">
            <div class="card">
                <img class="card-img-top" v-bind:src="cupcake.img" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{ cupcake.name }}</h5>
                    <p class="card-text">
                        {{ cupcake.description }}
                    </p>
                    <span v-for="(ing, index) in cupcake.ingredients" :key="index" class="badge badge-pill badge-primary">{{ing}}</span>
                </div>
                <div class="card-footer">
                    <a @click="addCart(cupcake.id)" class="btn btn-default"><i class="fas fa-shopping-cart"></i> Add to cart</a>
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
                    quantity: 1
                }
                console.log(add_cupcake) 
                    
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
.card{
}
</style>