import sanityClirnt from '@sanity/client';

import imageUrlBulider from '@sanity/image-url'

export const client = sanityClirnt({
    projectId: '3tr7ffbr',
    dataset: 'production',
    apiVersion: '2022-10-12',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const bulider = imageUrlBulider(client);

export const urlFor = (source) => bulider.image(source);