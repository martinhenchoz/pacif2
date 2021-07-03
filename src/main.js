// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueTailwind from 'vue-tailwind'
import TDropdown from 'vue-tailwind/dist/t-dropdown'
import TModal from 'vue-tailwind/dist/t-modal'

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
  },
  'modal-window': {
    component: TModal,
    props: {
      fixedClasses: {
        overlay: 'z-40  overflow-auto scrolling-touch left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-opacity-50',
        wrapper: 'relative mx-auto z-50 max-w-3xl px-3 py-12',
        modal: 'overflow-visible relative  rounded',
        body: 'p-3',
        header: 'border-b p-3 rounded-t',
        footer: 'p-3 rounded-b',
        closeIcon: 'text-gray-100 hover:text-white',
        close: 'absolute right-6 top-6 rounded text-gray-200 bg-gray-400 p-2 hover:bg-red-600'
      },
      classes: {
        overlay: 'bg-black',
        wrapper: '',
        modal: 'bg-white shadow',
        body: 'p-3',
        header: 'border-gray-100',
        footer: 'bg-gray-100',
        close: '',
        closeIcon: 'fill-current h-4 w-4',
        overlayEnterClass: 'opacity-0',
        overlayEnterActiveClass: 'transition ease-out duration-100',
        overlayEnterToClass: 'opacity-100',
        overlayLeaveClass: 'opacity-100',
        overlayLeaveActiveClass: 'transition ease-in duration-75',
        overlayLeaveToClass: 'opacity-0',
        enterClass: '',
        enterActiveClass: '',
        enterToClass: '',
        leaveClass: '',
        leaveActiveClass: '',
        leaveToClass: ''
      },
      variants: {
        danger: {
          overlay: 'bg-red-100',
          header: 'border-red-50 text-red-700',
          close: 'bg-red-50 text-red-700 hover:bg-red-200 border-red-100 border',
          modal: 'bg-white border border-red-100 shadow-lg',
          footer: 'bg-red-50'
        }
      }
    }
  }
}

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueTailwind, settings)
}
