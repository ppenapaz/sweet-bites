<template>
    <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-100" src="https://images.wallpaperscraft.com/image/cakes_pastries_cake_110766_1280x720.jpg" alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Order now</a>
                    <p>...</p>
                </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="https://images.wallpaperscraft.com/image/cupcakes_dessert_cherry_104935_1280x720.jpg" alt="Second slide">
                    <div class="carousel-caption d-none d-md-block">
                        <h3>Cherry Cupcake</h3>
                        <a class="btn btn-danger btn-lg" href="#" role="button">Order now</a>
                    </div>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="https://images.wallpaperscraft.com/image/cakes_pastries_sweet_91344_300x188.jpg" alt="Third slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <div class="container">
            <h2>gg</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data(){
        return{

        }
    }
}
</script>

<style>
.carousel-inner > .carousel-item {
  height: 500px;
}
</style>