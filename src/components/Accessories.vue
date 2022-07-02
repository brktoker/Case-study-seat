<template>
<div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="card text-white bg-dark mb-3 selected"
            :style="selectedAccessories.find(e => e.id === accessory.id) ? 'box-shadow: 20px 20px 20px 10px black;' : ''"
            style="max-width: 18rem;margin:10px;"
            v-for="accessory in newAccessories">
            <div class="card-body" @click="selectAccessories(accessory)">
                <h5 class="card-title">{{accessory.title}}</h5>
                <p class="card-text">{{accessory.price}} {{" " + accessory.currency }}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: "Accessories",
  data() {
    return {
      newAccessories: []
    }
  },
  mounted () {
    this.newAccessories = JSON.parse(JSON.stringify(this.accessories))
    this.newAccessories.forEach(accessory => {
      accessory.price = new Intl.NumberFormat('tr-TR', {
        currency: 'TRY',
        minimumFractionDigits: 0,
      }).format(accessory.price)
    })
  },
  computed: {
    ...mapState({
      selectedAccessories: state => state.selectedCar.accessories,
      accessories: state => state.accessories
    })
  },
  methods: {
    ...mapMutations([
      'updateSelectedAccessories'
    ]),
    selectAccessories (accessory) {
      let updateAccessory = JSON.parse(JSON.stringify(accessory))
      let price = JSON.parse(JSON.stringify(updateAccessory.price.toString()))
      updateAccessory.price = parseInt(price.replace('.', ''))
      this.updateSelectedAccessories(updateAccessory)
    }
  }
}
</script>

<style>
.selected:hover {
    box-shadow: 20px 20px 20px 10px black;
}
</style>