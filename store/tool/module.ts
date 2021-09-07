import { ToolStoreState } from '~/store/tool/state'
import { ITool } from '~/store/interfaces'

export const ToolStoreModule = {
  namespaced: false,
  state: () => ({ ...new ToolStoreState() }),
  getters: {
    tools (state: ToolStoreState): Array<ITool> {
      return state.tools
    },
    loading (state: ToolStoreState): boolean {
      return state.loading
    }
  },
  mutations: {
    setTools (state: ToolStoreState, tools: Array<ITool>) {
      state.tools = tools
    },
    setLoading (state: ToolStoreState, loading: boolean) {
      state.loading = loading
    }
  }
}
