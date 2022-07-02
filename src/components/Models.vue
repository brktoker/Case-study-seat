<template>
  <div class="circleArea container">
        <div class="row">
            <div
            class="col-md-6 p-0 circleCar"
            v-for="model in newModels"
            :class="{active : selectedCar.model === model.name}"
            >
                <div class="checked"><img src="@/assets/img/checked.svg" width="13.02px" height="9.02px" style="width: 13.02px !important;height: 9.02px !important" /></div>
                <div class="carName">{{model.name.toUpperCase()}}</div>
                <div class="carImage">
                    <img width="440.64px" height="200.16px" style="width: 440.64px !important; height: 200.16px !important" :src="require(`../assets/img/${model.name}.png`)"  />
                </div>
                <p class="carDescription"><b>{{model.price.toString() + ' ' + model.currency}}</b>‘den başlayan<br>fiyatlarla</p>
                <div class="buttonArea w-100 text-center">
                  <button class="btn" @click="selectCar(model)">SELECT</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

export default {
  name: "Models",
  data() {
    return {
      newModels : []
    }
  },
  mounted () {
    this.newModels = JSON.parse(JSON.stringify(this.models))
    this.newModels.forEach(model => {
      model.price = new Intl.NumberFormat('tr-TR', {
        currency: 'TRY',
        minimumFractionDigits: 0,
      }).format(model.price)
    })
  },
  computed:{
    ...mapState({
      selectedCar: state => state.selectedCar,
      models: state => state.models
    }),
    ...mapGetters (['getModels'])
  },
  methods: {
    ...mapMutations([
      'carSelected'
    ]),
    selectCar (model) {
      let updateModel = JSON.parse(JSON.stringify(model))
      let price = JSON.parse(JSON.stringify(updateModel.price.toString()))
      updateModel.price = parseInt(price.replace('.', ''))
      this.carSelected(updateModel)
    }
  }
}
</script>
