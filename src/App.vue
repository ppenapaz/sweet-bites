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

body{
  background-color: #fff;
  background: repeating-linear-gradient(
    45deg,
    #fbb7bf,
    #fbb7bf 20px,
    white 20px,
    white 30px
  );
}


#app {
  position: relative;
  min-height: 100vh;
}
.pink{
    background-color:  rgb(250, 126, 188);
    color: white;
}
.container{
  margin-top: 60px;
  background-color: white;
  border-radius: 10px;
}

</style>
