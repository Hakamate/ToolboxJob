<template>
  <nuxt-link :to="`/tools/${tool.id}`" class="flex flex-col rounded-xl shadow-lg border bg-white transform transition hover:border-blue-500 duration-500">
    <img class="h-72 object-contain w-full" :src="tool.fields['Photo de couverture'][0].url" :alt="`Photo de couverture de ${tool.fields['Nom']}`">
    <hr class="border-b m-2">
    <div class="mb-3 px-6 pt-4">
      <img class="w-12 h-12" :src="tool.fields['Logo'][0].url" :alt="`Logo de ${tool.fields['Nom']}`">
    </div>
    <h3 class="px-6 text-xl font-semibold">
      {{ tool.fields['Nom'] }}
    </h3>
    <div class="px-6 my-2 flex">
      <span v-for="(tag, indexTag) in tool.fields['Tags']" :key="indexTag" class="mr-2 text-blue-500 bg-blue-100 px-2 py-1 rounded-xl h-auto">{{ tag }}</span>
    </div>
    <p class="mt-2 px-6 ">
      {{ shortedDescription(tool.fields['Description']) }}
    </p>
    <div class="px-6 pb-6 grid gap-3 mt-auto pt-6">
      <ButtonApp class="bg-gray-500 hover:bg-gray-700">
        <nuxt-link :to="`/tools/${tool.id}`">
          En savoir plus
        </nuxt-link>
      </ButtonApp>
      <ButtonApp class="bg-blue-500 hover:bg-blue-700">
        <a :href="tool.fields['Site Web']">
          Visiter le site
        </a>
      </ButtonApp>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { ITool } from '~/store/interfaces'

@Component
export default class CardDetails extends Vue {
  @Prop({ required: true })
  tool!:ITool

  shortedDescription (value: string) : string {
    if (value.length > 125) {
      return value.substring(0, 124) + '...'
    }
    return value
  }
}
</script>

<style scoped>

</style>
