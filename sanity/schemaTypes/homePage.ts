export default {
  name: 'PageContent',
  unique: true,
  type: 'document',
  title: 'StronaGlowna',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa',
    },
    {
      name: 'phone',
      type: 'string',
      title: 'NumerTelefonu',
    },
    {
      name: 'email',
      type: 'string',
      title: 'AdresEmail',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Adres',
    },
    {
      name: 'openHours',
      type: 'array',
      title: 'GodzinyOtwarcia',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'weekDays',
              title: 'DniTygodnia',
              type: 'string',
            },
            {
              name: 'open',
              title: 'GodzinyOtwarcia',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
