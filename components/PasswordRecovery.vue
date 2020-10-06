<template>
  <div class="password-container">
    <a-form-model-item class="password-container__logo">
        <a-col class="password-container__logo--img-logo">
          <img :src = "require('../assets/svg/logo-zifos.svg')" alt='Logo Zifos'>
        </a-col>
    </a-form-model-item>

    <div class="password-container__restore-password">
      <a-text>
        <h3>Restablecer tu contraseña</h3>
      </a-text>
    </div>

    <a-input
      class="password-container__email"
      v-model="userData.mail"
      placeholder="Email"
    >
      <a-icon slot="prefix" type="mail" />
    </a-input>

    <div>
      <a-button
        class="password-container__btn-send"
        type="danger"
        :disabled="userData.mail === ''"
        @click="recoverPassword"
      >
        Enviar instrucciones
      </a-button>
      <br>
      <a-button @click="login" type="link" class="password-container__backto-login">
        Volver al login
      </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Password",
  data() {
    return {
      userData: {
        mail: "",
      }
    };
  },

  methods: {
    recoverPassword() {
      console.log(this.userData);
    },

    login() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~/assets/variables';

* {
  margin: 0;
  padding: 0;
}

.password-container {
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 100%;
  overflow: hiiden;
  &__logo {
    display: flex;
    justify-content: center;
    margin-bottom: 4.2rem;
  }
  &__restore-password {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
  &__email {
    margin-bottom: 1rem;
    ::placeholder {
      padding-left: 4px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.40);
    }
  }
  &__btn-send {
    width: 100%;
  }
  &__backto-login {
    width: 100%;
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
    color: rgba(237, 31, 44, 0.5);
    &:hover {
        color: #ED1F2C;
      }
  }
}
</style>
