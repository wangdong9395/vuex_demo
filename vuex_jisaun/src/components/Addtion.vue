<template>
    <div>
      <h3>当前的count值为:{{$store.state.count}}</h3>
      <button @click="handle1">+1</button>
      <button @click="handleN">+N</button>
      <button @click="handleAsync">async</button>
      <p>{{this.$store.getters.showInfo}}</p>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    handle1 () {
      this.$store.commit('add')
    },
    handleN () {
      this.$store.commit('addN', 5)
    },
    handleAsync () {
      this.$store.dispatch('addAsync')
    }
  }
}
</script>

<style scoped>

</style>
