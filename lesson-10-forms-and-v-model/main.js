Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <div class="product">

      <div class="product-image">
        <img :src="image" >
      </div>

      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>

        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div v-for="(variant, index) in variants" 
            :key="variant.variantId" 
            class="color-box" 
            :style="{ backgroundColor: variant.variantColor }" 
            @mouseover="updateProduct(index)">
        </div>

        <div>
          <button v-on:click="addToCart()"
            :class="{disabledButton: !inStock}">
          Add to cart</button>
        </div>

        <div>
          <h2>Reviews</h2>
          <p v-if="!reviews.length">There are no reviews yet.</p>
          <ul>
            <li v-for="review in reviews">
              <p>{{ review.name }}</p>
              <p>Rating: {{ review.rating }}</p>
              <p>{{ review.review }}</p>
            </li>
          </ul>
        </div>

      </div>

      <product-review @review-submitted="addReview"></product-review>

    </div>
  `,
  data() {
    return {
      brand: 'Vue Mastery',
      product: 'Socks',
      selectedVariant: 0,
      onSale: true,
      reviews: [],
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage: './assets/vmSocks-green-onWhite.jpg',
          variantQuantity: 10
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage: './assets/vmSocks-blue-onWhite.jpg',
          variantQuantity: 10
        }
      ],
    }
  },
  methods: {
    addToCart: function () {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
    },
    updateProduct: function(index) {
      this.selectedVariant = index;
    },
    addReview(review) {
      this.reviews.push(review)
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    },
    shipping() {
      if (this.premium) {
        return "Free"
      }
      return 2.99
    }
  }
})

Vue.component('product-review', {
  template: `
    <div>
      <div v-if="errors.length">
        <p v-for="error in errors">{{ error }}</p>
      </div>
      <form class="review-form" @submit.prevent="submitReview">
        <input v-model="name" type="text" placeholder="name">
        <textarea v-model="review"></textarea>
        <select v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
        <div>
          <input type="radio" name="recommend" value="yes">
          <label for="yes">yes</label><br>
          <input type="radio" name="recommend" value="no">
          <label for="no">no</label><br>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  `,
  data() {
    return {
      name: '',
      review: '',
      rating: null,
      recommend: '',
      errors: []
    }
  },
  methods: {
    submitReview() {
      this.errors = []
      if (this.name && this.review && this.rating && this.recommend) {
        let review = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          recommend: this.recommend
        }
        this.name = ''
        this.review = ''
        this.rating = null
        this.recommend = null
        this.$emit('review-submitted', review);
      } else {
        if (!this.name) this.errors.push("Name required")
        if (!this.review) this.errors.push("Review required")
        if (!this.rating) this.errors.push("Rating required")
        if (!this.recommend) this.errors.push("Recommend required")
      }
    }
  }
})
  

var app = new Vue({
  el: '#app',
  data: {
    premium: false,
    cart: []
  },
  methods:  {
    updateCart(id) {
      this.cart.push(id)
    },
  }
})