<template>
  <div class="layout">
    <div class="header">
      <nav-bar-component :modal="modal" @show-modal="showModal()" />
    </div>
    <div>
      <slot />
    </div>
    <footer-component />

    <!-- Modal (Formulario de Clientes) -->
    <modal-window v-model="modal">
      <form-clientes @hide-modal="hideModal()" />
    </modal-window>

  </div>
</template>

<script>

import NavBarComponent from '../components/NavBar.vue'
import FooterComponent from '../components/Footer.vue'
import FormClientes from "../components/FormClientes.vue"

export default {
  data() {
    return {
      modal: false
    }
  },
  components: { 
    FooterComponent, 
    NavBarComponent,
    FormClientes
  },
  methods: {
    showModal() {
      this.modal = true
    },
    hideModal() {
      this.modal = false
    }
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

