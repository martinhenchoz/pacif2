<template>
  <div>
    <pre>{{ todos }}</pre>
  </div>
</template>

<script>

  import axios from 'axios'

  export default {
    data () {
      return {
        todos: null
      }
    },
    async mounted () {
      try {
        const results = await axios.get('http://localhost:8055/items/homepage')
        this.todos = results.data.data
      } catch (error) {
        console.log(error)
      }
    }
  }

</script>