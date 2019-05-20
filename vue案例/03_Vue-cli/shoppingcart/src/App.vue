<template>
  <div id="app">
    <ProductList></ProductList>
    <hr>
    <ShoppingCart></ShoppingCart>
  </div>
</template>

<script>
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'
export default {
  name: 'app',
  components: {
    ProductList, ShoppingCart
  }
}
</script>

<style>

</style>
