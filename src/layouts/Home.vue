<template>
  <v-app id="keep">
    <app-header @hide="hideDrawer" :drawer="drawer"></app-header>
    <app-sidebar :drawer="drawer"></app-sidebar>
    <v-content class="app-content">
      <div class="ml-0 mt-1">
        <v-breadcrumbs :items="breadcrumbItems">
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item
              :disabled="item.disabled"
              :exact="item.exact"
              :to="item.to">
              <span :class="!item.disabled && 'text-red'">{{ item.text }}</span>
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
      </div>
      <div class="px-6 mb-10 mt-3">
        <router-view></router-view>
      </div>
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
  computed: {
    breadcrumbItems () {
      const isLength = this.$route.matched.length > 0
      if (isLength) {
        const breadcrumbArr = [...this.$route.matched]
        let currentBreadcrumbValue = null
        const breadcrumbComponent = breadcrumbArr.map(item => {
          if (item.name === currentBreadcrumbValue) {
            return false
          } else {
            currentBreadcrumbValue = item.name
            return {
              text: item.name,
              to: item.path,
              exact: true,
              disabled: this.$route.name === item.name
            }
          }
        })
        return breadcrumbComponent.filter(item => item)
      } else {
        return []
      }
    }
  },
  methods: {
    hideDrawer (value) {
      this.drawer = !this.drawer
    }
  }
}
</script>

<style lang="scss">
.app-content {
  position: relative;
  min-height: 100vh;
  background-color: #F4F5F6;
}
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
