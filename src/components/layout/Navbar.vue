<template>
    <div>
        <nav class="navbar navbar-light">
            <a class="navbar-brand mx-auto" href="/">
                <img src="@/assets/LogoSB.png" width="200" height="60" alt="">
            </a>
        </nav>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="navbar-nav mx-auto">
                <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
                <router-link :to="{ name: 'Shop' }" class="nav-link">Shop</router-link>
                <router-link v-if="!user" :to="{ name: 'Signup' }" class="nav-link">Signup</router-link>
                <router-link v-if="!user" :to="{ name: 'Login' }" class="nav-link">Login</router-link>
                <a v-if="user" class="nav-link" @click="logout">Logout</a>
            </div>
            <div class="right-side">
                <router-link :to="{ name: 'Cart' }" class="btn btn-info"><i class="fas fa-shopping-cart"></i> Cart <span v-if="user" class="badge badge-secondary badge-pill">{{ count }}</span></router-link>
            </div>
        </nav>
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'

export default {
    name: 'Navbar',
    data(){
        return {
            user: null,
            count: 0
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
            this.count = 0
            if(user) {
                this.user = user

                let ref = db.collection('cart').where('user_id', '==', this.user.uid)
                ref.onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if(change.type == 'added'){
                        this.count ++
                    }

                    if(change.type == 'removed'){
                        this.count --
                    }
                })
            })

            } else {
                this.user = null
            }
        })

        
        //if(this.user){
        
        //}

        
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
.right-side{
    position: absolute;
    right: 10px;
}
</style>