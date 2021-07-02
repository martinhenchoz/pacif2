// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueTailwind from 'vue-tailwind'
import TDropdown from 'vue-tailwind/dist/t-dropdown'
import './css/main.css'

const settings = {
  'drop-down': {
    component: TDropdown,
    props: {
      fixedClasses: {
        button: 'flex items-center text-red-700 block px-4 py-2 transition duration-75 ease-in-out border border-red-700 rounded shadow-sm focus:border-red-900 focus:ring-3 focus:ring-red-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
        wrapper: 'inline-flex flex-col',
        dropdownWrapper: 'relative z-20',
        dropdown: 'origin-top absolute right-0 w-64 shadow mt-2',
        enterClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition transform ease-out duration-150',
        enterToClass: 'opacity-100 scale-100',
        leaveClass: 'opacity-100 scale-100',
        leaveActiveClass: 'transition transform ease-in duration-150',
        leaveToClass: 'opacity-0 scale-75'
      },
      classes: {
        button: 'hover:bg-red-700 hover:text-white',
        dropdown: 'bg-gray-50'
      },
      variants: {}
    }
  }
}

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueTailwind, settings)
}





