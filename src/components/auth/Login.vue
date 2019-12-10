<template>
    <div class="signup card bg-light mb-3 container">
        <div class="card-body">
            <h2 class="center">Login</h2>
            <form @submit.prevent="login">
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
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
export default {
    name: 'Login',
    data() {
        return {
            email: null,
            password: null,
            feedback: null
        }
    },
    methods: {
        login() {
            if(this.email && this.password){
                this.feedback = null
                // Log user in
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(cred => {
                    console.log(cred.user)
                    this.$router.push({ name: 'Home' })
                }).catch(err => {
                    this.feedback = err.message
                })
            } else {
                this.feedback = 'Please fill in both fields'
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