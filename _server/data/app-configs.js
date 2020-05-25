/**
 * @name 子应用注册表数据
 */

const subApps = [
  {
    module: "subapp-opcua",
    defaultRegister: false,
    devEntry: "//localhost:6751",
    depEntry: "http://",
    routerBase: "/opcua",
    data: [
      {
        title: "OPCUA",
        icon: "el-icon-monitor",
        id: "1",
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
      }
    ]
  },
  {
    module: "subapp-device",
    defaultRegister: false,
    devEntry: "//localhost:6752",
    depEntry: "http://",
    routerBase: "/device",
    data: [
      {
        id: "2",
        title: "设备管理",
        icon: "el-icon-cpu",
        children: [
          {
            id: "2-1",
            title: "设备类型",
            url: "/device/category"
          },
          {
            id: "2-2",
            title: "设备列表",
            url: "/device/device"
          },
          {
            id: "2-3",
            title: "网关配置",
            url: "/device/gateway"
          }
        ]
      }
    ]
  },
  // 用户管理
  {
    module: "subapp-user",
    defaultRegister: true,
    devEntry: "//localhost:6754",
    depEntry: "http://",
    routerBase: "/user",
    data: [
      {
        id: "3",
        title: "用户管理",
        icon: "el-icon-user",
        children: [
          {
            id: "3-1",
            title: "组织机构",
            url: "/user"
          },
          {
            id: "3-2",
            title: "岗位管理",
            url: "/user/role"
          }
        ]
      }
    ]

  },
]

module.exports = subApps