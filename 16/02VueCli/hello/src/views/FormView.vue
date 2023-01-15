<template>
    <div>
        <h1>
            Hello
        </h1>
        <form @submit.prevent="checkForm">
            <div>
                <label for="">
                    Name {{ name }}
                </label>
                <input v-model="name" ref="nameInput" type="text">
                <div>
                    {{ nameError }}
                </div>
            </div>
            <div>
                <label for="">
                    Email {{ email }}
                </label>
                <input v-model="email" type="text">
            </div>
            <div>
              <p>
                Skills {{ skills }}
              </p>
              <label for="">
                css
              </label>
              <input v-model="skills" value="css" type="checkbox">
              <label for="">
                html
              </label>
              <input v-model="skills" value="html" type="checkbox">
              <label for="">
                js
              </label>
              <input v-model="skills" value="js" type="checkbox">
            </div>
            <button type="submit">
                Validate Form
            </button>
        </form>
    </div>
  
  </template>
  
  <script>

  
export default {
    name: 'FormView',
    data(){
      return {
        name:'',
        email:'',
        skills:[],
        nameError:''
      }
    },
    methods:{
        checkForm(){
            this.nameError = this.name.length > 3 ? "": "Invalid name value"
            this.$refs.nameInput.classList.add('form-control')
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