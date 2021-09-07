<template>
  <div class="min-h-screen">
    <Hero />
    <div class="px-6 md:px-10 py-20 flex items-center justify-center">
      <div class="max-w-screen-xl">
        <div class="mb-16">
          <h2 class="text-3xl font-semibold">
            Liste d'outil pour booster ta recherche
          </h2>
          <p class="text-xl max-w-4xl">
            Les éléments présents on leurs spécificités, qu'ils s'agissent de formations, de newsletter d'outil ou autres, mais ont tous un but commun, vous permettre de décrocher un emploi !
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardDetails v-for="(tool, indexTool) in tools" :key="indexTool" :tool="tool" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ToolStore from '~/store/tool'
import { ITool } from '~/store/interfaces'

@Component
export default class Index extends Vue {
  async mounted () {
    if (this.tools.length === 0) {
      const tools = await this.$axios.$get(`https://api.airtable.com/v0/${process.env.NUXT_ENV_BASE}/Outils?sortField=Classement&sortDirection=asc`, { params: { api_key: process.env.NUXT_ENV_AIRTABLE_KEY } })
      console.log({ tools })

      ToolStore.setUser(tools.records)
    }
  }

  get tools (): Array<ITool> {
    return ToolStore.tools
  }
}
</script>

<style>
html {
    font-family: Rubik, sans-serif;
    background-color: rgb(240, 246, 255);
}
</style>
