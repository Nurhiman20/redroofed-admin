<template>
  <v-app id="keep">
    <app-header @hide="hideDrawer" :drawer="drawer"></app-header>
    <app-sidebar :drawer="drawer"></app-sidebar>
    <v-content>
      <v-container
        fluid
        class="grey lighten-4 fill-height"
      >
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppSidebar from '@/components/AppSidebar'

export default {
  components: {
    AppHeader,
    AppSidebar
  },
  data: () => ({
    drawer: true,
  }),
  methods: {
    hideDrawer (value) {
      this.drawer = !this.drawer
    }
  }
}
</script>

<style lang="scss">
#keep .v-navigation-drawer__border {
  display: none
}
.logo {
  .logo-text {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 20px;
    color: #F73631;
  }
  img {
    height: 50px;
  }
}
</style>
