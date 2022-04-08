<template>
  <div class="container-sm border border-dark">
    <div class="lead row">
      <figure class="imagem col-md-12">
        <img src="../assets/logo.png" alt="Minha Figura" class="col-md-6" />
      </figure>
      <h1 class="display-2 col-md-6">Nova Lead</h1>
    </div>
    <div class="row cad">
      <div class="col-sm left">
        <form @submit.prevent="save">
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
                >Campo nome é requerido</span
              >
            </div>
          </div>
          <div class="form-row col-md-3">
            <div class="form-group">
              <aria-label for="telefone">Telefone</aria-label>
              <input
                placeholder="Telefone"
                class="form-control"
                type="tel"
                name="telefone"
                id="telefone"
                v-model="v$.telefone.$model"
              />
              <span v-if="v$.telefone.$error" class="text-danger"
                >Campo telefone é requerido</span
              >
            </div>
          </div>
          <div class="form-group">
            <aria-label for="email">Defina sua senha</aria-label>
            <input
              placeholder="Insira seu email"
              class="form-control"
              type="email"
              name="email"
              id="email"
              v-model="v$.email.$model"
            />
            <span v-if="v$.email.$error" class="text-danger"
              >Campo email é requerido
            </span>
          </div>
        </form>
      </div>
      <div class="col-sm right">
        <form @submit.prevent="nova_lead">
          <div class="form-row">
            <div class="form-group">
              <aria-label>Oportunidades</aria-label>
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">
                    <input type="checkbox" id="checkbox" v-model="checked" />
                    <label for="checkbox">{{ checked }}</label>
                  </th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <input type="checkbox" id="checkbox" v-model="checked" />
                    <label for="checkbox">{{ checked }}</label>
                  </th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">
                    <input type="checkbox" id="checkbox" v-model="checked" />
                    <label for="checkbox">{{ checked }}</label>
                  </th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">
                    <input type="checkbox" id="checkbox" v-model="checked" />
                    <label for="checkbox">{{ checked }}</label>
                  </th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
            <button type="submit" class="btn btn-primary">Salvar</button>
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
  methods: {
    save() {
      if (!this.v$.name.$invalid) {
        const user = JSON.stringify({
          name: this.name,
          telefone: this.telefone,
          email: this.email,
        });
        localStorage.user = user;
      }
    },
  },
  validations() {
    return {
      name: { required },
      telefone: { required },
      email: { required },
    };
  },
  components: {},
};
</script>
<style>
.btn {
  width: 100%;
  height: 45px;
}
.lead {
  justify-content: right;
  align-items: right;
}
.container {
  justify-content: center;
  align-items: center;
  margin-top: 5%;
}
.imagem {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.checkbox {
  background: green;
}
.cad {
  margin-bottom: 10%;
}
.left {
  margin-left: 150px;
}
.right {
  margin-right: 80px;
}
.lead {
  justify-content: right;
  align-items: right;
}
.display-2 {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.lead {
  justify-content: right;
  align-items: right;
}
</style>
