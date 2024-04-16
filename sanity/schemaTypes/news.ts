export default {
  name: 'news',
  type: 'document',
  title: 'Aktualnosci',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tytul aktualnosci',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'link',
      options: {
        source: 'title',
      },
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Zdjecie tytulowe',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Krotki opis',
    },
    {
      name: 'publishedAt',
      title: 'Data publikacji',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH-mm',
        calendarTodayLabel: 'Today',
      },
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'content',
      type: 'array',
      title: 'Zawartosc',
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
  ],
}
