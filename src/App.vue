<template>
  <nav>
    <!-- Componente principal da aplicação onde será chamadas as view
    e os components -->
    <!-- Se tivesse navbar -->
    <router-link to="/">Home</router-link> |
    <router-link to="/createlead">Create lead</router-link> |
    <router-link to="/listLeads">List leads</router-link>
    <!-- Se tivesse footer -->
  </nav>
  <router-view />
</template>
<!-- verificando se já foi criado as tabelas que 
serão necessárias para rodar a aplicação-->
<script>
if (!localStorage.leads) {
  localStorage.leads = JSON.stringify([]);
}
if (!localStorage.users) {
  localStorage.users = JSON.stringify([]);
}
</script>
<style></style>
