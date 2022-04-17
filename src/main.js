// importação de dependencias do vue para criaçao da aplicação
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

//criando o aplicativo e falando que vai ser necessário
//usar o router(from router)
createApp(App).use(router).mount("#app");
