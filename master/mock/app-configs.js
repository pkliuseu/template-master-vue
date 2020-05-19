
const appConfig = [
  {
    id: "1",
    title: "demo1",
    icon: "el-icon-monitor",
    module: "subapp-demo1",
    defaultRegister: true,
    devEntry: "//localhost:6751",
    depEntry: "http://",
    routerBase: "/demo",
    children: [
      {
        id: "1-1",
        title: "home",
        url: "/demo"
      },
      {
        id: "1-2",
        title: "about",
        url: "/demo/about"
      }
    ]
  },
]

export default [
  {
    url: '/Api/GetAppConfigs',
    response: () => {
      return {
        code: 200,
        data: appConfig
      }
    }
  },
]
