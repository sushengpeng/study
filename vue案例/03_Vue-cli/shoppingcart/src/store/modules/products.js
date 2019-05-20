import shop from '../../api/shop'
// shop.getProducts
export default {
  namespaced: true,
  state: {
    all: []
  },
  actions: {
    getAllProducts ({commit}) {
      shop.getProducts().then(res => {
        // console.log(res)
        // 调用方法获取所有的商品，将对应的商品数据发送过去
        commit('setProducts', res)
      })
    }
  },
  mutations: {
    setProducts (state, products) {
      state.all = products
    }, 
    decrementProductInventory (state, {id}) {
      console.log(id)
      const product = state.all.find(product => product.id === id)
      product.inventory--
    }
  }
}