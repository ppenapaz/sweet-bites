<template>
    <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item">
                    <img class="d-block w-100" src="https://images.wallpaperscraft.com/image/cupcakes_dessert_cherry_104935_1280x720.jpg" alt="First slide">
                    <div class="carousel-caption d-none d-md-block">
                        <a class="btn btn-danger btn-lg" href="#" role="button">Cherry Cupcake</a>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="https://images.wallpaperscraft.com/image/cupcake_sprinkling_dessert_108701_1280x720.jpg" alt="First slide">
                    <div class="carousel-caption d-none d-md-block">
                        <a class="btn chocolate btn-lg" href="#" role="button">Free Shipping</a>
                        <p></p>
                    </div>
                </div>
                <div class="carousel-item active">
                    <img class="d-block w-100" src="https://images.wallpaperscraft.com/image/cupcake_frosting_baking_dessert_113283_1280x720.jpg" alt="First slide">
                    <div class="carousel-caption d-none d-md-block">
                    </div>
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
        <div class="container text-center">
            <br>
            <br>
            <h1>Welcome</h1>
            <p>Select your favorite cupcakes, cookies and brownies for same day delivery and pick-up! Custom designs not available.</p>
            <br>
            <div class="card-columns">
                <div class="card">
                    <img class="card-img-top" src="https://c.stocksy.com/a/ldv500/z9/1413213.jpg?1568257312" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">I love them</h5>
                        <p class="card-text">I love sweet bites' cupcakes, it makes me feel happy! 😃</p>
                        <p class="card-text"><small class="text-muted">Max</small></p>
                        <p class="card-text"><small class="text-muted">Last updated 30 mins ago</small></p>
                    </div>
                </div>
                <div class="card p-3">
                    <blockquote class="blockquote mb-0 card-body">
                    <p>Best. Cheesecake cupcake. EVER!! Light, fluffy, airy and out of this world delicious! Put me in a bathtub & cover me in this cheesecake.</p>
                    <footer class="blockquote-footer">
                        <small class="text-muted">
                        Todd M.
                        </small>
                    </footer>
                    </blockquote>
                </div>
                <div class="card">
                    <img class="card-img-top" src="https://ak8.picdn.net/shutterstock/videos/4814168/thumb/1.jpg" alt="Card image cap">
                    <div class="card-body">
                    <h5 class="card-title">Just the best ones!</h5>
                    <p class="card-text">Best cupcakes ever. Well, some of the best I have ever had... There's a reason why an item from their bakery made Oprah's top list for the holidays...</p>
                    <p class="card-text"><small class="text-muted">Caroline</small></p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="https://photos.smugmug.com/Events/Last-Fling/Last-Fling-2017/LF2017-Family-Fun-Land/LF2017-FFL-Cupcake-Contest/i-LX574ZQ/0/d65f0a16/L/LF2017%20FFL%20-%20Contest%20-%20Cupcake%20Eating%20-%20Bellandi-039-L.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">I love them</h5>
                        <p class="card-text">All of their cakes and cupcakes are yummy but the blue velvet is to die for! 🥰</p>
                        <p class="card-text"><small class="text-muted">Jessie</small></p>
                        <p class="card-text"><small class="text-muted">Last updated 1 day ago</small></p>
                    </div>
                </div>
                <div class="card p-3 text-right">
                    <blockquote class="blockquote mb-0">
                    <p>Deliciouslyyy amazing and fast delivery, I definetly recomment them.</p>
                    <footer class="blockquote-footer">
                        <small class="text-muted">
                        Mark
                        </small>
                    </footer>
                    </blockquote>
                </div>
                <div class="card">
                    <img class="card-img" src="http://1.bp.blogspot.com/_hbQXH-AR8H8/SwnIAur7FrI/AAAAAAAAADA/gIc7ucyOV7k/s1600/IMG_6885.JPG" alt="Card image">
                    <div class="card-body">
                        <h5 class="card-title">We love them</h5>
                        <p class="card-text">All of their cakes and cupcakes are yummy but the blue velvet is to die for! 🥰</p>
                        <p class="card-text"><small class="text-muted">Monica</small></p>
                        <p class="card-text"><small class="text-muted">Last updated 1 day ago</small></p>
                    </div>
                </div>
            </div>
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
.chocolate{
    background-color: brown;
    color: white;
}

.chocolate:hover{
    background-color: rgb(114, 29, 29);
    color: white;
}


</style>