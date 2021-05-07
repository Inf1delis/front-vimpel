export const host = 'https://vimpel38.ru/back'

export const advantages = [
  {
    imgClass: 'fa fa-gavel',
    title: 'Качество',
    text: 'Наши товары прочнее товаров конкурентов. Мы не добавляем сомнительные\n' +
        '                    добавки для экономии цемента.'
  },
  {
    imgClass: 'fas fa-piggy-bank',
    title: 'Экономия',
    text: 'Собственные инертные материалы экономят сотни рублей на кубе\n' +
        '                    бетона.'
  },
  {
    imgClass: 'fa fa-bolt',
    title: 'Молниеностное реагирование',
    text: 'На вашу заявку отреагируют в считаные минуты, вне зависимости от объема\n' +
        '                    и\n' +
        '                    времени доставки.'
  },
  {
    imgClass: 'fa fa-file',
    title: 'Паспорта качества',
    text: 'Сертификаты качества на все марки и классы растворов и бетона гарантируют\n' +
        '                    высокое качество.'
  },
  {
    imgClass: 'fas fa-users',
    title: 'Нам доверяют',
    text: 'Огромный оборот: суммарно более 8 тысяч кубов за месяц выезжает с нашего\n' +
        '                    предприятия.'
  },
  {
    imgClass: 'fa fa-cubes',
    title: 'Электронный контроль',
    text: 'Вам приедет в точности заказанная кубатура. Ваша заявка сразу пересылается менеджеру в телеграмм.' +
        'Открытость данных за день.'
  }
];

export const shortList = ['Бетон', 'Пескобетон', 'ФБС', 'Тротуарная плитка'];

export const betonShortList = ['Актуальные цены', 'Собственное производство', 'Оплата по счету', 'Доставка/Швинг',
                                    'Поможем с выбором', 'Сертификаты ГОСТ']
//
// export const peskoShortList = ['Собственное производство', 'Оплата по счету', 'Доставка/Швинг',
//                                     'Поможем с выбором', 'Сертификаты ГОСТ', 'Любые объемы'];
export const peskoShortList = betonShortList

export const helpShortList = ['Сферы применения бетона', 'Какую марку бетона выбрать', 'Пескобетон/бетон',
  'Расчет кубатуры', 'Как правильно принять бетон', 'Укладка бетона']

// export const borderShortList = ['Собственное производство', 'Оплата по счету', 'Доставка по России',
//   'Поможем с выбором', 'Сертификаты ГОСТ', 'Любые объемы']

export const borderShortList = betonShortList

export const betonTable = {
  tableTitle: 'Товарный бетон',
  columns: ['П2', 'П3'],
  rows: [
    {
      name: 'М50',
      classification: 'В7,5',
      prices: ['2 450', '2 550', '2 400'],
    },
    {
      name: 'М100',
      classification: 'В7,5',
      prices: ['2 800', '2 900', '2 400'],
    },
    {
      name: 'М150',
      classification: 'В12,5',
      prices: ['3 000', '3 100', '2 550'],
    },
    {
      name: 'М200',
      classification: 'В15',
      prices: ['3 200', '3 300', '2 750'],
    },
    {
      name: 'М250',
      classification: 'В20',
      prices: ['3 400', '3 500', '3 000'],
    },
    {
      name: 'М300',
      classification: 'В22,5',
      prices: ['3 700', '3 800', '3 250'],
    },
    {
      name: 'М350',
      classification: 'В25',
      prices: ['4 100', '4 200', '3 540'],
    },
    {
      name: 'М400',
      classification: 'В30',
      prices: ['4 300', '4 400', '3 750'],
    }
  ]
}


export const peskoTable = {
  tableTitle: 'Пескобетон на отсеве',
  columns: ['П2', 'П3'],
  rows: [
    {
      name: 'М100',
      classification: 'В7,5',
      prices: ['3 500', '3 600', '2 790'],
    },
    {
      name: 'М150',
      classification: 'В12,5',
      prices: ['3 700', '3 800', '2 990'],
    },
    {
      name: 'М200',
      classification: 'В15',
      prices: ['3 900', '4 000'],
    },
    {
      name: 'М250',
      classification: 'В20',
      prices: ['4 100', '4 200'],
    },
    {
      name: 'М300',
      classification: 'В22,5',
      prices: ['4 300', '4 400'],
    },
    {
      name: 'М350',
      classification: 'В30',
      prices: ['4 600', '4 700'],
    }
  ]
}

export const fbsTable = {
  tableTitle: 'Фундаментные блоки',
  columns: ['Длина 90', 'Длина 120', 'Длина 240', ],
  table_columns: ['В x Ш'],
  rows: [
    {
      name: '60х30',
      // classification: '850',
      prices: ['800', '1 000', '1 800'],
    },
    {
      name: '60х40',
      // classification: '1 000',
      prices: ['850', '1 050', '2 100'],
    },
    {
      name: '60х60',
      // classification: '1 350',
      prices: ['1 300', '1 500', '3 000'],
    },
  ]
}

