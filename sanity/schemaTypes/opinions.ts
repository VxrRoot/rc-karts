export default {
  name: 'opinions',
  type: 'document',
  title: 'Opinie',
  fields: [
    {
      name: 'opinion',
      title: 'Treść opinii',
      type: 'text',
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Adres url',
      type: 'string',
    },
  ],
}
