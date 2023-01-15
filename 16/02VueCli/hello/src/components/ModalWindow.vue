<template>
    <div class="overlay"  @click.self="toggleModal">
        <div class="modal">
            <h1>
                {{ title }}
            </h1>
            <p>
                {{ info }}
            </p>
            <div>
                {{ propValue }}
            </div>
            <div>
                {{ fethData }}
            </div>
            <button  @click.self="toggleModal">
                Close
            </button>
        </div>
    </div>
</template>
  
  <script>


  export default {
    name: 'ModalWindow',
    props: ['title', 'info', 'propValue'],
    data(){
        return{
            showModal:true,
            fethData:''
        }
    },
    methods:{
        toggleModal(data){
            this.$emit('close', '1111!')
        }
    },
    mounted(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => this.fethData = json)
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
    h1{
        font-size: 40px;
    }
    .overlay{
        display: flex;
        position: fixed;
        top: 0;
        z-index: 1;
        background-color: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
    .modal{
        background-color: #fff;
        padding: 50px;
        margin: auto;
        border: 2px solid red;
        &.discount{
            background-color: rgb(84, 195, 84);
        }
    }
  </style>
  