<template>
  <div class="container-sm border border-dark">
    <div class="lead row">
      <figure class="imagem col-md-12">
        <img src="../assets/logo.png" alt="Minha Figura" class="col-md-6" />
      </figure>
      <h1 class="display-2 col-md-6">Painel de Leads</h1>
    </div>
    <div class="row cad">
      <div class="col-sm left">
        <div class="col-md-3">
          <button type="submit" class="btn btn-primary">Novo lead</button>
        </div>
        <form @submit.prevent="nova_lead">
          <div class="form-row">
            <div class="form-group">
              <aria-label>Oportunidades</aria-label>
            </div>
            <table class="table table-striped">
              <thead>
                <tr class="table-active">
                  <th scope="col"></th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"></th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
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
        localStorage.lead = user;
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

.cad {
  margin-bottom: 10%;
}
.left {
  margin-left: 150px;
  margin-right: 150px;
}
.right {
  margin-right: 80px;
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
.display-2 {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.imagem {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
