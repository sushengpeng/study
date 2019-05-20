<template>
  <div>
    <h2>购物车</h2>
    <div v-if="cartProducts.length">
      <ul>
        <li v-for="(product, index) in cartProducts" :key="index">
          {{product.title}} - {{product.price}} - {{product.inventory}}
        </li>
      </ul>
      <button @click="checkout">结算</button>
    </div>
    
    <span v-else>请添加商品</span>
    <br>
    <span v-if="checkoutStatus">结算{{checkoutStatus}}</span>
  </div>
</template>

<script>
export default {
  computed: {
    cartProducts () {
      return this.$store.getters['cart/cartProducts']
    },
    checkoutStatus () {
      return this.$store.state.cart.checkoutStatus
    }
  },
  methods: {
    checkout () {
      this.$store.dispatch('cart/checkout')
    }
  }
}
</script>

<style>

</style>
