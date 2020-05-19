
const appConfig = [
  {
    id: "1",
    title: "OPCUA",
    icon: "el-icon-monitor",
    module: "subapp-opcua",
    defaultRegister: true,
    devEntry: "//localhost:6751",
    depEntry: "http://",
    routerBase: "/opcua",
    children: [
      {
        id: "1-1",
        title: "home",
        url: "/opcua"
      },
      {
        id: "1-2",
        title: "about",
        url: "/opcua/about"
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
