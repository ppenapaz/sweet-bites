<template>
    <footer id="footer" class="my-5 pt-5 text-muted text-center text-small">
    <p class="mb-1">© 2019 - 2020 Sweet Bites</p>
    <ul class="list-inline">
        <li class="list-inline-item"><a href="#">Privacy</a></li>
        <li class="list-inline-item"><a href="#">Terms</a></li>
        <li class="list-inline-item"><a href="#">Support</a></li>
    </ul>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data(){
        return{
            
        }
    }
}
</script>

<style>

#content-wrap {
  padding-bottom: 2.5rem;    /* Footer height */
}

#footer {
    background-color: white;
    bottom: 0%;
    width: 100%;
    height: 300px
}
</style>