export const borderList = {
  tableTitle: 'Товарный бордюр',
  rows: [
    {
      name: 'Поребрик',
      price: '120',
      size: '100х20х8',
      weight: '34',
      img: 'border_road80.jpg'
    },
    {
      name: 'Дорожный',
      price: '320',
      size: '100х30х15',
      weight: '98',
      img: 'border_road150.jpg'
    },
    {
      name: 'Магистральный',
      price: '390',
      size: '100х30х18',
      weight: '118',
      img: 'border_road.jpg'
    },
  ]
}

export const goods = [
  {
    img: 'beton.jpg',
    route: '/beton',
    name: 'Бетон',
    price: betonTable.rows[0].prices[0],
    text1: 'Самый распространенный современный строительный материал,\n' +
        '                    используемый в основе строительства долгие годы.',
    text2: 'Постройка будет непригодной при заказе у\n' +
        '                    ненадежного поставщика, поэтому следует тщательно подобрать необходимую марку и завод-производитель,\n' +
        '                    а также ознакомиться с культурой заливки.'
  },
  {
    img: 'peskobeton.jpg',
    route: '/peskobeton',
    name: 'Пескобетон',
    price: peskoTable.rows[0].prices[0],
    text1: 'Пескобетон привлекается на всех этапах, начиная от возведения фундаментов,\n' +
        '                    заканчивая внутренними отделочными работами.',
    text2: 'Наш производственный комплекс прозводит пескобетон, соответсвующий высочайшим стандартам\n' +
        '                    современного строительства.'
  },
  // {
  //   img: 'border-index.jpeg',
  //   route: '/border',
  //   name: 'Бордюры',
  //   price: '320',
  //   text1: 'Изделия представляют собой надежную защиту от размытия обочины,\n' +
  //       '                    осыпания грунта, способствуют долговечности плиточного покрытия.',
  //   text2: 'Используется в качестве огораживающего элемента, выполняет роль ограничения\n' +
  //       '                    тротуаров и пешеходных дорожек от газонов.'
  // },
  {
    img: 'Fundament_lent_0.jpg',
    route: '/fbs',
    name: 'ФБС',
    price: fbsTable.rows[0].prices[0],
    text1: 'Готовые бетонные или железобетонные изделия, используемые для обустройства основания различных построек. ',
    text2: 'Для блоков не нужно сооружать опалубку, а их прочность гарантируется заводской технологией вибрирования и ' +
        'пропаривания бетона. Более легкие типы ФБС можно применять для возведения ограждений.'
  },
];
// {
//   title: '',
//   cards: false,
//   data: ''
// },

export const FAQText = [
  {
    title: 'Сферы применения бетона',
    cards: false,
    data: '                            - Столбчатые фундаменты <br>\n' +
        '                            - Ленточные фундаменты <br>\n' +
        '                            - Плитные фундаменты <br>\n' +
        '                            - Заливка стяжек <br>\n' +
        '                            - Несущие колонны <br>\n' +
        '                            - Отмостки <br>\n' +
        '                            - Заборные столбы <br>\n' +
        '                            - Лестницы <br>\n' +
        '                            - Дорожки на участке <br>\n' +
        '                            - Выравнивание полов <br>\n' +
        '                            - Устройства перекрытий <br>'
  },
  {
    title: 'Марки бетона',
    cards: true,
    data: [
      {
        title: 'М100',
        price: betonTable.rows[0].prices[0],
        text: 'Легкий бетон, который используется в основном для бетонной\n' +
            '                            подготовки. <br><br>\n' +
            '                            Применяется, прежде всего, перед заливкой монолитных плит или фундамента здания, а\n' +
            '                            также\n' +
            '                            при строительстве дорог.'
      },
      {
        title: 'М150',
        price: betonTable.rows[1].prices[0],
        text: 'Быстро застывает, поэтому процесс строительства будет\n' +
            '                            проходить\n' +
            '                            быстрее.<br><br>\n' +
            '                            Из-за низкого уровня устойчивости к влиянию окружающей среды, его мало используют\n' +
            '                            при\n' +
            '                            строительстве объектов, выдерживающих большие нагрузки.'
      },
      {
        title: 'М200',
        price: betonTable.rows[2].prices[0],
        text: 'Тяжелый бетон, чаще всего служит для заливки монолитных\n' +
            '                            фундаментов, дорожек или каркасных сооружений.<br><br>\n' +
            '                            Благодаря высокой прочности, противодействию негативным факторам окружающей среды он\n' +
            '                            делает конструкции более долговечными.'
      },
      {
        title: 'М250',
        price: betonTable.rows[3].prices[0],
        text: 'Качества немного лучше, чем у М200, имеет подобные уровни\n' +
            '                            водонепроницаемости, морозостойкости и подвижности.<br><br>\n' +
            '                            Однако применяют редко из-за стоимости. В то же время он несколько хуже М300, хотя\n' +
            '                            их\n' +
            '                            цена отличается не намного.'
      },
      {
        title: 'М300',
        price: betonTable.rows[4].prices[0],
        text: 'Используют для строительства постоянно нагружаемых\n' +
            '                            конструкций.\n' +
            '                            Это тротуары, дороги.<br><br>\n' +
            '                            Обладая высокой прочностью, плотностью и морозостойкостью, бетонная смесь\n' +
            '                            выдерживает\n' +
            '                            любые негативные факторы окружающей среды.'
      },
      {
        title: 'М350',
        price: betonTable.rows[5].prices[0],
        text: 'Относится к элитной категории. Предназначен для\n' +
            '                            конструирования\n' +
            '                            зданий с большими физическими,\n' +
            '                            атмосферными и механическими нагрузками. <br><br>Особенно высоки прочностные характеристики\n' +
            '                            на\n' +
            '                            сжатие. Быстро застывает.'
      },
      {
        title: 'М400',
        price: betonTable.rows[6].prices[0],
        text: 'Бетоном пользуются при строительстве сооружений,\n' +
            '                            эксплуатируемых\n' +
            '                            в непростых условиях, особых технических и нормативных требованиях.<br><br>\n' +
            '                            При этом важно строго соблюдать предписанные нормы заливки и эксплуатации. '
      },
    ]
  },
  {
    title: 'Пескобетон/бетон',
    cards: false,
    data: 'Пескобетон считается промежуточным элементом между бетонной\n' +
        '                            смесью и цементом. Этот материал используется\n' +
        '                            при реставрационных работах, ремонте и строительстве. <br><br> Отлично зарекомендовал себя\n' +
        '                            на зыбких\n' +
        '                            грунтовых участках. Незаменим в обустройстве бетонного пола для помещений,\n' +
        '                            испытывающих большие нагрузки – складов, гаражей, торговых центров. <br><br>\n' +
        '                            Имеющиеся ингридиенты в виде щебенки и химических присадок позволяют заливать\n' +
        '                            бетонную\n' +
        '                            стяжку любой толщины без трещин.'
  },
]

