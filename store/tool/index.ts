// import store from '../../store'
import BaseStoreService from '~/store/abstract'
import { ToolStoreModule } from '~/store/tool/module'
import { ToolStoreState } from '~/store/tool/state'
import { ITool } from '~/store/interfaces'

class ToolStore extends BaseStoreService<ToolStoreState> {
  public mutations = ToolStoreModule.mutations
  public getters = ToolStoreModule.getters

  get tools (): Array<ITool> {
    return this.read<Array<ITool>>(this.getters.tools)
  }

  tool (id: string | undefined): ITool | undefined {
    return this.tools.find(tool => tool.id === id)
  }

  get loading (): boolean {
    return this.read<boolean>(this.getters.loading)
  }

  setUser (tools: Array<ITool>) {
    this.commit(this.mutations.setTools, tools)
  }

  setLoading (loading: boolean) {
    this.commit(this.mutations.setLoading, loading)
  }
}
export default new ToolStore()
