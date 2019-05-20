<template>
  <!-- 展示数据 -->
  <div>
    <h2>商品列表</h2>
    <ul>
      <li v-for="(product, index) in products" :key="index" >
        {{product.title}} - {{product.price}} - {{product.inventory}}
        <br>
        <button @click="addProductToCart(product)" :disabled="!product.inventory">加入购物车</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    products () {
      return this.$store.state.products.all
    }
  },
  created () {
    this.$store.dispatch('products/getAllProducts')
    console.log(this.$store)
  },
  methods: {
    addProductToCart (product) {
      this.$store.dispatch('cart/addProductToCart', product)
      console.log(this.$store.state)
    }
  }
}
</script>

<style>

</style>
