<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" static class="fixed z-10 inset-0 overflow-y-auto" @close="close" :open="open">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
            <div class="m-4">

              <div class="mt-4">
                <label for="nombre" class="block pl-4 font-bold text-gray-700">Nombre:</label>
                <input 
                  class="appearance-none border border-gray-300 w-full my-3 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm rounded-lg text-md focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-gray-300"
                  type="text"
                  name="nombre"
                  placeholder="Su nombre"
                >
              </div>

              <div class="mt-4">
                <label for="email" class="block pl-4 font-bold text-gray-700">Email:</label>
                <input 
                  class="appearance-none border border-gray-300 w-full my-3 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm rounded-lg text-md focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-gray-300"
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="Su correo electrónico"
                >
              </div>

              <div class="mt-4">
                <label for="motivo" class="block pl-4 font-bold text-gray-700">Motivo:</label>
                <select
                  class="w-full h-10 my-3 pl-3 pr-6 text-base shadow-md placeholder-gray-600 border rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-gray-300"
                  type="select"
                  id="motivo" 
                  name="motivo" 
                >
                  <option>Reclamo</option>
                  <option>Sugerencia</option>
                  <option>Pedido</option>
                </select>
              </div>

              <div class="mt-4">
                <label for="comentarios" class="block pl-4 font-bold text-gray-700">Comentarios:</label>
                <div class="mt-1">
                  <textarea 
                    id="comentarios" 
                    name="comentarios" 
                    rows="4" 
                    class="p-4 shadow-md my-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-gray-300"
                    placeholder="Breve comentario"
                  ></textarea>
                </div>
              </div>

            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button 
                type="button" 
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-md"
                @click="close"
              >
                Enviar
              </button>
              <button 
                type="button" 
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-md" 
                @click="close" 
                ref="cancelButtonRef"
              >
                Cancelar
              </button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>

</template>

<script>

import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

export default {
  inheritAttrs: false,
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
  },
  props: {
    open: {
      type: Boolean
    }
  }, 
  emits: [
    "close"
  ], 
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>