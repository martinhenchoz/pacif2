<template>
  <Layout>

    <div class="bg-image w-full flex flex-col sm:flex-row">
      <div class="sm:w-2/5 bg-pacif bg-opacity-90 pt-16 sm:pt-24 inset-y-0">
        <div>
          <g-image 
          src="@/assets/construyendo-excelencia.png"
          class="mt-16 sm:mt-24 ml-16"
          />
        </div>
        <a 
        class="inline-block ml-16 my-12 py-2 px-6 leading-loose bg-white hover:bg-red-700 hover:text-white uppercase font-semibold rounded-xl transition duration-200" 
        href="#"
        >
        Nuestra Visión
        </a>
      </div>
      <div class="sm:w-3/5 bg-gray-800 bg-opacity-80 p-12 pt-12 sm:pt-32">
        <p class="text-white font-semibold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi debitis dicta mollitia sit commodi. Quasi odit aut quos officiis. Ut, voluptatem veritatis odio itaque optio eum? Quod a aut quis!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit dolore voluptate voluptatem ipsa aliquid ducimus enim esse, odio voluptas? Quod cumque aperiam nulla quos quibusdam porro tempore aliquam dolores magni.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique eius id nulla ut et reprehenderit nihil accusamus repellat harum magnam quas unde deleniti quisquam iste, tempore dolorum neque assumenda! Aliquid!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem corrupti vero necessitatibus. Unde laborum aperiam incidunt quidem sapiente natus tempora corrupti autem esse, laudantium eveniet porro est at, deleniti placeat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima reprehenderit aliquid voluptatem ad. Reiciendis voluptatibus quo maxime? Nesciunt nisi nostrum nulla alias odio magnam amet, expedita eligendi quasi dolorum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta labore eaque error esse iusto ducimus harum laboriosam accusantium praesentium ipsum assumenda corrupti voluptas placeat possimus tenetur, veritatis ut necessitatibus natus!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi debitis dicta mollitia sit commodi. Quasi odit aut quos officiis. Ut, voluptatem veritatis odio itaque optio eum? Quod a aut quis!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit dolore voluptate voluptatem ipsa aliquid ducimus enim esse, odio voluptas? Quod cumque aperiam nulla quos quibusdam porro tempore aliquam dolores magni.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique eius id nulla ut et reprehenderit nihil accusamus repellat harum magnam quas unde deleniti quisquam iste, tempore dolorum neque assumenda! Aliquid!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem corrupti vero necessitatibus. Unde laborum aperiam incidunt quidem sapiente natus tempora corrupti autem esse, laudantium eveniet porro est at, deleniti placeat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima reprehenderit aliquid voluptatem ad. Reiciendis voluptatibus quo maxime? Nesciunt nisi nostrum nulla alias odio magnam amet, expedita eligendi quasi dolorum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta labore eaque error esse iusto ducimus harum laboriosam accusantium praesentium ipsum assumenda corrupti voluptas placeat possimus tenetur, veritatis ut necessitatibus natus!
        </p>
        <div class="p-2 mx-auto border border-gray-100 shadow-xl rounded-xl grid gap-2">
          <accordion>
            <span slot="title">Titulo 1</span>
            <span slot="content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
            </span>
          </accordion>
          <accordion>
            <span slot="title">Titulo 2</span>
            <span slot="content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
            </span>
          </accordion>
        </div>
      </div>
    </div>

  </Layout>
</template>

<script>
import Accordion from '../components/AccordionComponent.vue'

export default {
  components: {
    Accordion
  },
  metaInfo: {
    title: 'HOME PAGE'
  }
}
</script>

<style scoped>
  .bg-image {
    background-image: url(~@/assets/index-background.jpg)
  }
</style>>
