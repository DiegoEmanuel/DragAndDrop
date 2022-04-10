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
          <button @click="newLead" type="submit" class="btn btn-primary">
            Novo lead
          </button>
        </div>
        <div class="table_leads">
          <div class="table_topo row col-md-12">
            <div class="pendentes col-md-4">
              <h3>Cliente em Potencial</h3>
            </div>
            <div class="pendentes col-md-4">
              <h3>Dados confirmados</h3>
            </div>
            <div class="pendentes col-md-4">
              <h3>Reunião Agendada</h3>
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
                v-for="item in getList(1)"
                :key="item.id"
                class="drag-el"
                draggable="true"
                @dragstart="startDrag($event, item)"
              >
                {{ item.title }}
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
                v-for="item in getList(2)"
                :key="item.id"
                class="drag-el"
              >
                {{ item.title }}
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
                v-for="item in getList(3)"
                :key="item.id"
                class="drag-el"
              >
                {{ item.title }}
              </div>
            </div>
          </div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const items = ref([
      { id: 0, title: "Item A", list: 1 },
      { id: 1, title: "Item B", list: 2 },
      { id: 2, title: "Item C", list: 3 },
      { id: 3, title: "Item E", list: 1 },
      { id: 4, title: "Item F", list: 2 },
      { id: 5, title: "Item H", list: 3 },
    ]);
    const getList = (list) => {
      return items.value.filter((item) => item.list == list);
    };
    //fazer chamar as leads cadastradas na pagina anterior
    // const getLeads = {
    //   this: (leads = JSON.parse(localStorage.getItem("leads"))),
    // };
    const startDrag = (event, item) => {
      console.log(item);
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("itemID", item.id);
    };
    const onDrop = (event, list) => {
      const itemID = event.dataTransfer.getData("itemID");
      const item = items.value.find((item) => item.id == itemID);
      item.list = list;
    };
    // const loadLeads = { listLeads };

    return {
      getList,
      onDrop,
      startDrag,
      // getLeads,
    };
  },

  data() {},
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
    newLead() {
      window.location.href = "#/cadLeads";
    },
  },
  components: {},
};
</script>
<style>
.table_leads {
  background-color: aquamarine;
  width: 100%;
  padding: 10px;
  height: 100%;
  margin-top: 8%;
}
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
}
</style>
