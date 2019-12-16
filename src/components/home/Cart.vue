<template>
    <div class="container">
        <br>
        <router-link :to="{ name: 'Shop' }"><span class="badge badge-primary badge-pill"><i class="fas fa-long-arrow-alt-left"></i> Continue Shopping</span></router-link>
        <br>
        <br>
      <div v-if="cart_cupcakes.length == 0" class="jumbotron">
        <h1 class="display-4">Your cart is empty!</h1>
        <p class="lead">Apparently you haven't added anything to your cart.</p>
        <hr class="my-4">
        <p class="lead">
          <router-link :to="{ name: 'Shop' }"><span class="bbtn btn-primary btn-lg">Browse Store</span></router-link>
        </p>
      </div>
      <div v-else class="row">
        <div class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your cart</span>
            <span class="badge pink badge-pill">{{ count }} items</span>
          </h4>
          <ul class="list-group mb-3">
            <li v-for="cupcake in cart_cupcakes" :key="cupcake.id"  class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h5 class="my-0">{{ cupcake.name }} </h5>
                <h6>  ${{ cupcake.price.toFixed(2) }} each</h6>
                <small class="text-muted">{{ cupcake.description }}</small><br>
                <input type="number" id="quantity" name="quantity" class="float-right quantity form-control" v-model="cupcake.quantity" min="1" max="10">
                <small class="float-left">quantity</small>
              </div>
              <h5 class="text-muted">${{ (cupcake.price * cupcake.quantity).toFixed(2) }}</h5>
              <a class="badge delete badge-pill float-right" v-on:click.stop="deleteCupcake(cupcake.id)"><i class="fas fa-times"></i></a>
            </li>
            <li class="list-group-item d-flex justify-content-between bg-light">
              <div class="text-success">
                <h6 class="my-0">Total (USD)</h6>
              </div>
              <h3 class="text-success">${{ total.toFixed(2) }}</h3>
            </li>
          </ul>
        </div>
        <div class="col-md-8 order-md-1">
          <h4 class="mb-3">Billing address</h4>
          <form class="needs-validation" novalidate="">
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">First name</label>
                <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Last name</label>
                <input type="text" class="form-control" id="lastName" placeholder="" value="" required="">
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="email">Email <span class="text-muted">(Optional)</span></label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com">
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="mb-3">
              <label for="address">Address</label>
              <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="">
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="mb-3">
              <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
              <input type="text" class="form-control" id="address2" placeholder="Apartment or suite">
            </div>

            <div class="row">
              <div class="col-md-5 mb-3">
                <label for="country">Country</label>
                <select class="custom-select d-block w-100" id="country" required="">
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <label for="state">State</label>
                <select class="custom-select d-block w-100" id="state" required="">
                  <option value="">Choose...</option>
                  <option>Arizona</option>
                  <option>California</option>
                  <option>Louisiana</option>
                  <option>Nevada</option>
                  <option>Nebraska</option>
                  <option>New Mexico</option>
                  <option>Texas</option>
                  <option>Tenesse</option>
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="zip">Zip</label>
                <input type="text" class="form-control" id="zip" placeholder="" required="">
                <div class="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
            <hr class="mb-4">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="same-address">
              <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="save-info">
              <label class="custom-control-label" for="save-info">Save this information for next time</label>
            </div>
            <hr class="mb-4">

            <h4 class="mb-3">Payment</h4>

            <div class="d-block my-3">
              <div class="custom-control custom-radio">
                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="">
                <label class="custom-control-label" for="credit">Credit card</label>
              </div>
              <div class="custom-control custom-radio">
                <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="">
                <label class="custom-control-label" for="debit">Debit card</label>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="cc-name">Name on card</label>
                <input type="text" class="form-control" v-model="info.name" disabled id="cc-name" placeholder="" required="">
                <small class="text-muted">Full name as displayed on card</small>
                <div class="invalid-feedback">
                  Name on card is required
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="cc-number">Credit card number</label>
                <input type="text" class="form-control" v-model="info.card" disabled id="cc-number" placeholder="" required="">
                <div class="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 mb-3">
                <label for="cc-expiration">Expiration</label>
                <input type="text" class="form-control" v-model="info.exp" disabled id="cc-expiration" placeholder="" required="">
                <div class="invalid-feedback">
                  Expiration date required
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="cc-expiration">CVV</label>
                <input type="text" class="form-control" v-model="info.cvv" disabled id="cc-cvv" placeholder="" required="">
                <div class="invalid-feedback">
                  Security code required
                </div>
              </div>
            </div>
            <router-link :to="{ name: 'Profile' }"><span class="badge badge-primary badge-pill">Update Payment Info</span></router-link>
            <hr class="mb-4">
            <router-link class="btn btn-primary btn-lg btn-block" :to="{ name: 'Checkout' }">Continue to checkout</router-link>
          </form>
        </div>
      </div>
      <br>
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'
import { type } from 'os'

export default {
    name: 'Cart',
    data(){
        return{
            cart_cupcakes: [],
            total: 0,
            count: 0,
            info: null
        }
    },
    methods: {
        deleteCupcake(id){
            // delete doc from firestore
            db.collection('cart').doc(id).delete()
            .then(() => {
                this.cart_cupcakes = this.cart_cupcakes.filter(cupcake => {
                    return cupcake.id != id;
                });
            })
        },
        updateTotal(){
          let total = 0;
          this.cart_cupcakes.forEach(function (value) {
            total += parseFloat(value.price * value.quantity)
          });

          this.total = total;
          console.log(this.total, typeof(this.total))
        }
    },
    updated(){
      if(this.cart_cupcakes.length > 0)
      {
        this.updateTotal()
      }
       
    },
    created(){
        let user = firebase.auth().currentUser
        console.log(user)
        //fetch data from the firestore
        db.collection('cart').where('user_id', '==', user.uid).get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                let cupcake = doc.data();
                cupcake.description = doc.data().description.substring(0,20) + "..."
                cupcake.price = doc.data().price;
                cupcake.id = doc.id
                this.cart_cupcakes.push(cupcake)
                this.total += parseFloat(cupcake.price)
                this.count++
            })
        })

        let ref = db.collection('users').where('user_id', '==', user.uid).get().then(snapshot => {
            snapshot.forEach(doc => {
                this.info = doc.data()
                this.info.id = doc.id
                console.log('inside foreach', this.info.name)
            })
        }).catch( (error) => { })

    }
}
</script>

<style>
.quantity{
  font-size: 12px;
  width: 35%;
}
.delete{
  color: white;
  background-color: #F846A0;
  height: 20px;
  cursor: pointer;
}
</style>