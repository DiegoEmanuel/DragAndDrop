<template>
  <div class="container-sm border border-dark">
    <div class="lead row">
      <figure class="imagem col-md-12">
        <img src="../assets/EloGroup.png" alt="Minha Figura" class="col-md-6" />
      </figure>
      <h1 class="display-2 col-md-6">Painel de Leads</h1>
    </div>
    <div class="row cad">
      <div class="col-sm left">
        <div class="col-md-3">
          <button @click="createlead" type="submit" class="btn btn-primary">
            Novo lead
          </button>
        </div>
        <div class="table_leads">
          <div class="table_topo row col-md-12">
            <div class="pendentes col-md-4">
              <h3>Cliente em Potencial</h3>
            </div>
            <div class="pendentes col-md-4">
              <h3>| Dados confirmados</h3>
            </div>
            <div class="pendentes col-md-4">
              <h3>| Reunião Agendada</h3>
            </div>
          </div>
          <div class="row col-md-12">
            <div
              dropzone="true"
              @drop="onDrop($event, 1)"
              @dragenter.prevent
              @dragover.prevent
              class="drop-zone col-md-3"
            >
              <div
                v-for="item in getLeads(1)"
                :key="item.id"
                class="drag-el"
                draggable="true"
                @dragstart="startDrag($event, item)"
              >
                {{ item.name }}
              </div>
            </div>
            <div
              dropzone="true"
              @drop="onDrop($event, 2)"
              @dragenter.prevent
              @dragover.prevent
              class="drop-zone col-md-3"
            >
              <div
                draggable="true"
                @dragstart="startDrag($event, item)"
                v-for="item in getLeads(2)"
                :key="item.id"
                class="drag-el"
              >
                {{ item.name }}
              </div>
            </div>
            <div
              dropzone="true"
              @drop="onDrop($event, 3)"
              @dragenter.prevent
              @dragover.prevent
              class="drop-zone col-md-3"
            >
              <div
                draggable="true"
                @dragstart="startDrag($event, item)"
                v-for="item in getLeads(3)"
                :key="item.id"
                class="drag-el"
              >
                {{ item.name }}
              </div>
            </div>
          </div>
          <div class="showUsers">
            <div class="col-sm-4" style="background-color: yellow"></div>
            <div class="col-sm-4" style="background-color: red"></div>
            <div class="col-sm-4" style="background-color: pink"></div>
          </div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="lead in leads" :key="lead.id">
                <th scope="row">{{ lead.id }}</th>
                <td>{{ lead.name }}</td>
                <td>{{ convertStatus(lead.status) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  data() {
    return {
      leads: JSON.parse(localStorage.leads),
    };
  },
  methods: {
    startDrag(event, item) {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("itemID", item.id);
    },
    onDrop(event, status) {
      const itemID = event.dataTransfer.getData("itemID");
      const item = this.leads.find((item) => item.id == itemID);
      if (item.status <= status) {
        item.status = status;
        localStorage.leads = JSON.stringify(this.leads);
      } else {
        alert("Não é permitido voltar o status de um item");
      }
    },
    getLeads(status) {
      return this.leads.filter((item) => item.status == status);
    },
    convertStatus(id) {
      const status = {
        1: "Cliente em potencial",
        2: "Dados confirmados",
        3: "Reunião agendada",
      };
      return status[id];
    },
    createlead() {
      router.push("/createlead");
    },
  },
};
</script>
<style>
.btn {
  width: 100%;
  height: 45px;
}
.drop-zone {
  margin: 50px auto;
  background-color: #ecf0f1;
  padding: 10px;
}
.drag-el {
  background-color: #3498db;
  color: white;
  padding: 5px;
  margin-bottom: 10px;
}
.drag-el:nth-last-of-type(1) {
  margin-bottom: 0;
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
.table_topo {
  padding: 5%;
  margin-bottom: -80px;
}
</style>
