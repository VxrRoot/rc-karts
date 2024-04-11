export default {
  name: 'pricelist',
  type: 'document',
  title: 'Cennik',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa',
    },
    {
      name: 'wynajemPriv',
      type: 'number',
      title: 'Wynajem zjeżdżalni impreza prywatna',
    },
    {
      name: 'Gokarty',
      type: 'object',
      title: 'Gokarty',
      fields: [
        {
          name: 'czas',
          title: 'Czas',
          type: 'number',
        },
        {
          name: 'cena',
          title: 'Cena',
          type: 'number',
        },
      ],
    },
    {
      name: 'KulaWodna',
      type: 'object',
      title: 'Kula wodna',
      fields: [
        {
          name: 'czas',
          title: 'Czas',
          type: 'number',
        },
        {
          name: 'cena',
          title: 'Cena',
          type: 'number',
        },
      ],
    },
    {
      name: 'walecWodny',
      type: 'object',
      title: 'Walec wodny',
      fields: [
        {
          name: 'czas',
          title: 'Czas',
          type: 'number',
        },
        {
          name: 'cena',
          title: 'Cena',
          type: 'number',
        },
      ],
    },
    {
      name: 'ZjezdzalniePtNd',
      type: 'object',
      title: 'Zjeżdżalnie wejście pt-nd',
      fields: [
        {
          name: 'oneHour',
          title: '1 godzina',
          type: 'number',
        },
        {
          name: 'twoHours',
          title: '2 godziny',
          type: 'number',
        },
        {
          name: 'noLimit',
          title: 'Bez limitu',
          type: 'number',
        },
      ],
    },
    {
      name: 'ZjezdzalniePonCzw',
      type: 'object',
      title: 'Zjeżdżalnie wejście pon-czw',
      fields: [
        {
          name: 'oneHour',
          title: '1 godzina',
          type: 'number',
        },
        {
          name: 'twoHours',
          title: '2 godziny',
          type: 'number',
        },
        {
          name: 'noLimit',
          title: 'Bez limitu',
          type: 'number',
        },
      ],
    },
  ],
}
