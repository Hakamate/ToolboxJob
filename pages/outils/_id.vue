<template>
  <div v-if="tool" class="p-6 min-h-screen relative">
    <div class="flex">
      <nuxt-link to="/" class="hover:underline">
        Outils
      </nuxt-link>
      <span class="ml-1 text-gray-400"> / {{ tool.fields['Nom'] }}</span>
    </div>
    <div class="mt-4 flex flex-col sm:flex-row max-w-5xl justify-center mx-auto">
      <div>
        <div class="sticky top-4 left-0 bg-white flex flex-col rounded-lg shadow-lg p-6 sm:mr-5 mb-5 sm:mb-0 h-auto">
          <div class="flex flex-col items-center justify-center">
            <img :src="tool.fields['Logo'][0].url" alt="" class="rounded-full w-32 h-32">
            <h1 class="text-center mt-4 font-semibold text-3xl">
              {{ tool.fields['Nom'] }}
            </h1>
          </div>
          <hr class="my-4">
          <div class="info grid gap-7">
            <div class="flex flex-col">
              <span class="text-sm font-medium text-gray-600">Tags</span>
              <div class="grid gap-1 mt-1">
                <span v-for="(tag, indexTag) in tool.fields['Tags']" :key="indexTag" class="text-sm text-blue-500 p-2 bg-blue-100 rounded-xl w-auto">
                  {{ tag }}
                </span>
              </div>
            </div>
            <div class="flex flex-col">
              <span class="text-sm font-medium text-gray-600">Site web</span>
              <a :href="tool.fields['Site Web']" target="_blank" class="text-blue-500 hover:underline">
                <div class="hidden sm:block">
                  {{ shortedURL(tool.fields['Site Web']) }}
                </div>
                <div class="sm:hidden">
                  {{ tool.fields['Site Web'] }}
                </div>
              </a>
            </div>
            <div class="flex flex-col">
              <span class="text-sm font-medium text-gray-600">Photo fondateur</span>
              <img :src="tool.fields['Photo Fondateur'][0].url" alt="" class="rounded-lg w-24 h-24 mt-1">
            </div>
            <div class="flex flex-col">
              <span class="text-sm font-medium text-gray-600">Profil fondateur</span>
              <a :href="tool.fields['Profil Fondateur']" target="_blank" class="text-blue-500 hover:underline">
                <div class="hidden sm:block">
                  {{ shortedURL(tool.fields['Profil Fondateur']) }}
                </div>
                <div class="sm:hidden">
                  {{ tool.fields['Profil Fondateur'] }}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col h-full">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-2">
          <div class="text-center grid gap-3 p-6 border-t-8 border-blue-500 bg-white rounded-xl shadow-lg">
            <span class="text-sm font-medium text-gray-600">Nom</span>
            <span class="text-xl font-semibold">{{ tool.fields['Nom'] }}</span>
          </div>
          <div class="text-center grid gap-3 p-6 border-t-8 border-blue-500 bg-white rounded-xl shadow-lg">
            <span class="text-sm font-medium text-gray-600">Site web</span>
            <a :href="tool.fields['Site Web']" target="_blank" class="text-blue-500 hover:underline">
              {{ shortedBoxURL(tool.fields['Site Web']) }}
            </a>
          </div>
          <div class="text-center grid gap-3 p-6 border-t-8 border-blue-500 bg-white rounded-xl shadow-lg">
            <span class="text-sm font-medium text-gray-600">Nom fondateur</span>
            <span class="text-xl font-semibold">{{ tool.fields['Nom Fondateur'] }}</span>
          </div>
          <div class="text-center grid gap-3 p-6 border-t-8 border-blue-500 bg-white rounded-xl shadow-lg">
            <span class="text-sm font-medium text-gray-600">Profil Fondateur</span>
            <a :href="tool.fields['Profil Fondateur']" target="_blank" class="text-blue-500 hover:underline">
              {{ shortedBoxURL(tool.fields['Profil Fondateur']) }}
            </a>
          </div>
        </div>
        <div class="bg-white flex flex-col rounded-lg shadow-lg p-6 my-5">
          <span class="text-sm font-medium text-gray-600 mb-2">Description</span>
          <p>{{ tool.fields['Description'] }}</p>
        </div>
        <div class="bg-white flex flex-col rounded-lg shadow-lg p-6">
          <span class="text-sm font-medium text-gray-600 mb-2">Photo de présentation</span>
          <img :src="tool.fields['Photo de couverture'][0].url" alt="" class="rounded-lg">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ToolStore from '~/store/tool'
import { ITool } from '~/store/interfaces'

    @Component
export default class ToolSpecific extends Vue {
  id:string|undefined = this.$route.path.split('/').pop()

  async mounted () {
    if (!this.tool) {
      // const tools = await this.$axios.$get(`https://api.airtable.com/v0/${process.env.NUXT_ENV_BASE}/Outils?sortField=Classement&sortDirection=asc&filterByFormula=SEARCH("${this.id}",Unique)`, { params: { api_key: process.env.NUXT_ENV_AIRTABLE_KEY } })
      const tools = await this.$axios.$get(`https://api.airtable.com/v0/${process.env.NUXT_ENV_BASE}/Outils?sortField=Classement&sortDirection=asc`, { params: { api_key: process.env.NUXT_ENV_AIRTABLE_KEY } })
      ToolStore.setUser(tools.records)
    }
  }

  get tool (): ITool | undefined {
    console.log({ d: ToolStore.tool(this.id) })

    return ToolStore.tool(this.id)
  }

  shortedBoxURL (value: string) : string {
    if (value.length > 15) {
      return value.substring(0, 14) + '...'
    }
    return value
  }

  shortedURL (value: string) : string {
    console.log({ value })

    if (value.length > 22) {
      return value.substring(0, 21) + '...'
    }
    return value
  }
}
</script>

<style>
html {
    font-family: Rubik, sans-serif;
    background-color: #f6f7f9;
}
</style>
