import { HYEventStore } from 'hy-event-store'

interface IRootState {
  test: number
}

const demoStore = new HYEventStore({
  state: {
    test: 88
  },
  actions: {
    async demoAction(ctx: IRootState, e: any) {
      console.log(ctx)
      console.log(e)
    }
  }
})

export default demoStore

// store.dispatch('action', this.data.xxx)
// store.onState('state', this.handler)
// store.onStates(['state'], this.handler)
