<template>
  <button class="p-2 text-white rounded-xl shadow-md transition duration-500">
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

    @Component
export default class ButtonApp extends Vue {

}
</script>

<style scoped>

</style>
