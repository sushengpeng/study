import shop from '../../api/shop'
export default {
  namespaced: true,
  state: {
    /* 
      [
        {
          id: 
          inventory
        }
      ]
    */
    items: [],
    checkoutStatus: null
  },
  getters: {
    cartProducts (state, getters, rootState) {
      // 根据items去所有商品中匹配对应的商品全部信息
      // rootState.products.all
      const products = rootState.products.all
      // 根据state中items 和 products进行结合生成新的数据
      return state.items.map(item => {
        const p = products.find(product => product.id === item.id)
        /* return {
          id: p.id,
          title: p.title,
          price: p.price,
          inventory: item.inventory
        } */

        return {...p, inventory: item.inventory}
      })

    }
  },
  actions: {
    addProductToCart ({commit, state}, product) {
      // 每次加入购物车都要将checkoutStatus变成null
      commit('setCheckStatus', null)
      // 判断当前商品是否有库存
      if (product.inventory > 0) {
        // 判断当前商品是否在购物车中
        const cartItem = state.items.find(item => item.id === product.id)
        if (!cartItem) {
          // 商品不存在
          commit('pushPrductToCart', product)
        } else {
          // 商品存在
          commit('incrementItemQuantity', cartItem)
        }
        // 把库存商品数量-1 在模块a中提交模块b的mutation
        commit('products/decrementProductInventory', product, { root: true })
      } 
    },
    checkout ({commit, state}) {
      // 先把购物车中所有的商品存起来
      const items = state.items
      // 点击checkout需要把items清空
      commit('setCartItems', [])

      // 调用接口
      shop.buyProducts(items).then(() => {
        // 将checkout状态该为成功
        console.log('成功')
        commit('setCheckStatus', '成功')
      }).catch(() => {
        // 将checkout状态改为失败，并且重新设置之前的items
        console.log('失败')
        commit('setCartItems', items)
        commit('setCheckStatus', '失败')

      })
    }
  },
  mutations: {
    pushPrductToCart (state, {id}) {
      state.items.push({id, inventory: 1})
      // console.log()
    },
    incrementItemQuantity (state, {id}) {
      // 根据传递过来的购物车中商品id，去items中查找对应的商品，找到后将商品的数量+1
      const cartItem = state.items.find(item => item.id === id)
      cartItem.inventory++
    },
    setCartItems (state, items) {
      state.items = items
    },
    setCheckStatus (state, status) {
      state.checkoutStatus = status
    }
  }
}