<template>
  <div>
    {{ tool.fields['Nom'] }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { ITool } from '~/store/interfaces'

@Component
export default class CardDetails extends Vue {
    @Prop({ required: true })
    tool!:ITool
}
</script>

<style scoped>

</style>
