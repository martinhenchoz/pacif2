<template>
  <div class="px-16 py-10 space-y-10 border-l border-r border-gray-600">
    <div class="flex flex-col space-y-6 justify-between items-center md:flex-row">
      <div class="flex flex-row space-x-32">
        <div>
          <g-link to="/construcciones">
            <g-image
              src="@/assets/logo-pacifico-construcciones.png"
              class="w-auto h-12 lg:h-16"
            />
          </g-link>
        </div>
        <div>
          <g-link to="/equipamientos">
            <g-image
              src="@/assets/logo-pacifico-equipamientos.png"
              class="w-auto h-12 lg:h-16"
            />
          </g-link>
        </div>
      </div>
      <div class="flex flex-row items-center space-x-8">
        <div>SIGUENOS EN</div>
        <div class="flex flex-row space-x-8">
          <a href="#" class="text-gray-500 hover:text-pacif">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path
                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
              ></path>
            </svg>
          </a>
          <a href="#" class="ml-3 text-gray-500 hover:text-pacif">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
              ></path>
            </svg>
          </a>
          <a href="#" class="ml-3 text-gray-500 hover:text-pacif">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-8 h-8"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path
                d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
              ></path>
            </svg>
          </a>
          <a href="#" class="ml-3 text-gray-500 hover:text-pacif">
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              class="w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="hidden flex-wrap text-left lg:flex">
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="inline-block font-medium text-gray-900 text-sm mb-3 border-b border-gray-900">
          NOSOTROS
        </h2>
      </div>
      <div class="lg:w-1/5 md:w-1/2 w-full px-4">
        <h2 class="inline-block font-medium text-gray-900 text-sm mb-3 border-b border-gray-900">
          CONSTRUCCIONES
        </h2>
        <nav class="list-none">
          <li>
            <a class="text-gray-600 hover:text-gray-800">Mantenimiento</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Servicios</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Trabajos</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/5 md:w-1/2 w-full px-4">
        <h2 class="inline-block font-medium text-gray-900 text-sm mb-3 border-b border-gray-900">
          EQUIPAMIENTOS
        </h2>
        <nav class="list-none">
          <li>
            <a class="text-gray-600 hover:text-gray-800">Servicios</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Trabajos</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/5 md:w-1/2 w-full px-4">
        <h2 class="inline-block text-gray-900 text-sm mb-3 border-b border-gray-900">
          CONTACTO
        </h2>
      </div>
    </div>
    <div class="list-none text-center md:text-left">
      <li>
        <a class="text-gray-600 hover:text-gray-800">
          Copyright © 2021 Pacífico Construcciones / Equipamientos.
        </a>
      </li>
      <li>
        <a class="text-gray-600 hover:text-gray-800">
          Todos los derechos reservados.
        </a>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>
