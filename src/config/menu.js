/**
 * name 菜单名
 * icon 图标
 * authcode 权限码
 * path 路由地址
 * level 级别
 * index 序号（菜单选中时css展示需要）
 */
export const systemData = [
  {
    name: 'overview',
    authcode: '',
    path: '/overview',
    icon: '',
    index: '1',
    level: 1
  }, {
    name: 'table',
    authcode: '',
    path: '/selectExcel',
    icon: '',
    index: '2',
    level: 1,
    child: [
      {
        name: 'selectTable',
        authcode: '',
        path: '/selectTable',
        icon: '',
        index: '2-1',
        level: 2
      }, {
        name: 'dragTable',
        authcode: '',
        path: '/dragTable',
        icon: '',
        index: '2-2',
        level: 2
      }
    ]
  }, {
    name: 'chart',
    authcode: '',
    path: '/chart1',
    icon: '',
    index: '3',
    level: 1,
    child: [
      {
        name: 'chart1',
        authcode: '',
        path: '/chart1',
        icon: '',
        index: '3-1',
        level: 2
      }, {
        name: 'chart2',
        authcode: '',
        path: '/chart2',
        icon: '',
        index: '3-2',
        level: 2
      }
    ]
  },
  {
    name: 'documentation',
    authcode: '',
    path: '/documentation',
    icon: '',
    index: '4',
    level: 1
  }
]

