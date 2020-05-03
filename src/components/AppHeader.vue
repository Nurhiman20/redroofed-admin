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
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: ['drawer'],
  data () {
    return {
    }
  },
  methods: {
    hideDrawer () {
      this.$emit('hide', !this.drawer)
    }
  }
}
</script>
