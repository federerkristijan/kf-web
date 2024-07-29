import { DocumentIcon, DocumentsIcon, ImageIcon } from '@sanity/icons';
import { defineField, defineType } from "sanity";
import { baseLanguage, supportedLanguages } from '@/lib/sanity.types';

export default defineType({
  type: 'document',
  name: 'page',
  title: 'Pages',
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'localeString',
    }),
    defineField({
      type: 'localeString',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      type: 'localeString',
      name: 'slug',
      title: 'Slug',
      options: {
        source: `title.${baseLanguage?.id ?? ''}`,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'object',
      fields: supportedLanguages.map((lang) => ({
        type: 'array',
        name: lang.id,
        title: lang.title,
        of: [
          {
            type: 'block',
            marks: {
              decorators: [
                { title: 'Strong', value: 'strong' },
                { title: 'Emphasis', value: 'em' },
                { title: 'Underline', value: 'underline' },
              ],
              annotations: [
                {
                  name: 'link',
                  type: 'object',
                  title: 'Link',
                  fields: [
                    {
                      name: 'href',
                      type: 'url',
                      title: 'Url',
                    },
                  ],
                },
              ],
              styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' },
                { title: 'Quote', value: 'blockquote' },
              ],
            },
          },
          {
            type: 'image',
            icon: ImageIcon,
          },
        ],
      }),
        defineField({
          type: 'image',
          icon: ImageIcon,
          name: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          preview: {
            select: {
              imageUrl: 'asset.url',
              title: 'caption',
            },
          },
          fields: [
            defineField({
              title: 'Caption',
              name: 'caption',
              type: 'string',
            }),
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt text',
              description:
                'Alternativtext für Screenreader. Fällt auf die Bildunterschrift zurück, wenn nicht gesetzt.',
            }),
          ],
        })),
    }),
  ],
  preview: {
    select: {
      title: `title.${baseLanguage?.id ?? ''}`,
    },
    prepare({ title }) {
      return {
        media: DocumentIcon,
        subtitle: 'Page',
        title,
      };
    },
  },
});
