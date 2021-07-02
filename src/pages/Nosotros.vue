<template>
  <Layout>
    <div class="relative mt-18 sm:mt-0 inline-block h-48 sm:h-84">
      <g-image 
      src="@/assets/nosotros-header.jpg"
      class="h-full object-cover"/>
      <div
        class="absolute top-0 pt-10 sm:pt-44 pl-8 sm:pl-16 text-xl bg-pacif bg-opacity-80 w-full h-full"
      >
        <g-image 
        src="@/assets/sobre-nosotros.png"
        class="object-left h-16 object-scale-down"/>
      </div>
    </div>
    <div class="text-3xl sm:text-4xl sm:text-center pl-8 pt-8 sm:pt-24 pb-4 sm:pb-10">
      Contruyendo <span class="font-semibold text-yellow-600">EXCELENCIA</span
      ><br />
      en <span class="font-semibold">todo</span> lo que
      <span class="font-semibold">hacemos</span>.
    </div>
    <div class="text-lg mx-8 space-y-2 sm:text-xl sm:text-center sm:mx-40 sm:space-y-4 sm:pb-24">
      <div>
        Nuestra empresa, se focaliza en la construcción como actividad principal,
        y todos aquellos subrubros que integran la misma. Emprendemos proyectos de
        obras llave en mano, como así también, refacciones generales, tanto de
        oficinas, locales comerciales, viviendas unifamiliares, y multifamiliares.
      </div>
      <div>
        Poseemos diez años de consolidación como tal, aunque muchos de experiencia
        por parte del personal que la constituye. La misma en este periodo, logro
        posicionarse firmemente, cubriendo por completo las expectativas de
        aquellas empresas que confiaron en nosotros, no tan solo por la calidad y
        la experiencia que plasmamos en todos aquellos desafíos que hemos
        encarado, sino también por la calidad humana que nos caracteriza. 
      </div>
      <div>
        Esta introducción otorga  una pequeña descripción de quiénes somos y que
        hacemos; el cómo lo hacemos, esperamos sean ustedes quienes lo constaten y
        se sumen a todas aquellas empresas que confiaron y siguen confiando en
        nosotros.
      </div>
    </div>
    <div class="flex flex-col lg:flex-row">
      <div class="flex-1 max-w-5xl lg:max-w-3xl">
        <div class="aspect-w-16 aspect-h-9">
          <iframe 
          src="https://www.youtube.com/embed/NX_NW6bt6_s" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="flex-1 flex-col max-w-5xl bg-gray-700 px-4 py-4 space-y-4 sm:px-16 sm:py-12 sm:space-y-12 lg:max-w-lg lg:min-w-min">
        <div class="text-white text-2xl">Lorem ipsum dolor sit amet, consectetur</div>
        <div class="w-full h-1 bg-pacif lg:h-0.5"></div>
        <div class="text-white text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Nosotros",
    description: "All you need to know!!!",
  },
};
</script>
