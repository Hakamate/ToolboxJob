<template>
  <footer class="footer bg-gray-800 relative pt-1 border-b-2 border-blue-500">
    <div class="flex flex-col items-center">
      <div class="sm:w-2/3 text-center py-6">
        <p class="text-sm text-blue-500 font-bold mb-2">
          © 2021 by
          <a href="https://searchii.webflow.io/" target="_blank" class="hover:underline hover:text-blue-600">Searchii</a>
          and
          <a href="https://getjob.fr/" target="_blank" class="hover:underline hover:text-blue-600">GetJob</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {

}
</script>

<style scoped>

</style>
