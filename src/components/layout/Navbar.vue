<template>
    <nav class="navbar navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand mx-auto" href="/">
            <img src="@/assets/LogoSB.png" width="200" height="60" alt="">
        </a>
        <router-link :to="{ name: 'Shop' }" class="btn btn-info"><i class="fas fa-shopping-cart"></i> Shop</router-link>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
                </li>
                <li v-if="!user" class="nav-item">
                    <router-link :to="{ name: 'Signup' }" class="nav-link">Signup</router-link>
                </li>
                <li v-if="!user" class="nav-item">
                    <router-link :to="{ name: 'Login' }" class="nav-link">Login</router-link>
                </li>
                <li v-if="user" class="nav-item">
                    <a class="nav-link" @click="logout">Logout</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'Navbar',
    data(){
        return {
            user: null
        }
    },
    methods: {
        logout(){
            //redirect after logout
            firebase.auth().signOut().then(() => {
                this.$router.push({ name: 'Login' })
            })
        }
    },
    created() {
        // everytime user logs in or logs out or signs up
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.user = user
            } else {
                this.user = null
            }
        })
    }
}
</script>

<style>
.navbar-logo {
    width: 90px;
}

.navbar {
  background-color: #fff;
}

</style>