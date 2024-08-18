import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/main.css";
import terminal from "virtual:terminal";
globalThis.console = terminal;
import { createRouter } from "./router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Blog from "@/pages/Blog.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/blog",
    component: Blog,
  },
];

const router = createRouter({
  routes,
});

createApp(App).use(router).mount("#app");
