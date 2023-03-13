<template>
  <v-container>
    <PhotoForm @addPhoto="addPhoto" />
    <v-row>
      <DefaultPhoto
        v-for="photo in $store.getters.getAllPhotos"
        :key="photo"
        :photo="photo"
      />
    </v-row>
    <PhotoDialog />
  </v-container>
</template>

<script>
import DefaultPhoto from "@/components/photo/DefaultPhoto";
import PhotoForm from "@/components/photo/PhotoForm";
import PhotoDialog from "@/components/photo/PhotoDialog";
import {mapActions} from "vuex"

export default {
  components: {
    PhotoDialog,
    DefaultPhoto,
    PhotoForm,
  },
  data() {
    return {
      photos: [],
      // currentPhoto: {},
      // dialogVisible: false,
    }
  },
  mounted() {
    this.fetchPhotos()
  },
  methods: {
    ...mapActions(['fetchPhotos']),
    addPhoto(photo) {
      this.photos.push(photo)
    },
    openPhoto(photo) {
      this.currentPhoto = photo
      this.dialogVisible = true
    },
  }
}
</script>

<style scoped>

</style>
