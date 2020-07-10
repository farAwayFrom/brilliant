/**
 * name 菜单名
 * icon 图标
 * authcode 权限码
 * path 路由地址
 * level 级别
 */
export const systemData = [
  {
    name: 'overview',
    authcode: '',
    path: '/overview',
    icon: '',
    level: 1
  }, {
    name: 'excel',
    authcode: '',
    path: '/selectExcel',
    icon: '',
    level: 1,
    child: [
      {
        name: 'selectExcel',
        authcode: '',
        path: '/selectExcel',
        icon: '',
        level: 2
      }, {
        name: 'dragExcel',
        authcode: '',
        path: '/dragExcel',
        icon: '',
        level: 2
      }
    ]
  }
]

