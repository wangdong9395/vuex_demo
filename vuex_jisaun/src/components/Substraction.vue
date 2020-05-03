<template>
    <div>
      <h3>当前的count值为:{{number}}</h3>
      <button @click="sub">-1</button>
      <button @click="subAsync">subasync</button>
      <button @click="subN(3)">-N</button>
      <p>{{showInfo2}}</p>
    </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    number () {
      return this.$store.state.count
    },
    ...mapGetters(['showInfo2'])
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsync'])
  }
}
</script>

<style scoped>

</style>
