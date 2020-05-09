<template>
  <div>
    <v-app-bar
      app
      clipped-left
      color="white"
      height="50px"
    >
      <v-btn icon color="#717171" @click="hideDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <div class="logo d-flex align-center">
        <img src="@/assets/img/logo.png" alt="">
        <span class="logo-text ml-2 mr-5">Red Roofed</span>
      </div>
      <v-spacer></v-spacer>
      <div>
        <v-menu
          bottom
          offset-y
        >
          <template v-slot:activator="{ on }">
            <v-btn
              class="px-0"
              v-on="on"
              text
              color="#F73631"
            >
              <v-icon color="#717171">mdi-account-circle</v-icon>
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                @click="() => {}"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: ['drawer'],
  data () {
    return {
      items: [
        {
          title: 'Profile'
        },
        {
          title: 'Sign Out'
        }
      ]
    }
  },
  methods: {
    hideDrawer () {
      this.$emit('hide', !this.drawer)
    }
  }
}
</script>
