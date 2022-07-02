<template>
    <div class="circleArea container">
        <div class="row">
            <div class="col-12 text-center"><span class="colorPageTopText">Hayalindeki araca dair rengini<br> seç,
                    tarzını hemen yansıt</span>
            </div>
            <div class="col-md-12 p-0 circleCar active clear">
                <div class="carName">{{selectedCar.model.toUpperCase()}}</div>
                <div class="carImage">
                    <img width="440.64px" height="200.16px" style="width: 440.64px !important; height: 200.16px !important" :src="require(`../assets/img/${selectedCar.model}.png`)" />
                </div>
            </div>
        </div>
    </div>
    <div class="text-center mt-5">
        <button
    style="margin:5px;"
    @click="updateSelectColor(color)"
    v-for="color in colors"
    type="button"
    class="btn btn-outline-primary"
    :class="{ active : selectColor === color}">{{color}}
    </button>
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
      this.colorSelected(c)
    }
  }
}
</script>