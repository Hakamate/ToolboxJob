<template>
  <div class="p-6 min-h-screen">
    <div class="grid grid-cols-1 gap-3">
      <CardDetails v-for="(tool, indexTool) in tools" :key="indexTool" :tool="tool" />
    </div>
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
      const tools = await this.$axios.$get(`https://api.airtable.com/v0/${process.env.NUXT_ENV_BASE}/Outils`, { params: { api_key: process.env.NUXT_ENV_AIRTABLE_KEY } })
      ToolStore.setUser(tools.records)
    }
  }

  get tools (): Array<ITool> {
    return ToolStore.tools
  }
}
</script>

<style scoped>

</style>
