<template>
  <div class="lead">
    <figure class="imagem">
      <img src="../assets/logo.png" alt="Minha Figura" />
      <h1 class="display-2">Nova lead</h1>
    </figure>
  </div>
  <div class="container">
    <div class="form-group col-md-6"></div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <form @submit.prevent="register">
          <div class="form-row">
            <div class="form-group">
              <aria-label for="name">Nome</aria-label>
              <input
                placeholder="Nome"
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
          <div class="form-row col-md-3">
            <div class="form-group">
              <aria-label for="telefone">Telefone</aria-label>
              <input
                placeholder="Telefone"
                class="form-control"
                type="telefone"
                name="telefone"
                id="telefone"
                v-model="v$.telefone.$model"
              />
            </div>
          </div>
          <div class="form-row col-md-3">
            <div class="form-group">
              <aria-label for="email">Email</aria-label>
              <input
                placeholder="Email"
                class="form-control"
                type="email"
                name="email"
                id="email"
              />
            </div>
          </div>
        </form>
      </div>
      <div class="col-sm">Uma de três colunas</div>
      <div class="col-sm">
        <form>
          <div class="form-row">
            <div class="form-group">
              <aria-label for="email">Email</aria-label>
              <input
                placeholder="Email"
                class="form-control"
                type="email"
                name="email"
                id="email"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      name: "",
      telefone: "",
      email: "",
    };
  },
  methods: {},
  validations() {
    return {
      name: { required },
      telefone: {
        required,
      },
      email: {
        required,
      },
    };
  },
  components: {},
};
</script>
<style>
.lead {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  background-color: aqua;
}
.imagem {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