export const styleGuide = [
  {
    title: 'Расчистка территории',
    htmlText: 'Очистите участок от травы, камней, деревьев, кустов и даже старого\n' +
        '                            бетона. Идеальная территория - сырая земля.'
  },
  {
    title: 'Подстилающий слой',
    htmlText: 'Гранулированная засыпка или дорожное основание будут хорошими\n' +
        '                            подстилающими слоями. Если земля очень сильно утрамбована и устойчива,\n' +
        '                            то можно использовать ее'
  },
  {
    title: 'Подготовьте опалубку',
    htmlText: 'Опалубка – это деревянный периметр, сооруженный вокруг площадки,\n' +
        '                            предназначенной для заливки бетона.<br>\n' +
        '                            Проверьте:<br>\n' +
        '                            1) у прямоугольной опалубки углы в 90 градусов<br>\n' +
        '                            2) небольшой наклон в 6 мм на каждые 30 см'
  },
  {
    title: 'Проволочная сетка',
    htmlText: 'Полезна для дополнительной устойчивости, особенно для\n' +
        '                            высоконагруженных построек.<br><br> Если вы укладываете бетон на поверхность, которая не\n' +
        '                            будет\n' +
        '                            сильно нагружаться, проволочная сетка - перебор.'
  },
  {
    title: 'Вылейте бетон в опалубку',
    htmlText: 'Пока заливают бетон, попросите помощников разбрасывать\n' +
        '                            его лопатами, обычными граблями или граблями для бетона.'
  },
  {
    title: 'Разровняйте бетон',
    htmlText: 'Начиная с верхушки, используйте разравнивательный инструмент, чтобы\n' +
        '                            выровнять влажный бетон. Разравнивание достигается также движениями широкой доски туда и\n' +
        '                            обратно, опираясь на опалубку.<br><br>\n' +
        '                            *в этот момент бетон уже примет более завершенный вид, будьте аккуратны'
  },
  {
    title: 'Загладьте поверхность',
    htmlText: 'Процесс разглаживания должен включать в себя два шага:<br><br>\n' +
        '                            - Воспользуйтесь разглаживающим инструментом (гладилка), чтобы помочь раствору (бетон без\n' +
        '                            гравия) подняться на поверхность и вдавить агрегаты.<br>\n' +
        '                            - Пройдите по поверхности с помощью гладилки. Когда немного воды просочится на поверхность,\n' +
        '                            делайте гладилкой широкие размашистые движения.'
  },
  {
    title: 'Деформационные швы',
    htmlText: 'Следует делать деформационные швы каждые 1,5–1,8 м. Эти швы помогут\n' +
        '                            бетону бороться с растрескиванием, которое вызывают изменения температуры. '
  },
  {
    title: 'Предотвращаем испарения',
    htmlText: 'Бетону необходимо дать затвердеть в течение 28 дней, первый день\n' +
        '                            является наиболее важным.<br><br> Как только бетон уложен, рекомендуется накрыть бетон\n' +
        '                            пленкой.\n' +
        '                            Это поможет ему затвердеть, а также предотвратит испарение связующего вещества. '
  }
]


