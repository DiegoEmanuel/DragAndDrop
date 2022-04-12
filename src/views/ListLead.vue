<template>
  <div class="container-sm border border-dark">
    <header-logo title="List Lead" />
    <div class="row cad">
      <div class="col-sm left">
        <div class="col-md-3">
          <button @click="createlead" type="submit" class="btn btn-primary">
            Novo lead
          </button>
        </div>
        <table-leads />
      </div>
    </div>
  </div>
</template>

<script>
import TableLeads from "@/components/lead/TableLeads.vue";
import router from "@/router";
import HeaderLogo from "@/components/HeaderLogo.vue";
export default {
  components: { HeaderLogo, TableLeads },
  methods: {
    createlead() {
      router.push("/createlead");
    },
  },
};
</script>
