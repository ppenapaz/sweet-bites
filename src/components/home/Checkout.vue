<template>
    <div class="container">
        <div class="jumbotron">
            <h1>Thanks for your payment!</h1>
            <p>We appreciate your payment and we hope you enjoy your cupcakes</p>
        </div>
        <router-link :to="{ name: 'Home' }"><span class="badge badge-primary badge-pill"><i class="fas fa-long-arrow-alt-left"></i> Back Home</span></router-link>
    </div>
</template>

<script>
export default {
    name: 'Checkout',
    data(){
        return {
            
        }
    }
}
</script>

<style>

</style>