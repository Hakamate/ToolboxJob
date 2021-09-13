<template>
  <nuxt-link v-if="linkNuxt" :to="link" class="text-center p-2 text-white rounded-xl shadow-md transition duration-500">
    <slot />
  </nuxt-link>
  <a v-else :href="link" target="_blank" class="text-center p-2 text-white rounded-xl shadow-md transition duration-500">
    <slot />
  </a>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ButtonApp extends Vue {
  @Prop({ required: true })
  link!: string

  @Prop({ default: true })
  linkNuxt!:boolean
}
</script>

<style scoped>

</style>
