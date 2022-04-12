<template>
  <div class="login">
    <div class="card">
      <figure class="imagem">
        <img src="../assets/EloGroup.png" alt="Minha Figura" />
      </figure>
      <h3 class="card-header text-center">Area de Registro</h3>
      <div class="form-row">
        <div class="form-group col-md-6">
          <div class="summary text-red"></div>
          <form @submit.prevent="register">
            <div class="form-row">
              <div class="form-group">
                <aria-label for="name">Nome*</aria-label>
                <input
                  placeholder="Informe um nome"
                  v-model="v$.name.$model"
                  class="form-control"
                  type="text"
                  name="name"
                  id="name"
                />
                <span v-if="v$.name.$error" class="text-danger"
                  >Campo é requerido</span
                >
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <aria-label for="password">Defina sua senha*</aria-label>
                <input
                  placeholder="Senha forte requerida"
                  class="form-control"
                  type="password"
                  name="password"
                  id="password"
                  v-model="v$.password.$model"
                />
                <span v-if="v$.password.$error" class="text-danger"
                  >Letra maiúscula || Número || Caracter especial || Mínimo 8
                  caracteres
                </span>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <aria-label for="confirmation_pass"
                  >Confirme sua senha*</aria-label
                >
                <input
                  placeholder="Repita a senha acima"
                  class="form-control"
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  v-model="v$.confirm_password.$model"
                />
                <span v-if="v$.confirm_password.$error" class="text-danger"
                  >Necessário ser igual ao campo password</span
                >
              </div>
            </div>
            <button type="submit" class="btn btn-secondary center">
              Registrar
            </button>
          </form>
        </div>
        <p class="center">*campos obrigatórios</p>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength, sameAs } from "@vuelidate/validators";
import router from "@/router";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      name: "",
      password: "",
      confirm_password: "",
    };
  },
  created() {
    if (!localStorage.users) {
      localStorage.users = JSON.stringify([]);
    }
  },
  methods: {
    register() {
      if (
        !this.v$.name.$invalid &&
        !this.v$.password.$invalid &&
        !this.v$.confirm_password.$invalid
      ) {
        var confirmacao = confirm("Usuario inserido com sucesso");
        const setUser = JSON.parse(localStorage.users);
        const user = JSON.stringify({
          name: this.name,
          password: this.password,
        });
        setUser.push(user);
        localStorage.users = JSON.stringify(setUser);
        confirmacao;
        this.clearForm();
        this.createLead();
      }
    },
    clearForm() {
      this.name = "";
      this.password = "";
      this.confirm_password = "";
    },
    createLead() {
      router.push("/createlead");
    },
  },
  validations() {
    return {
      name: { required },
      password: {
        required,
        minLength: minLength(8),
        containsUppercase: function (value) {
          return /[A-Z]/.test(value);
        },
        containsLowercase: function (value) {
          return /[a-z]/.test(value);
        },
        containsNumber: function (value) {
          return /[0-9]/.test(value);
        },
        containsSpecial: function (value) {
          return /[#?!@$%^&*-]/.test(value);
        },
      },
      confirm_password: { required, sameAsPassword: sameAs(this.password) },
    };
  },
};
</script>
<style>
.center {
  margin-left: 20px;
}
.card-header {
  justify-content: center;
  align-items: center;
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
}
.card {
  padding: 10%;
}
.btn-dark {
  width: 100%;
}
.form-group {
  width: 200px;
  justify-content: center;
  padding-bottom: 5%;
  margin-top: 20px;
}
.form-control {
  width: 250px;
}
.col {
  justify-content: center;
  width: 100%;
}
</style>
