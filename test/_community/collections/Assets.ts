import { CollectionConfig } from 'payload/types';

const Assets: CollectionConfig = {
  slug: 'assets',
  labels: {
    singular: {
      de: 'Allgemeine Mediendatei',
      en: 'General Mediafile',
    },
    plural: {
      de: 'Allgemeine Mediendateien',
      en: 'General Mediafiles',
    },
  },
  admin: {
    group: {
      de: 'Medien',
      en: 'Media',
    },
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      localized: true,
      admin: {
        description: {
          de: 'Alternativtext (Allgemeine Beschreibung des Bildinhalts)',
          en: 'Alternative text (General description of the image content)',
        },
      },
    },
  ],
  upload: {
    staticURL: '/internal-media',
    staticDir: 'internal-media',
    formatOptions: {
      format: 'webp',
      options: {
        quality: 60,
      },
    },
    resizeOptions: {
      width: 2560,
      height: undefined,
    },
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: undefined,
        position: 'centre',
        formatOptions: {
          format: 'webp',
          options: {
            quality: 60,
          },
        },
      },
      {
        name: 'card',
        width: 768,
        height: undefined,
        position: 'centre',
        formatOptions: {
          format: 'webp',
          options: {
            quality: 60,
          },
        },
      },
      // sharp.position: top, right top, right, right bottom, bottom, left bottom, left, left top
      {
        name: 'normal',
        width: 1920,
        // By specifying `undefined` or leaving a height undefined,
        // the image will be sized to a certain width,
        // but it will retain its original aspect ratio
        // and calculate a height automatically.
        height: undefined,
        position: 'centre',
        formatOptions: {
          format: 'webp',
          options: {
            quality: 60,
          },
        },
      },
    ],
    mimeTypes: ['image/*'],
  },
  // For repro no access rules - access everything - you shall pass yeeeees
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
};

export default Assets;
