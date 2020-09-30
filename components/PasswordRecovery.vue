<template>
  <div class="password-container">
    <a-input
      class="password-container__user"
      v-model="userData.name"
      placeholder="Nombre de usuario"
    >
      <a-icon slot="prefix" type="user" />
    </a-input>
    <a-input
      class="password-container__email"
      v-model="userData.mail"
      placeholder="Email"
    >
      <a-icon slot="prefix" type="mail" />
    </a-input>
    <div>
      <a-button @click="login" type="link">
        Volver al login
      </a-button>
      <a-button
        type="danger"
        :disabled="userData.name === '' || userData.mail === ''"
        @click="recoverPassword"
      >
        Recuperar contraseña
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
        name: "",
        mail: ""
      }
      //   regular:
      //     "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
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
.password-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  &__user {
    width: 100%;
    margin-bottom: 1rem;
  }
  &__email {
    width: 100%;
    margin-bottom: 1rem;
  }
}
</style>
