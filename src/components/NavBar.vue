<template>
  <drop-down
    tag-name="nav"
    id="nav"
    :classes="{}"
    :fixed-classes="{}"
    class="max-w-7xl py-4 bg-gray-900 transition duration-500"
    :class="toggleNavClass()"
  >
    <div
      slot="trigger"
      slot-scope="{
        mousedownHandler,
        focusHandler,
        blurHandler,
        keydownHandler,
        isShown,
      }"
      class="flex items-center justify-between w-full px-4 sm:px-6 lg:px-16"
    >
      <!-- Logo Pacifico -->
      <div class="flex flex-shrink-0">
        <g-link to="/">
          <span class="sr-only">Logo</span>
          <g-image
            class="w-auto origin-left transition transform duration-500 scale-75"
            :class="{ 'sm:scale-100': !sticky, 'sm:scale-75': sticky }"
            src="~/assets/logo_pacifico_blanco.png"
          />
        </g-link>
      </div>

      <!-- Mobile menu button -->
      <div class="flex items-center sm:hidden">
        <button
          class="inline-flex items-center justify-center p-1 bg-white transition duration-150 ease-in-out rounded-md hover:bg-pacif focus:outline-none focus:bg-yellow-500"
          aria-label="Main menu"
          aria-expanded="false"
          @mousedown="mousedownHandler"
          @blur="blurHandler"
          @focus="focusHandler"
          @keydown="keydownHandler"
        >
          <svg
            :class="{ hidden: isShown, block: !isShown }"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            :class="{ hidden: !isShown, block: isShown }"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden sm:flex">
        <g-link
          v-for="item in menu"
          :to="item.path"
          :key="item.path"
          class="text-lg tracking-tighter uppercase text-white mx-4 border-b border-transparent hover:text-yellow-500 hover:border-b hover:border-yellow-500"
        >
          {{ item.name }}
        </g-link>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      slot-scope="{ hide }"
      class="px-1 pt-4 pb-3 sm:hidden sm:px-3"
    >
      <g-link
        v-for="item in menu"
        :to="item.path"
        :key="item.path"
        class="block px-3 py-2 text-white transition ease-in-out hover:border hover:bg-red-700 hover:text-white focus:outline-none focus:bg-gray-100"
        role="menuitem"
        @click="hide"
      >
        {{ item.name }}
      </g-link>
    </div>
  </drop-down>
</template>

<script>
import menu from "@/menu.json";
let sticky = false;

export default {
  name: "NavBar",
  data() {
    return {
      menu,
      sticky,
    };
  },
  methods: {
    toggleNavClass() {
      if (this.sticky == false) {
        return "sm:bg-opacity-0"
      } else {
        return "sm:bg-opacity-80"
      }
    },
  },
  mounted() {
    window.document.onscroll = () => {
      let navBar = document.getElementById("nav")
      if (window.scrollY > 72) {
        this.sticky = true
      } else {
        this.sticky = false
      }
    }
  }
}
</script>
