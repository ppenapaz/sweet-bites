<template>
    <div class="container" id="content-wrap">
        <br>
        <div class="row">
            <div class="col-md-8" v-if="user">
                <h1>Profile</h1>
                <v-gravatar :email="user.email" class="rounded-circle"/>
                <p></p>
                <p>E-mail: {{user.email}}</p>
                <p>User ID: {{user.uid}}</p>
                <h4 class="mb-3">Payment Information</h4>
                <div class="d-block my-3">
                    <div class="custom-control custom-radio">
                        <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="">
                        <label class="custom-control-label" for="credit">Credit card</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="">
                        <label class="custom-control-label" for="debit">Debit card</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="cc-name">Name on card</label>
                        <input type="text" class="form-control" id="cc-name" v-model="info.name" placeholder="" required="">
                        <small class="text-muted">Full name as displayed on card</small>
                        <div class="invalid-feedback">
                        Name on card is required
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="cc-number">Credit card number</label>
                        <input type="text" class="form-control" v-model="info.card" id="cc-number" placeholder="" required="">
                        <div class="invalid-feedback">
                        Credit card number is required
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 mb-3">
                        <label for="cc-expiration">Expiration</label>
                        <input type="text" class="form-control" v-model="info.exp" id="cc-expiration" placeholder="" required="">
                        <div class="invalid-feedback">
                        Expiration date required
                        </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="cc-expiration">CVV</label>
                        <input type="text" class="form-control" v-model="info.cvv" id="cc-cvv" placeholder="" required="">
                        <div class="invalid-feedback">
                        Security code required
                        </div>
                    </div>
                </div>
                <button class="btn btn-primary btn-lg btn-block" v-on:click="updateCard()" type="submit">Update Card Information</button>

                <hr>
                <br>
                <h3>Update Password</h3>
                <div class="input-group">
                    <input type="password" class="form-control" v-model="password" placeholder="New Password">
                    <div class="input-group-append">
                        <button type="button" class="btn btn-warning" v-on:click="updatePassword()">Update</button>
                    </div>
                </div>
                <p class="red-text center" v-if="feedback">{{ feedback }}</p>
            </div>



            <div class="col-md-4">
                
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'
import Gravatar from 'vue-gravatar';

export default {
    name: 'Profile',
    data(){
        return {
            user: null,
            info: null,
            password: null,
            feedback: null
        }
    },
    components: {
        'v-gravatar': Gravatar
    },
    created(){
        this.user = firebase.auth().currentUser

        let ref = db.collection('users').where('user_id', '==', this.user.uid).get().then(snapshot => {
            snapshot.forEach(doc => {
                this.info = doc.data()
                this.info.id = doc.id
                console.log('inside foreach', this.info.name)
            })
        }).catch( (error) => { })

    },
    methods:{
        updateCard() {
            if(this.info.name && this.info.card && this.info.exp && this.info.cvv){
                console.log(this.info)
                db.collection('users').doc(this.info.id).update({
                    name: this.info.name,
                    card: this.info.card,
                    exp: this.info.exp,
                    cvv: this.info.cvv
                }).then(() => {
                    alert('card info updated!')
                }).catch(err => {
                    console.log(err)
                })
            }
        },
        updatePassword(){
            this.feedback = null

            if(this.password){
                var user = firebase.auth().currentUser;
                var newPassword = this.password;

                user.updatePassword(newPassword).then(function() {
                    alert('Password Updated')
                }).catch(error => {
                    this.feedback = error.message
                });

                
                this.password = null
                this.feedback = null
            } else {
                this.feedback = 'Please type a new password in order to change it.'
            }



            
        }
    }
}
</script>

<style scoped>
</style>