<template>
  <div class="row lead col-md-12">
    <div class="col-md-6">
      <figure class="imagem">
        <img src="../assets/EloGroup.png" alt="Minha Figura" class="col-md-6" />
      </figure>
    </div>
    <div class="row col-md-6 nowrap">
      <h1 class="display-2 col-md-4 text-nowrap">{{ title }}</h1>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
  },
};
</script>
<style>
.imagem {
  margin-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
