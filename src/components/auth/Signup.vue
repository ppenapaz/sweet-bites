<template>
    <div class="signup card bg-light mb-3 container">
        <div class="card-body">
            <h2 class="center">Signup</h2>
            <form @submit.prevent="signup()">
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input v-model="email" type="email" class="form-control" name="email" placeholder="Enter email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input v-model="password" type="password" class="form-control" name="password" placeholder="Password">
                </div>
                <p class="red-text center" v-if="feedback">{{ feedback }}</p>
                <button type="submit" class="btn btn-primary">Signup</button>
            </form>
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
export default {
    name: 'Signup',
    data() {
        return {
            email: null,
            password: null,
            feedback: null
        }
    },
    methods: {
        signup() {
            if(this.email && this.password){
                //create user with email and password
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    this.$router.push({ name: 'Home' })
                }).catch(err => {
                    console.log('err')
                    console.log(err)
                    this.feedback = err.message
                })
            } else {
                this.feedback = "You must all fields."
            }
        }
    }
}
</script>

<style>
.signup{
    max-width: 400px;
    margin-top: 60px;
}
.signup h2 {
    font-size:  2.4em;
}
.signup .field {
    margin-bottom: 16px;
}
</style>