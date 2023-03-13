<template>
  <v-container fluid>
    <v-app-bar
      color="orange"
      dark
      class="position-static"
    >
      <v-spacer />
      <router-link to="/">
        <v-btn outlined class="ml-3">
          Главная
        </v-btn>
      </router-link>
      <router-link to="/photo">
        <v-btn outlined class="ml-3">
          Фотографии
        </v-btn>
      </router-link>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>

</style>
