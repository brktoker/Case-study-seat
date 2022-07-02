import { createStore } from 'vuex';

export default createStore({
  state: {
    brandName: 'SEAT',
    step: 1,
    selectedCar: {
      model: 'Ibiza',
      color: '',
      price: 193500,
      totalPrice: 193500,
      accessories: []
    },
    models: [
      { name: 'Ibiza', price: 193500, currency: 'TL' },
      { name: 'Arona', price: 300000, currency: 'TL' }
    ],
    colors: [
      {name: 'Red Rose', subName: 'red'},
      {name: 'Black', subName: 'black'},
      {name: 'Indigo Grey', subName: 'grey'}
    ],
    accessories: [
      { id: 1, title: 'SEAT FREE SYNC PACK EASY JET', price: 7500, currency: 'TL' },
      { id: 2, title: 'Maintenance Program Upgrade', price: 1250, currency: 'TL' },
      { id: 3, title: 'SE Technology', price: 18750, currency: 'TL' },
      { id: 4, title: 'Safety Packet', price: 15000, currency: 'TL' },
      { id: 5, title: 'Boost Pack', price: 9000, currency: 'TL' },
      { id: 6, title: 'Light Plus', price: 3000, currency: 'TL' }
    ],
    menus: ['Models', 'Colors', 'Accessories', 'Summary']
  },
  getters: {
    getModels (state) {
      return state.models
    },
    getBrand (state) {
      return state.brandName
    }
  },
  mutations: {
    carSelected (state, model) {
      if (state.selectedCar.model !== model.name) {
        state.selectedCar.color = ''
        state.selectedCar.accessories = []
      }
      state.selectedCar.model = model.name
      state.selectedCar.price = model.price
      state.selectedCar.totalPrice = model.price
    },
    colorSelected (state, color) {
      state.selectedCar.color = color
    },
    updateSelectedAccessories (state, accessory) {
      let id = state.selectedCar.accessories.find(({id}) => id === accessory.id)
      if (!id) {
        state.selectedCar.totalPrice += accessory.price
        state.selectedCar.accessories.push(accessory)
      } else {
        state.selectedCar.totalPrice -= accessory.price
        state.selectedCar.accessories = _.reject(state.selectedCar.accessories, {id: accessory.id})
      }
    }
  },
});
