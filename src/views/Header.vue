<template>
    <div>
        <div class="circle m-auto"></div>
        <div class="header w-100 text-center">
            <img class="logo m-auto" height="61px" src="@/assets/img/logo.png" style="width: 107px !important; height: 61px !important;" alt="myImage"/>
            <ul class="navbar">
                <li :class="{ active : $route.name === menu }" v-for="menu in menus"><router-link :to="`/${menu}`"><a>{{menu.toUpperCase()}}</a></router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      dynmaciMenuName : 'models'
    }
  },
  computed: {
    ...mapState({
      menus: state => state.menus
    })
  }
}
</script>