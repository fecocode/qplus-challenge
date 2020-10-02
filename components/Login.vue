<template>
  <a-col>
    <a-form-model
      class="form__model"
      layout="vertical"
      :model="userForm"
      @submit="formSubmit"
      @submit.native.prevent
    >
      <a-form-model-item class="form-model__logo">
        <a-col class="form-model__logo--img-logo">
          <img :src = "require('../assets/svg/logo-zifos.svg')" alt='Logo Zifos'>
        </a-col>
      </a-form-model-item>

      <a-form-model-item class="form-model__user">
        <a-input class="form-model__user--btn-user" v-model.trim="userForm.user" placeholder="Usuario">
          <a-icon
            slot="prefix"
            type="user"
            style="color: rgba(0, 0, 0, 0.40)"
          />
        </a-input>
      </a-form-model-item>

      <a-form-model-item class="form-model__password">
        <a-input-password
          v-model="userForm.password"
          type="password"
          placeholder="Contraseña"
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0, 0, 0, 0.40)"
          />
        </a-input-password>
      </a-form-model-item>

      <a-form-model-item class="form-model__submit">
        <a-button
          class="form-model__submit--btn"
          type="danger"
          block
          html-type="submit"
          :disabled="userForm.user === '' || userForm.password === ''"
        >
          Ingresar
        </a-button>
        <a-row type="flex" justify="center">
          <a-col>
            <nuxt-link to="/password-recovery"
              >¿Olvidaste tu contraseña?</nuxt-link
            >
          </a-col>
        </a-row>
      </a-form-model-item>
    </a-form-model>
  </a-col>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userForm: {
        user: "",
        password: ""
      }
    };
  },
  methods: {
    formSubmit() {
      console.log(this.userForm);
    },

    recovery() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.form-model {
  &__logo {
    display: flex;
    justify-content: center;
    margin-bottom: 3.5rem;
  }
  &__user {
    margin-top: 0.15rem;
    ::placeholder {
      padding-left: 4px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.40);
    }
  }
  &__password {
    margin-top: 0.15rem;
    ::placeholder {
      padding-left: 4px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.40);
    }
  }
  &__submit {
    width: 100%;
    margin-top: 0.75rem;
  }
  &__forgot {
    display: flex;
    justify-content: center;
    margin-top: 0.50rem;
    a {
      color: rgba(237, 31, 44, 0.5);
      &:hover {
        color: #ED1F2C;
      }
    }
  }
}
</style>
