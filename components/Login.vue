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
          Logo
        </a-col>
      </a-form-model-item>

      <a-form-model-item>
        <a-col class="form-model__tabs">
          <a href="#">Login</a>
          <a href="#">Singup</a>
        </a-col>
      </a-form-model-item>

      <a-form-model-item class="form-model__user">
        <a-input v-model.trim="userForm.user" placeholder="User">
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
          placeholder="Password"
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0, 0, 0, 0.40)"
          />
        </a-input-password>
      </a-form-model-item>

      <a-form-model-item class="form-model__dates">
        <a-row>
          <a-col>
            <a-checkbox @change="onChange" class="form-model__checkbox">
              <span>Remember me</span>
            </a-checkbox>
            <a class="form-model__forgot" href="#">¿Forgot password?</a>
          </a-col>
        </a-row>
      </a-form-model-item>

      <a-form-model-item class="form-model__submit">
        <a-button
          class="form-model__submit--btn"
          type="primary"
          block
          html-type="submit"
          :disabled="userForm.user === '' || userForm.password === ''"
        >
          Ingresar
        </a-button>
        <a-row type="flex" justify="center">
          <a-col>
            <a @click="recovery">¿Olvidaste tu contraseña?</a>
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

.form {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 35%;
  background-color: #E8BB51;
  border-radius: 10px;
  box-shadow: 2px 2px 8px 1px black;
  .form-model {
    &__logo {
      width: 100%;
      display: flex;
      justify-content: center;
      &--img-logo {
        width: 3.125rem;
        height: 3.125rem;
        margin-top: 0.5rem;
      }
    }
    &__tabs {
      display: flex;
      justify-content: space-around;
      margin-top: 1rem;
      margin-bottom: 0.25rem;
      a {
        color: rgba(0, 0, 0, 0.60);
        font-weight: bold;
        font-size: 14px;
        &:hover {
          color: #000000;
        }
      }
    }
    &__user {
      margin-top: 0.25rem;
      ::placeholder {
        padding-left: 4px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.40);
      }
    }
    &__password {
      margin-top: 0.25rem;
      ::placeholder {
        padding-left: 4px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.40);
      }
    }
    &__submit {
      width: 100%;
      margin-top: 0.50rem;
      display: flex;
      justify-content: center;
      &--btn {
        width: 6.25rem;
      }
    }
    &__dates {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 0.75rem;
        color: rgba(0, 0, 0, 0.50);
        &:hover {
          color: #000000;
        }
      }
      a {
        font-size: 0.75rem;
        color: rgba(0, 0, 0, 0.50);
        &:hover {
          color: #000000;
        }
      }
    }
  }
}

</style>
