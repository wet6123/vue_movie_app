import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Movie from "../views/Movie.vue";
import MovieCreate from "../components/movie/MovieCreate.vue";
import MovieDetail from "../components/movie/MovieDetail.vue";
import MovieList from "../components/movie/MovieList.vue";
// import MovieSearch from "../components/movie/MovieSearch.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/movie",
    name: "movie",
    component: Movie,
    children: [
      {
        path: "create",
        name: "MovieCreate",
        component: MovieCreate,
      },
      {
        path: "detail",
        name: "MovieDetail",
        component: MovieDetail,
      },
      {
        path: "list",
        name: "MovieList",
        component: MovieList,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
