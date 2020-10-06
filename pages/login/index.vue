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
</template>

<script>
export default {
  layout: "login",
  name: "layoutView",
  data() {
    return {
      recovery: false
    };
  },

  methods: {
    computed: {
      ...mapState({
        authUser: (state) => state.authUser 
      }),
      ...mapGetters({
        isLoggedIn: 'isLoggedIn'
      })
    },

    formSubmit() {
      console.log(this.userForm);
    },
    handleClick() {
      this.recovery = !this.recovery;
      console.log(this.recovery);
      // routes.replace("PasswordRecovery");
    }
  },
  async mounted(){
    try {
      await this.$fireAuth.signInWithEmailAndPassword(
        'franco.colares08@gmail.com',
        'Zifos2020'
      )
      alert('logged');
    } catch (e) {
      alert(e)
    }
  }
};
</script>

<style lang="scss" scoped>

.container {
  width: 100%;
  height: 100%;
  background-color: #3D4159;
}

.form-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70%;
  width: 27%;
  margin-left: auto;
  margin-right: auto;
  background-color: #F6E8D9;
  border-radius: 2rem;
  margin-top: 7%;
  box-shadow: 2px 2px 3px 3px rgba(0, 0, 0, 0.3);
}
</style>
