import Vue from 'vue'
import { uid } from 'quasar'

const state = {
    tasks: {
      'ID1': {
          name: 'Go to shop',
          dueDate: '2021/08/27',
          dueTime: '18:30',
         completed: false
      },
      'ID2': {
          name: 'Go Bannanas',
          dueDate: '2021/08/28',
          dueTime: '14:00',
         completed: false
      },
      'ID3': {
          name: 'Get apples',
          dueDate: '2021/08/29',
          dueTime: '16:00',
         completed: false
      },
    }
}

const mutations = {
  updateTask(state, payload) {
    console.log('mutations payload: ', payload)
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id) {
    console.log('id: ', id)
    Vue.delete(state.tasks, id)
  },
  addTask(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task)
  }

}

const actions = {
  updateTask({commit}, payload) {
    console.log('payload: ', payload)
    commit('updateTask', payload)
  },

  deleteTask({commit}, id) {
    commit('deleteTask', id)
  },

  addTask({commit}, task) {
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task
    }
    commit('addTask', payload)
  }

}

const getters = {
  tasks: (state) => {
    return state.tasks
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}