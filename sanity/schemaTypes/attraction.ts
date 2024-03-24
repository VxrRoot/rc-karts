export default {
  name: 'attraction',
  type: 'document',
  title: 'Atrakcje',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Opis',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Zdjęcie',
    },
  ],
}
