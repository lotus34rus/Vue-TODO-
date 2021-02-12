import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    statuses: [
      {id: 1 , value: 'Новая'},
      {id: 2 , value: 'В работе'},
      {id: 3 , value: 'Выполнено'}
    ]
  },
  mutations: {
    setTasks(state, tasks) {
      state .tasks = tasks
    }
  },
  actions: {

    //Fetch all tasks from localstorage
    fetchAllTasks({commit}) {
      const tasks = JSON.parse(localStorage.getItem('dm_tasks'))
      if(tasks) {
        commit('setTasks', tasks)
      }
    },

    //Add task to localstorage
    addTaskToLocalStorage({commit}, newTask) {
      let currentLS = JSON.parse(localStorage.getItem('dm_tasks'))
      currentLS != null ? currentLS.push(newTask) : currentLS = [newTask]
      commit('setTasks', currentLS)
      localStorage.setItem('dm_tasks', JSON.stringify(currentLS))
    },

    //Remove Task from localstorage
    removeTask({commit}, id) {
      let currentLS = JSON.parse(localStorage.getItem('dm_tasks')).filter(item => item.id != id)
      commit('setTasks', currentLS)
      localStorage.setItem('dm_tasks', JSON.stringify(currentLS))
    },

    //Update task in LocalStorage

    updateTaskInLocalStorage({commit}, task) {
      let currentLS = JSON.parse(localStorage.getItem('dm_tasks'))
      currentLS = currentLS.map(item => { 
        if(item.id == task.id) {
          return task
        }
        return item
      })
      commit('setTasks', currentLS)
      localStorage.setItem('dm_tasks', JSON.stringify(currentLS))
    }


  },

  getters: {
    getTasks : state => state.tasks ,
    getTaskByID : state => id => state.tasks.find(item => item.id == id),
    getStatuses: state => state.statuses
  },

  modules: {
  }
})
