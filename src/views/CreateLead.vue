<template>
  <div class="container-sm border border-dark">
    <div class="row cad">
      <!-- chamando o componente HeaderLogo -->
      <HeaderLogo title="Nova Lead" />
      <!-- chamando o componente CreateLeads -->
      <CreateLeads />
    </div>
  </div>
</template>

<script>
// importando os components que serão necessários para renderizar a pag
import HeaderLogo from "@/components/HeaderLogo.vue";
import CreateLeads from "@/components/lead/CreateLeads.vue";

export default {
  //vai exportar nessa página esses dois componentes
  components: { HeaderLogo, CreateLeads },
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
.checkbox {
  background: green;
}
.cad {
  margin-bottom: 10%;
}
.left {
  margin-left: 150px;
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
