import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      data: [],
    }
  },
  getters: {
    getData: (state) => state.data,
  },
  mutations: {
    setData(state, payload) {
      //Permet d'evoyer les données dans le LocalStorage
      if (!localStorage.getItem('data')) {
        //test si le LocalStorage est vide
        localStorage.setItem('data', JSON.stringify([]));
      }

      let oldData = localStorage.getItem('data')
      oldData = JSON.parse(oldData)

      if (!oldData[0]) {
        if (payload) {
          const newO = [];
          newO.push(payload);
          state.data = newO;
        }
        localStorage.setItem('data', JSON.stringify(state.data));
        return;
      }
      oldData.push(payload);
      state.data = oldData;
      localStorage.setItem('data', JSON.stringify(oldData));


    },
    removeData(state, payload) {
      const newData = state.data.filter((element, index) => state.data.indexOf(payload) !== index);
      state.data = newData;
      localStorage.setItem('data', JSON.stringify(state.data));

    },
    initData(state, payload) {
      if (!localStorage.getItem('data')) {
        localStorage.setItem('data', JSON.stringify([]));
      }
      let oldData = localStorage.getItem('data')
      oldData = JSON.parse(oldData)

      if (!oldData[0]) {
        if (payload) {
          const newO = [];
          newO.push(payload);
          state.data = newO;
        }
        return;
      }

      state.data = oldData;
    }
  }
});