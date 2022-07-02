<template>
  <div class="circleArea container">
      <div class="row">
          <div class="col-12 text-center"><span class="colorPageTopText">Seçtiğin araca ait özellikler,<br> konforun
                  ve yaşam stilini belirler.</span>
          </div>
          <div class="row scroll-bar animate__animated animate__fadeIn">
              <div class="col-12 col-md-4 p-4"
                v-for="accessory in newAccessories"
                >
                  <div
                  class="animate__animated animate__fadeIn"
                  :class="[selectedAccessories.find(e => e.id === accessory.id) ? 'card active' : 'card']"
                  @click="selectAccessories(accessory)"
                  style="cursor: pointer;"
                  >
                      <span class="card-title">{{accessory.title}}</span>
                      <span class="card-price">{{accessory.price}} {{" " + accessory.currency }}</span>
                      <div :class="[selectedAccessories.find(e => e.id === accessory.id) ? 'checked' : '']">
                      <img src="@/assets/img/checked.svg" width="13.02px" height="9.02px" style="width: 13.02px; height: 9.02px;" />
                      </div>
                  </div>
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
.scroll-bar::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  position: absolute;
  width: 5px;
  height: 464px;
  left: 1217px;
  top: 374px;

  background: #D8D8D8;
  mix-blend-mode: normal;
  opacity: 0.57;
}

.scroll-bar::-webkit-scrollbar {
  position: absolute;
  width: 5px;
  height: 464px;
  left: 1217px;
  top: 374px;

  background: #D8D8D8;
  mix-blend-mode: normal;
  opacity: 0.57;
}

.scroll-bar::-webkit-scrollbar-thumb {
  position: absolute;
  width: 5px;
  height: 49px;
  left: 1217px;
  top: 404px;

  background: #575757;
  border-radius: 10px;
}

.scroll-bar {
  margin-left:auto;
  margin-right:auto;
  height: 300px;
  width: 849px;
  overflow-y: scroll;
  margin-bottom: 25px;
}
</style>