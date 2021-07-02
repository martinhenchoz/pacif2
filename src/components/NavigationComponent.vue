<template>
  <drop-down tag-name="nav">
    <div
    slot="trigger"
    slot-scope="{
      mousedownHandler,
      focusHandler,
      blurHandler,
      keydownHandler,
      isShown,
      hide
    }"
    class="w-full flex justify-between content-center bg-gray-800"
    >
      <div class="relative flex h-24 content-center">
        <div class="relative flex justify-between">
          <!-- Logo Pacifico -->
          <div class="flex text-white w-2/6">
              <g-link to="/" class="flex items-center">
                <span class="sr-only">Logo</span>
                <img class="w-auto h-8 sm:h-10" src="../../static/logo_pacifico_blanco.png" />
              </g-link>
          </div>
          <!-- Mobile menu button -->
          <div class="flex items-center sm:hidden">
            <button
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:text-pacif focus:outline-none focus:bg-gray-300 focus:text-pacif"
              aria-label="Main menu"
              aria-expanded="false"
              @mousedown="mousedownHandler"
              @blur="blurHandler"
              @focus="focusHandler"
              @keydown="keydownHandler"
            >
              <svg
                :class="{ 'hidden': isShown, 'block': !isShown}"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                :class="{ 'hidden': !isShown, 'block': isShown}"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <!-- Desktop menu -->
          <div class="hidden sm:flex sm:justify-end sm:ml-6 sm:items-center sm:w-4/6">
            <g-link
            v-for="item in menu"
            :to="item.path"
            :key="item.path"
            @keydown="keydownHandler"
            @click="hide"
            class="text-sm uppercase font-semibold tracking-tight text-white ml-5 px-6 py-2 border border-transparent rounded hover:text-pacif"
            >
              {{ item.name}}
            </g-link>
          </div>
        </div>
      </div>
      <!-- Mobile menu -->
      <div 
        class="sm:hidden absolute inset-x-0 m-4 py-2 bg-gray-50 border border-gray-200 rounded shadow-md"
        :class="{ 'hidden': !isShown, 'block': isShown}"
        >
          <div class="py-2">
            <g-link
            v-for="item in menu"
            :to="item.path"
            :key="item.path"
            class="block px-5 py-2 text-base font-medium transition duration-50 ease-in-out focus:outline-none focus:bg-red-800 focus:text-white hover:bg-red-800 hover:text-white"
            >
              {{ item.name}}
            </g-link>
          </div>
      </div>
    </div>

  </drop-down> 
</template>

<script>

  import menu from '@/menu.json'

  export default {
    data() {
      return {
        menu
      }
    }
  }

</script>

