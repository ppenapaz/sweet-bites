<template>
    <div class="container">
        <br>
        <h3 v-if="cart_cupcakes.length == 0">Cart is empty</h3>
        <div v-if="cart_cupcakes.length != 0">
            <p></p>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Cupcake</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cupcake in cart_cupcakes" :key="cupcake.id">
                        <td>{{ cupcake.name }}</td>
                        <td>{{ cupcake.quantity }}</td>
                        <td>${{ cupcake.price }}</td>
                        <td><a v-on:click.stop.prevent="deleteCupcake(cupcake.id)">X</a></td>
                    </tr>
                    <tr>
                        <th></th>
                        <th><h4>Total</h4></th>
                        <td>
                            <h4>${{total}}</h4>
                        </td>
                    </tr>
                    <a href="" class="btn btn-primary btn-lg float-right">Continue to checkout</a>
                </tbody>
            </table>
        </div>
        <hr>
        
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'

export default {
    name: 'Cart',
    data(){
        return{
            cart_cupcakes: [],
            total: 0
        }
    },
    methods: {
        deleteCupcake(id){
            // delete doc from firestore
            db.collection('cart').doc(id).delete()
            .then(() => {
                this.cart_cupcakes = this.cart_cupcakes.filter(cupcake => {
                    return cupcake.id != id;
                });
            })
        }
    },
    created(){
        let user = firebase.auth().currentUser
        console.log(user)
        //fetch data from the firestore
        db.collection('cart').where('user_id', '==', user.uid).get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                let cupcake = doc.data();
                cupcake.id = doc.id
                this.cart_cupcakes.push(cupcake)
                this.total += cupcake.price
            })
        })
    }
}
</script>

<style>

</style>