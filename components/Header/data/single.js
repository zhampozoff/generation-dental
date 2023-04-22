const single = ['photo_equipment', 'photo_protocol_tools', 'orthodontics',
  'education', 'contacts', 'about_us']
export default single


// import ind from '~/pages/index.vue'
export const tabConfigs = [
  {
    value: 'Фотооборудования',
    name: 'photo_equipment',
    path: '/photo-equipment.js',
    component: 'ind',
    children: [
      {
        value: 'Фотоаппараты',
        name: 'camera',
        path: 'camera',
        component: 'ind',
      },
      {
        value: 'Объективы',
        name: 'lenses',
        path: 'lenses',
        component: 'ind',
      },
      {
        value: 'Вспышки',
        name: 'flashes',
        path: 'flashes',
        component: 'ind',
      },
      {
        value: 'Комплект',
        name: 'set',
        path: 'set',
        component: 'ind',
      },
    ]
  },
  {
    value: 'Инструменты для фотопротокола',
    name: 'photo_protocol_tools',
    path: '/photo-protocol-tools',
    component: 'ind',
    children: [
      {
        value: 'Ретракторы',
        name: 'retractors',
        path: 'retractors',
        component: 'ind',
      },
      {
        value: 'Зеркала',
        name: 'mirrors',
        path: 'mirrors',
        component: 'ind',
      },
      {
        value: 'Контрастеры',
        name: 'contrasters',
        path: 'contrasters',
        component: 'ind',
      },
      {
        value: 'Фильтр',
        name: 'filter',
        path: 'filter',
        component: 'ind',
      },
    ]
  },
  {
    value: 'Ортодонтия',
    name: 'orthodontics',
    path: '/orthodontics',
    component: 'ind',
    children: [
      {
        value: 'Минивинты',
        name: 'minis-screws',
        path: 'mini-screws',
        component: 'ind',
      },
      {
        value: 'Инструменты',
        name: 'tools',
        path: 'tools',
        component: 'ind',
      },
      {
        value: 'Прочее',
        name: 'others',
        path: 'others',
        component: 'ind',
      },
    ]
  },
  {
    value: 'Образование',
    name: 'education',
    path: '/education',
    component: 'ind'
  },
  {
    value: 'Контакты',
    name: 'contacts',
    path: '/contacts',
    component: 'ind'
  },
  {
    value: 'О нас',
    name: 'about-us',
    path: '/about-us',
    component: 'ind'
  }]

