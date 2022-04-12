<template>
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
              type="telefone"
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
                <label for="checkbox.produtodigital"> Produto Digital </label>
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
</template>
<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import router from "@/router";
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
    //Este método salva os leads com as opções que o usuário necessitar
    save() {
      if (
        (!this.v$.name.$invalid &&
          !this.v$.telefone.$invalid &&
          !this.v$.$email) ||
        (this.opportunity.rpa === false &&
          this.opportunity.produtodigital === false &&
          this.opportunity.analytics === false &&
          this.opportunity.bpm === false)
      ) {
        const getLeads = JSON.parse(localStorage.leads);
        const newLead = {
          name: this.name,
          telefone: this.telefone,
          email: this.email,
          opportunitys: this.opportunity,
          status: 1,
          id: this.lastID(),
        };
        if (
          (this.opportunity.rpa === false) &
          (this.opportunity.produtodigital === false) &
          (this.opportunity.analytics === false) &
          (this.opportunity.bpm === false)
        ) {
          alert("Escolha pelo menos 1 item");
        } else {
          getLeads.push(newLead);
          localStorage.leads = JSON.stringify(getLeads);
          alert("Lead criada com sucesso");
          router.push("/listLeads");
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
      this.opportunity.rpa = check;
      this.opportunity.analytics = check;
      this.opportunity.bpm = check;
      this.opportunity.produtodigital = check;
    },
    lastID() {
      const leads = JSON.parse(localStorage.leads);
      if (leads.length < 1) {
        return 1;
      }
      const lastLead = leads[leads.length - 1];
      return lastLead.id + 1;
    },
  },
  validations() {
    return {
      name: { required },
      telefone: { required },
      email: { required },
    };
  },
};
</script>
