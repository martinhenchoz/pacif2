<template>
  <div class="layout">
    <div class="header">
      <NavBar />
    </div>
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>

import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

export default {
  components: { Footer, NavBar }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

