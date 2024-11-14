import Home from "../pages/home";

const routes = [
  {
    path: "/",
    key: 'main-app',
    component: Home,
    title: '首页',
    showMenu: true, // 是否在菜单中显示
  },
  {
    path: "/sub-react",
    key: 'sub-react',
    title: 'react子应用',
    showMenu: true,
  },
  {
    path: "/sub-vue3",
    key: 'sub-vue3',
    title: 'vue3子应用',
    showMenu: true,
  },
  {
    path: "/sub-vue",
    key: 'sub-vue',
    title: 'vue子应用',
    showMenu: true,
  }
];

export default routes;