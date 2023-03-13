import { createStore } from 'vuex'
import photoModule from "@/store/PhotoModule";

const store = createStore({
  modules: {
    photoModule
  }
});

export default store;
