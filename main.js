Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
    <div class="product-container">
        <div class="product-image">
         <img v-bind:src="image" v-bind:alt="description">
        </div>
      <div class="product-info">
        <h3> {{title}}</h3>
        <p v-if="inventory">in stock  {{inventory}} </p>
        <!-- <p v-else-if="inventory <= 10 && inventory > 0">almost sold out</p> -->
        <p  v-else :class="{active: isActive}">out of stock</p>
         <p >{{onSale}} </p> 
         <p>Shipping: {{shipping}}</p>
        <ul class="floatLeft">
          <li v-for="detail in details">
            {{detail}}
          </li>
        </ul>
        <ul v-for="size in sizes" class="floatLeft">
          <li>{{size}}</li>
        </ul>
        <div v-for="(variant, index) in variants" 
        :key="variant.variantId" 
        class="color-circle floatLeft"
        :style="{backgroundColor: variant.variantColor}"
        @mouseover="updateProduct(index)"
        >
        </div>
        <button class="button" v-on:click="addToCart" :disabled=!inventory :class="{disabledButton : !inventory}">Add to Cart</button> 
        <button class="button" v-on:click="removeFromCart" :disabled="inventory <= 0" :class="{disabledButton : inventory <= 0}">Remove </button>
        </div>
        <div class="review-container">
        
        <h4>Reviews</h4>
        <p v-if="!reviews.length">There are no reviews yet</p>
        <ul>
        <li v-for="review in reviews">
        <p>Name: {{ review.name }}</p>
        <p>Review: {{ review.review }}</p>
        <p>Rating: {{ review.rating }}</p>
        </li>
        </ul>
          <product-review @review-submitted="addReview"></product-review>
          </div>
      </div>

   
  </div>
`,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            description: 'socks_blue',
            isActive: true,
            details: [
                "80% cotton", "20% polyester ", "Gender- neutral"
            ],
            variants: [{
                    product: 'Socks',
                    brand: 'Vue blue',
                    variantId: 2234,
                    variantColor: "blue",
                    variantImage: "assets/images/socks_blue.jpg",
                    variantQuantity: 10,
                    onSale: true

                },
                {
                    product: 'Socks',
                    brand: 'Vue green',
                    variantId: 2235,
                    variantColor: "green",
                    variantImage: "assets/images/socks_green.jpg",
                    variantQuantity: 0,
                    onSale: false

                }

            ],
            sizes: ["23-25", "25-27", "27-29"],
            reviews: []
        }
    },


    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)

        },
        updateProduct(index) {
            this.selectedVariant = index
            console.log(index)
        },
        addReview(productReview) {
            this.reviews.push(productReview)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inventory() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        onSale() {

            return this.variants[this.selectedVariant].brand
        },
        shipping() {
            if (this.premium) {
                return "Free";
            } else {
                return 2.99
            }


        }
    }

})
Vue.component('product2', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
    <div class="product-container">
    <div class="product-image">
      <img v-bind:src="image" v-bind:alt="description">
     </div>
      <div class="product-info">
        <h3> {{title}}</h3>
        <p v-if="inventory">in stock  {{inventory}} </p>
        <!-- <p v-else-if="inventory <= 10 && inventory > 0">almost sold out</p> -->
        <p  v-else :class="{active: isActive}">out of stock</p>
         <p >{{onSale}} </p> 
         <p>Shipping: {{shipping}}</p>
        <ul class="floatLeft">
          <li v-for="detail in details">
            {{detail}}
          </li>
        </ul>
        <ul v-for="size in sizes" class="floatLeft">
          <li>{{size}}</li>
        </ul>
        <div v-for="(variant, index) in variants" 
        :key="variant.variantId" 
        class="color-circle floatLeft"
        :style="{backgroundColor: variant.variantColor}"
        @mouseover="updateProduct(index)"
        >
        </div>
         <button class="button" v-on:click="addToCart" :disabled=!inventory :class="{disabledButton : !inventory}">Add to Cart</button> 
        <button class="button" v-on:click="removeFromCart" :disabled="inventory <= 0" :class="{disabledButton : inventory <= 0}">Remove </button>
        </div> 
        
       
        
        <div class="review-container">
        <h4>Reviews</h4>
        <p v-if="!reviews.length">There are no reviews yet</p>
        <ul>
        <li v-for="review in reviews">
        <p>Name: {{ review.name }}</p>
        <p>Review: {{ review.review }}</p>
        <p>Rating: {{ review.rating }}</p>
        </li>
        </ul>
          <product-review @review-submitted="addReview"></product-review>
       
      </div> 
  </div>
`,
    data() {
        return {
            product: 'Boots',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            description: 'Boots_blue',
            isActive: true,
            details: [
                "100% Italian leather upper", "Organic cotton laces", "Lightweight rubber sole"
            ],
            variants: [{
                    product: 'Boots',
                    brand: 'Vue yellow',
                    variantId: 2234,
                    variantColor: "yellow",
                    variantImage: "assets/images/yellow_boots.jpeg",
                    variantQuantity: 10,
                    onSale: true

                },
                {
                    product: 'Boots',
                    brand: 'Vue green',
                    variantId: 2235,
                    variantColor: "green",
                    variantImage: "assets/images/green_boots.jpeg",
                    variantQuantity: 2,
                    onSale: false

                }

            ],
            sizes: ["23-25", "25-27", "27-29"],
            reviews: []


        }
    },


    methods: {
        addToCart() {

            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)

        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
        },
        updateProduct(index) {
            this.selectedVariant = index
            console.log(index)
        },
        addReview(productReview) {
            this.reviews.push(productReview)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inventory() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        onSale() {

            return this.variants[this.selectedVariant].brand
        },
        shipping() {
            if (this.premium) {
                return "Free";
            } else {
                return 2.99
            }


        }
    }

})
Vue.component('product-review', {
    template: `
    <form class="review-form" @submit.prevent="onSubmit">
    <p v-if="errors.length">
    <b>Please correct the following error(s)</b>
    <ul>
    <li v-for="error in errors">{{error}}</li>
    </ul>
    </p>
      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name" placeholder="name">
      </p>
      
      <p>
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review"></textarea>
      </p>
      
      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>
     <p>
        <input type="submit" value="Submit" class="button">  
      </p>    
    
    </form>
    `,
    data() {
        return {
            name: null,
            review: null,
            rating: null,
           
            errors: []
        }
    },
    methods: {
        onSubmit() {
            if (this.name && this.review && this.rating ) {
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating,
                   
                }
                this.$emit('review-submitted', productReview)
                this.name = null
                this.review = null
                this.rating = null
               
            } else {
                if (!this.name) this.errors.push("Name required.")
                if (!this.review) this.errors.push("Review required.")
                if (!this.rating) this.errors.push("Rating required.")
                
            }

        }
    }

})

var app = new Vue({
    el: '#app',
    data: {
        premium: false,
        cart: [],

    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeProduct(id) {
            this.cart.pop(id)
        }
    }

});