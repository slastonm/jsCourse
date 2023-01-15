<template>
  <div class="about">
    <h1>{{greet}}</h1>
    <ModalWindow
    v-if="modalState"
     title="Info about"
    info="New TV"
    :propValue="[1,2,3]"
    @close="openModal"
    ></ModalWindow>
    <button @click="openModal">
      Open Modal
    </button>
  </div>

</template>

<script>
// @ is an alias to /src
import ModalWindow from '@/components/ModalWindow.vue'

export default {
  name: 'HomeView',
  components: {
    ModalWindow
  },
  data(){
    return {
      greet:'Hello page',
      modalState:false
    }
  },
  methods:{
    openModal(data){
      this.modalState =!this.modalState
      console.log(data);
    }
  }
}
</script>
<style lang="scss" scoped>
    h1{
        font-size: 20px;
        color:red;
    }
</style>