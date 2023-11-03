import { createStore } from 'vuex'
import axios from 'axios'
import { useToast } from "vue-toastification";

export default createStore({
  state: {
    employee: [],
    selectedEmployee: {},
    isLoading: false
  },
  mutations: {
    setEmployee (state, payload) {
      state.employee = payload.employeeList
    },
    setSelectedEmployee (state, payload) {
      state.selectedEmployee = payload
    },
    setLoading (state, payload) {
      state.isLoading = payload
    }
  },
  actions: {
    async getEmployee ({ commit }, query) {
      const toast = useToast();
      let queryUserParam = ''
      const isNumeric = n => !!Number(n);

      
      if(query.includes(',')){
        const userArr = query.split(',')
        if(isNumeric(userArr[0])){
          queryUserParam = `id=${userArr[0]}`
        }else{
          queryUserParam = `username=${userArr[0]}`
        }
        userArr.shift()
        const usersWithOutSpaces = userArr.map(user => user.trim())
        usersWithOutSpaces.forEach((element) => {
          if(isNumeric(element)){
            queryUserParam += `&id=${element}`
          }else{
            queryUserParam += `&username=${element}`
          }
        });
      }else{
        if(isNumeric(query)){
          queryUserParam = `id=${query}`
        }else{
          queryUserParam = `username=${query}`
        }
      }
      commit('setLoading', true)
      try {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users?${queryUserParam}`)
        commit('setEmployee', { employeeList: data })
      } catch (error) {
        toast.error('Ошибка сервера');
      }
      commit('setLoading', false)
    }
  }
})
