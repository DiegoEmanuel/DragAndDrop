<template>
  <div class="container-sm border border-dark">
    <div class="row cad">
      <HeaderLogo title="Nova Lead" />
      <CreateLeads />
    </div>
  </div>
</template>

<script>
import HeaderLogo from "@/components/HeaderLogo.vue";
import CreateLeads from "@/components/lead/CreateLeads.vue";

export default {
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
