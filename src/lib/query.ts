import { client } from "./sanity";

export async function getHomePageImages() {
  const query = `*[_type == 'media.tag' && name.current == 'stronaGlowna'] {
            'images': *[_type == 'sanity.imageAsset' && references(^._id)]{originalFilename, url, altText}
            }`;

  const data = await client.fetch(query);

  return data;
}

export async function getAttraction() {
  const query = `*[_type == 'attraction'] {
      name,
      description,
      image
    }`;

  const data = await client.fetch(query);

  return data;
}
