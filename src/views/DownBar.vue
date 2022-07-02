<template>
    <div class="totalPopup animate__animated animate__fadeInUp" style="margin-top: 50px;position: inherit;margin-bottom: 5vh;">
        <div class="detailCar">
            <div class="car">
                <div class="badge">NEW</div>
                <img :src="require(`../assets/img/${selectedCar}.png`)" />
                <div class="description">
                    <span>Total</span>
                    <span>{{ totalCurrencyFormat + ' ' }} TL</span>
                </div>
            </div>
            <div class="button" style="cursor: pointer;" @click="nextPageButton" :class="{'buy': dynmaciButtonName === 'Buy Now' }">{{dynmaciButtonName.toUpperCase()}}</div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      dynmaciButtonName: 'Colors',
      controlSelectedCar: false,
      totalCurrencyFormat: null
    }
  },
  mounted () {
    this.totalCurrencyFormat = new Intl.NumberFormat('tr-TR', {
      currency: 'TRY',
      minimumFractionDigits: 0,
    }).format(this.total)
  },
  computed: {
    ...mapState({
      selectedCar: state => state.selectedCar.model,
      total: state => state.selectedCar.totalPrice
    })
  },
  methods: {
    nextPageButton () {
      if (this.$route.name === 'Models') {
        if (this.selectedCar !== '') {
            this.$router.push('/colors')
            this.controlSelectedCar = false
        } else {
            this.controlSelectedCar = true
        }
      }
      else if (this.$route.name === 'Colors') {
        this.$router.push('/accessories')
      }
      else if (this.$route.name === 'Accessories') {
        this.$router.push('/summary')
      }
      else if (this.$route.name === 'Summary') {
        // this.$router.push('/colors')
      }
      else {
        this.$router.push('/models')
      }
    }
  },
  watch: {
    total: {
      handler(newValue, oldValue) {
        this.totalCurrencyFormat = new Intl.NumberFormat('tr-TR', {
          currency: 'TRY',
          minimumFractionDigits: 0,
        }).format(newValue)
      },
      deep: true
    },
    $route (to, from){
      if (to.name === 'Models') {
        this.dynmaciButtonName = 'colors'
      }
      else if (to.name === 'Colors') {
        this.dynmaciButtonName = 'Accessories'
      }
      else if (to.name === 'Accessories') {
        this.dynmaciButtonName = 'Summary'
      }
      else if (to.name === 'Summary') {
        this.dynmaciButtonName = 'Buy Now'
      }
      else {
        this.dynmaciButtonName = 'colors'
      }
    }
  }
}
</script>