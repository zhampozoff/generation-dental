import sample from './sample-pages'

const multiple = [
  {
    name: 'Фотооборудования',
    link: '/photo-equipment',
    child: [
      {
        name: 'Фотоаппараты',
        link: '/photo-equipment/camera'
      },
      {
        name: 'Объективы',
        link: '/photo-equipment/lenses'
      },
      {
        name: 'Вспышки',
        link: '/photo-equipment/flashes'
      },
      {
        name: 'Комплект',
        link: '/photo-equipment/sets'
      }
    ]
  },
  {
    name: 'Инструменты для фотопротокола',
    link: '/photo-protocol-tools',
    child: [
      {
        name: 'Ретракторы',
        link: '/photo-protocol-tools/retractors',
      },
      {
        name: 'Зеркала',
        link: '/photo-protocol-tools/mirrors',
      },
      {
        name: 'Контрастеры',
        link: '/photo-protocol-tools/contrasters',
      },
      {
        name: 'Фильтр',
        link: '/photo-protocol-tools/filters',
      }
    ]
  },
  {
    name: 'Ортодонтия',
    link: '/orthodontics',
    child: [
      {
        name: 'Минивинты',
        link: '/orthodontics/mini-screws'
      },
      {
        name: 'Инструменты',
        link: '/orthodontics/tools'
      },
      {
        name: 'Прочее',
        link: '/orthodontics/others'
      }
    ]
  },
  {
    name: 'Образование',
    link: '/education'
    // child: sample
  },
  {
    name: 'Контакты',
    link: '/contacts'
    // child: sample
  },
  {
    name: 'О нас',
    link: '/about-us'
    // child: sample
  }
]

export default multiple
