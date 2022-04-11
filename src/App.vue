<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/createlead">Create lead</router-link> |
    <router-link to="/listLeads">List leads</router-link>
  </nav>
  <router-view />
</template>
<script>
if (!localStorage.leads) {
  localStorage.leads = JSON.stringify([]);
}
if (!localStorage.users) {
  localStorage.users = JSON.stringify([]);
}
</script>
<style></style>
