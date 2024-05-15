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
    // {
    //   name: 'description',
    //   type: 'text',
    //   title: 'Opis',
    // },
    {
      name: 'description',
      type: 'array',
      title: 'Opis',
      of: [
        {
          type: 'block',
          of: [
            {
              type: 'image',
              options: {hotspot: true}, // Opcjonalnie, włącz hotspoty dla większej kontroli nad kadrowaniem obrazów
              fields: [
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Caption',
                  options: {
                    isHighlighted: true, // Opcja ta wyróżnia pole w UI, kiedy obraz jest wybrany
                  },
                },
                {
                  // Możesz dodać więcej pól związanych z obrazem, np. alt tekst
                  name: 'alt',
                  type: 'string',
                  title: 'Tekst alternatywny',
                  description: 'Tekst alternatywny dla obrazu, ważny dla SEO i dostępności',
                  options: {
                    isHighlighted: true,
                  },
                },
              ],
            },
            // Możesz dodać więcej typów obiektów, które mogą być wstawiane do bloków tekstu
          ],
        },
      ],
    },
    {
      name: 'image',
      type: 'image',
      title: 'Zdjęcie',
    },
    {
      name: 'rentable',
      type: 'boolean',
      title: 'Do wynajecia',
    },
  ],
}
