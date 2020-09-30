<<<<<<< HEAD

<template>
  <login> </login>
=======
<template>
  <a-row class="container" type="flex" justify="center">
    <a-col class="form">
      <!-- Component loginForm -->
      <!-- <login-form /> -->
      <a-form-model
        class="form__model"
        layout="vertical"
        :model="userForm"
        @submit="handleSubmit"
        @submit.native.prevent
      >
        <a-form-model-item>
          <a-input v-model.trim="userForm.user" placeholder="Usuario">
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-input-password
            v-model="userForm.password"
            type="password"
            placeholder="Contraseña"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input-password>
        </a-form-model-item>
        <a-form-model-item>
          <a-button
            type="primary"
            block
            html-type="submit"
            :disabled="userForm.user === '' || userForm.password === ''"
          >
            Ingresar
          </a-button>
          <a-row type="flex" justify="center">
            <a-col>
              <a>¿Olvidaste tu contraseña?</a>
            </a-col>
          </a-row>
        </a-form-model-item>
      </a-form-model>
      <!-- !Component loginForm -->
      <!-- Recovery Password -->
        <!--<recovery-password>-->
      <!-- !Recovery Password -->
    </a-col>
  </a-row>
>>>>>>> 4aa3389c3d01a00c8c7c254522f2ced94e9de36f
</template>


<script>
export default {
  layout: 'login',
  name: 'layoutView',
  data() {
    return {
      userForm: {
        user: '',
        password: '',
      },
    };
  },
  methods: {
    formSubmit() {
      console.log(this.userForm);
    },
  },
};
</script>


<style lang="scss" scoped>

.container{
  display:flex ;
  align-items: center;
  width: 100%;
  height: 100%;
  
}

.form{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60%;
  width: 25%;
  background-color: #001529;
  border-radius: 10px;
  box-shadow: 2px 2px 10px 1px black
}


<<<<<<< HEAD
</style>
=======





</style>
>>>>>>> 4aa3389c3d01a00c8c7c254522f2ced94e9de36f
