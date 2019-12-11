<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
a:not([href]):not([tabindex]){
  color: white;
  text-decoration: none;
}

a:not([href]):not([tabindex]):hover{
  color: white;
}
</style>
