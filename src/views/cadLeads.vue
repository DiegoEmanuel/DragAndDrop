<template>
  <div class="container-sm border border-dark">
    <div class="lead row">
      <figure class="imagem col-md-12">
        <img src="../assets/logo.png" alt="Minha Figura" class="col-md-6" />
      </figure>
      <h1 class="display-2 col-md-6">Nova Lead</h1>
    </div>
    <div class="row cad">
      <form @submit.prevent="save">
        <div class="form row col-md-12">
          <div class="col-md-5">
            <div class="form-group">
              <aria-label for="name">Nome*</aria-label>
              <input
                placeholder="Insira um nome"
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
            <div class="form-row col-md-3">
              <div class="form-group">
                <aria-label for="telefone">Telefone*</aria-label>
                <input
                  placeholder="Insira um telefone"
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
            <input
              type="hidden"
              class="form-control"
              id="status"
              name="status"
            />
            <div class="form-group">
              <aria-label for="email">Email*</aria-label>
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
            <p class="center">*campos obrigatórios</p>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <aria-label>Oportunidades* </aria-label>
            </div>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">
                    <input
                      type="checkbox"
                      @input="checkAll($event.target.checked)"
                    />
                  </th>
                  <th scope="col">Oportunidades</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <input
                      type="checkbox"
                      id="checkbox.rpa"
                      v-model="opportunity.rpa"
                    />
                  </th>
                  <td>
                    <label for="checkbox.rpa">RPA</label>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <input
                      type="checkbox"
                      id="checkbox.produtodigital"
                      v-model="opportunity.produtodigital"
                    />
                  </th>
                  <td>
                    <label for="checkbox.produtodigital">
                      Produto Digital
                    </label>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <input
                      type="checkbox"
                      id="checkbox.analytics"
                      v-model="opportunity.analytics"
                    />
                  </th>
                  <td><label for="checkbox.analytics"> Analytics </label></td>
                </tr>
                <tr>
                  <th scope="row">
                    <input
                      type="checkbox"
                      id="checkbox.bpm"
                      v-model="opportunity.bpm"
                    />
                  </th>
                  <td>
                    <label for="checkbox.bpm">BPM</label>
                  </td>
                </tr>
              </tbody>
            </table>
            <p
              class="alert alert-danger center"
              v-if="
                !opportunity.bpm &
                !opportunity.analytics &
                !opportunity.rpa &
                !opportunity.produtodigital
              "
            >
              Marque pelo menos um campo
            </p>
            <button type="submit" class="btn btn-primary">Salvar</button>
          </div>
        </div>
      </form>
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
      opportunity: {
        rpa: false,
        produtodigital: false,
        analytics: false,
        bpm: false,
      },
    };
  },
  methods: {
    save() {
      if (
        !this.v$.name.$invalid &
        !this.v$.telefone.$invalid &
        !this.v$.$email
      ) {
        const setLeads = [localStorage.leads];
        const leads = JSON.stringify({
          name: this.name,
          telefone: this.telefone,
          email: this.email,
          opportunitys: this.opportunity,
        });
        if (
          (this.opportunity.rpa === false) &
          (this.opportunity.produtodigital === false) &
          (this.opportunity.analytics === false) &
          (this.opportunity.bpm === false)
        ) {
          alert("Escolha pelo menos 1 item");
        } else {
          setLeads.push(leads);
          localStorage.leads = setLeads;
          alert("Lead criada com sucesso");
          window.location.href = "#/listLeads";
        }
      } else {
        if (
          !this.v$.name.$invalid |
          !this.v$.telefone.$invalid |
          !this.v$.$email |
          ((this.opportunity.rpa === false) &
            (this.opportunity.produtodigital === false) &
            (this.opportunity.analytics === false) &
            (this.opportunity.bpm === false))
        ) {
          alert(
            "Campos nome, telefone, email obrigatórios e necessário pelo menos um interesse em alguma oportunidades "
          );
        }
      }
    },
    verificarCheckBox() {
      var check = document.getElementsById("opportunity");

      for (var i = 0; i < check.length; i++) {
        if (check[i].checked == true) {
          alert("true");
        } else {
          alert("false");
        }
      }
    },
    checkAll(check) {
      if (check) {
        this.opportunity.rpa = true;
        this.opportunity.analytics = true;
        this.opportunity.bpm = true;
        this.opportunity.produtodigital = true;
      } else {
        this.opportunity.rpa = false;
        this.opportunity.analytics = false;
        this.opportunity.bpm = false;
        this.opportunity.produtodigital = false;
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
.form {
  padding: 5%;
}
</style>
