<template>
  <section class="p-3">
    <h2 class="text-lg font-semibold text-red-700 uppercase">
      Área de Clientes
    </h2>
    <form>
      <div class="grid grid-cols-1 gap-3 mt-4 sm:grid-cols-2">
        <div>
          <label class="text-gray-700" for="nombre">Nombre</label>
          <input
            id="nombre"
            type="text"
            class="mt-2 w-full text-gray-700 bg-white border border-gray-300 rounded-md focus:border-pacif focus:ring-pacif"
          />
        </div>

        <div>
          <label class="text-gray-700" for="empresa">Empresa</label>
          <input
            id="empresa"
            type="text"
            class="mt-2 w-full text-gray-700 bg-white border border-gray-300 rounded-md focus:border-pacif focus:ring-pacif"
          />
        </div>

        <div>
          <label class="text-gray-700" for="email">E-mail</label>
          <input
            id="email"
            type="email"
            class="mt-2 w-full text-gray-700 bg-white border border-gray-300 rounded-md focus:border-pacif focus:ring-pacif"
          />
        </div>

        <div>
          <label class="text-gray-700" for="telefono">Teléfono</label>
          <input
            id="telefono"
            type="text"
            class="mt-2 w-full text-gray-700 bg-white border border-gray-300 rounded-md focus:border-pacif focus:ring-pacif"
          />
        </div>

        <div>
          <label class="text-gray-700" for="tipo">Tipo de orden:</label>
          <select
            id="tipo"
            name="tipo"
            class="mt-2 w-full text-gray-700 bg-white border border-gray-300 rounded-md focus:border-pacif focus:ring-pacif"
          >
            <option value="">Seleccione una opción:</option>
            <option value="1">Opción 1</option>
            <option value="2">Opción 2</option>
            <option value="3">Opción 3</option>
          </select>
        </div>

        <div>
          <label class="text-gray-700" for="fecha">Fecha/Horario</label>
          <input
            id="fecha"
            type="text"
            class="mt-2 w-full text-gray-700 bg-white border border-gray-300 rounded-md focus:border-pacif focus:ring-pacif"
          />
        </div>
      </div>

      <div class="grid grid-row mt-4">
        <div>
          <label class="text-gray-700" for="comentarios">Comentarios</label>
          <textarea
            id="comentarios"
            name="comentarios"
            rows="4"
            class="w-full px-2 py-1 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-pacif focus:ring-pacif"
          ></textarea>
        </div>
      </div>

      <div class="flex justify-end mt-6">
        <button
          type="button"
          class="mr-8 px-6 py-2 text-gray-700 rounded border border-gray-300 hover:border-gray-500 focus:outline-none focus:border-gray-700"
          @click="hideWindow()"
        >
          Cancelar
        </button>
        <button
          type="button"
          class="px-6 py-2 text-white transition-colors duration-200 bg-red-700 rounded hover:bg-red-900 focus:outline-none focus:bg-red-900"
          @click="hideWindow()"
        >
          Enviar
        </button>
      </div>
    </form>
  </section>
</template>

<script>

export default {
  name: "FormClientes",
  methods: {
    hideWindow() {
      this.$emit('hide-modal')
    }
  }
}

</script>