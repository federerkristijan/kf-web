import { HomeIcon } from '@sanity/icons';
import { baseLanguage } from '@/lib/sanity.types';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'heading',
      description:
        'Dies ist das Feld für den Text der über dem Titel eurer Website steht.',
      title: 'Heading (uppercase)',
      type: 'localeString',
    }),
    defineField({
      name: 'title',
      description: 'Dies ist das Feld für den Titel eurer Website.',
      title: 'Title',
      type: 'localeString',
    }),
    defineField({
      name: 'description',
      description: 'Dies ist das Feld für das <meta> description tag (SEO).',
      title: 'Description',
      type: 'localeText',
    }),
    defineField({
      name: 'subheader',
      description: 'Dies ist das Feld für den Text, der unter dem Titel steht.',
      title: 'Subheader',
      type: 'localeBody',
    }),
  ],
  preview: {
    select: {
      title: `title.${baseLanguage?.id}`,
    },
    prepare({ title }) {
      return {
        subtitle: 'Home',
        title,
      };
    },
  },
});
