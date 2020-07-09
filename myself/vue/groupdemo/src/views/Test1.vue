<template>
  <div class="home">
    <div id="flip-list-demo" class="demo">
      <button @click="shuffle">Shuffle</button>
      <transition-group name="flip-list" tag="ul">
        <li v-for="item in items" class="flip-list-move" :key="item">{{ item }}</li>
      </transition-group>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Test1",
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  },
  components: {},
  methods: {
    shuffle() {
      this.items = this.$set(this.shuffleArray(this.items));
    },
    shuffleArray(v) {
      for (
        var j, x, i = v.length;
        i;
        j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x
      );
      console.log(v);
      return v;
    }
  }
};
</script>
<style scoped>
.flip-list-move {
  transition: transform 1s;
}
</style>
