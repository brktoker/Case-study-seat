<template>
    <div class="circleArea container">
        <div class="row">
            <div class="col-md-6 p-0 circleCar active big">
                <div class="carName">{{selectedCar.model.toUpperCase()}}</div>
                <div class="carImage">
                    <img width="440.64px" height="200.16px" style="width: 440.64px !important; height: 200.16px !important" :src="require(`../assets/img/${selectedCar.model}.png`)" />
                </div>
            </div>
            <div class="col-md-6 p-0 d-flex flex-column justify-content-center">
                <div class="car-summary">
                    <div class="feature">MODEL</div>
                    <div class="featureDescription">{{selectedCar.model + ' '}} 1.3 Ecotech DSG</div>
                </div>
                <div class="car-summary">
                    <div class="feature">COLOR</div>
                    <div class="featureDescription">{{selectedCar.color}}</div>
                </div>
                <div class="car-summary">
                    <div class="feature">ACCESSORIES</div>
                    <div class="featureDescription" v-for="accessory in selectedCar.accessories">{{'- ' + accessory.title }}</div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      selectedCar: state => state.selectedCar
    })
  }
}
</script>