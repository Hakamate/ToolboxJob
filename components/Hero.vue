<template>
  <div>
    <div class="hero-img flex items-center justify-center relative">
      <div class="absolute z-40 top-0 w-full h-full left-0 right-0 bg-black opacity-60" />
      <div class="z-50 text-white max-w-2xl text-center py-32 px-6">
        <h1 class="font-semibold text-5xl mb-2">
          ToolboxJob
        </h1>
        <p class="text-xl">
          Tu es en recherche d'emploi (Stage, Alternance, CDD, CDI, etc...) et tu cherches à améliorer tes résultats ? Bienvenue sur ToolboxJob une banque d'outils, formation, newsletters (etc...) qui t'accompagne dans ta quête du Graal !
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Hero extends Vue {

}
</script>

<style scoped>
.hero-img {
  background-image: url('~/assets/img/job_search.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
