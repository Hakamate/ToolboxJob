import { ITool } from '~/store/interfaces'
export class ToolStoreState {
  tools: Array<ITool> = []
  loading: boolean = false
}
