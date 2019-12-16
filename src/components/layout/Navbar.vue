<template>
    <div>
        <nav class="navbar navbar-light fixed-top">
            <a class="navbar-brand mx-auto" href="/">
                <img src="@/assets/LogoSB.png" width="200" height="60" alt="">
            </a>
        </nav>
        <nav class="navbar navbar-expand-lg navbar-light fixed-bottom bg-light">
            <div class="navbar-nav mx-auto">
                <router-link :to="{ name: 'Home' }" class="nav-btn btn btn-pink btn-lg"><i class="fas fa-home"></i></router-link>
                <router-link :to="{ name: 'Shop' }" class="nav-btn btn btn-primary btn-lg"><i class="fas fa-gift"></i> Shop</router-link>
                <router-link v-if="!user" :to="{ name: 'Login' }" class="nav-btn btn btn-info btn-lg"><i class="fas fa-user"></i></router-link>
                <router-link v-if="user" :to="{ name: 'Profile' }" class="nav-btn btn btn-info btn-lg"><i class="fas fa-user"></i></router-link>
                <a v-if="user" class="nav-btn btn btn-danger btn-lg" @click="logout"><i class="fas fa-sign-out-alt"></i></a>
            </div>
            <div class="right-side">
                <router-link v-if="user" :to="{ name: 'Cart' }" class="btn btn-pink btn-lg"><i class="fas fa-shopping-cart"></i> My Cart <span v-if="user" class="badge pink badge-pill">{{ count }}</span></router-link>
            </div>
        </nav>
        <br>
        <br>
        <br>
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
.btn-pink{
    background-color: #F846A0;
    text-decoration:none;
    color: white;
}
.btn-pink:hover{
    background-color: #F874B7;
    text-decoration:none;
    color: white;
}
.nav-btn{
    margin: auto 7px;
}
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
.fixed-bottom{
    font-size: 22px;
}
</style>