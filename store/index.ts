import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import { ToolStoreModule } from '~/store/tool/module'
import { RootState } from '~/store/root'

Vue.use(Vuex)

const store: Store<RootState> = new Vuex.Store<RootState>({
  state: () => ({}),
  mutations: {},
  getters: {},
  actions: {
    nuxtServerInit () {},
    async nuxtClientInit () {}
  },
  modules: {
    tool: ToolStoreModule
  }
})
export default function () {
  return store
}
