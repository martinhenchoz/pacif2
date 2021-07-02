<template>

  <div>

    <button
    class="group flex justify-between w-full px-4 py-2 text-base font-bold text-left text-gray-700 bg-gray-200 shadow-md rounded-lg hover:bg-red-700 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75"
    @click.prevent="open = !open"
    type="button"
    >
      <slot name="title"></slot>

      <svg xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 20 20" 
      fill="currentColor" 
      class="w-5 h-5 text-gray-700 group-hover:text-white"
      :class="open ? 'transform rotate-180' : ''"
      >
        <path 
        fill-rule="evenodd" 
        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd">
        </path>
      </svg>
    </button>
    
    <div 
    v-if="open"
    class="px-4 pt-4 pb-2 text-base text-gray-700">
      <slot name="content" />
    </div>
    
  </div>
 
</template>

<script>

var open = false

export default {
  data() {
    return {
      open
    }
  }
}
</script>
