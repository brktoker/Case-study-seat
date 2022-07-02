<template>
    <div class="circleArea container">
        <div class="row">
            <div class="col-12 text-center"><span class="colorPageTopText">Hayalindeki araca dair rengini<br> seç,
                    tarzını hemen yansıt</span>
            </div>
            <div class="col-md-12 p-0 circleCar active clear">
                <div class="carName animate__animated animate__fadeInDown">{{selectedCar.model.toUpperCase()}}</div>
                <div class="carImage animate__animated animate__fadeInUp">
                    <img width="440.64px" height="200.16px" style="width: 440.64px !important; height: 200.16px !important" :src="require(`../assets/img/${selectedCar.model}.png`)" />
                </div>
            </div>
        </div>
    </div>
    <div class="container">
      <div class="row">
          <div class="col-12 m-auto">
              <ul class="colors" style="margin-top:0px !important;">
                  <li :class="[selectColor === color.name ? 'active' : '', color.subName]" v-for="color in colors" @click="updateSelectColor(color)">
                      <div v-if="selectColor === color.name" class="checked"><img src="@/assets/img/checked.svg" width="13.02px" height="9.02px" style="width: 13.02px; height: 9.02px;" /></div>
                  </li>
              </ul>
          </div>
      </div>
    </div>
</template>


<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Colors',
  data() {
    return {
      selectedColor: ''
    }
  },
  computed: {
    ...mapState({
      selectedCar: state => state.selectedCar,
      selectColor: state => state.selectedCar.color,
      colors: state => state.colors
    })
  },
  methods: {
    ...mapMutations([
      'colorSelected'
    ]),
    updateSelectColor (c) {
      this.colorSelected(c.name)
    }
  }
}
</script>