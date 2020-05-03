<template>
  <div id="app">
    <addtion></addtion>
    <substraction></substraction>
  </div>
</template>

<script>
import Addtion from './components/Addtion'
import Substraction from './components/Substraction'
export default {
  data () {
    return {
    }
  },
  components: {
    addtion: Addtion,
    substraction: Substraction
  }
}
</script>

<style>

</style>
