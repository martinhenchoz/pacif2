<template>
  <drop-down>
    <div
      class="lachotatuerta"
      slot="trigger"
      slot-scope="{
        mousedownHandler,
        focusHandler,
        blurHandler,
        keydownHandler,
        isShown
      }"
    >
      <div class="w-full relative h-24 bg-gray-800 flex justify-end">
        <!-- <div class="relative flex justify-end"> -->
          <div class="items-center text-white">
            <g-link to="/">
              <span class="sr-only">Logo</span>
              <img class="w-auto h-9 sm:h-13" src="../../static/logo_pacifico.png" />
            </g-link>
          </div>

          <!-- Mobile menu button -->
          <div class="items-center sm:hidden">
            <button
              class="flex items-center p-2 text-gray-700 transition duration-150 ease-in-out bg-gray-300 rounded focus:outline-none focus:shadow-solid"
              :class="{ 'border-gray-300 bg-gray-500 text-white ': isShown }"
              aria-haspopup="true"
              @mousedown="mousedownHandler"
              @focus="focusHandler"
              @blur="blurHandler"
              @keydown="keydownHandler"
            >
              <!-- Menu Icon -->
              <svg
                :class="{ 'hidden': isShown, 'block': !isShown}"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <!-- Close Icon -->
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

          <!-- Desktop Menu -->
          <div class="hidden sm:flex sm:items-center sm:ml-6">
            <g-link
            v-for="item in menu"
            :to="item.path"
            :key="item.path"
            class="font-medium text-gray-500 px-6 py-2 border border-transparent rounded hover:border-red-900 hover:text-red-900"
            >
              {{ item.name}}
            </g-link>
          </div>

        <!-- </div> -->
      </div>
    </div>

    <!-- Mobile Menu -->
    <div slot-scope="{ hide, blurHandler}">
      <g-link
        v-for="item in menu"
        :to="item.path"
        :key="item.path"
        class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
        role="menuitem"
        @blur="blurHandler"
        @click="hide"
      >
        {{ item.name }}
      </g-link>
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

