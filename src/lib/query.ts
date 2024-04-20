import { client } from "./sanity";

export async function getHomePageImages() {
  const query = `*[_type == 'media.tag' && name.current == 'stronaGlowna'] {
            'images': *[_type == 'sanity.imageAsset' && references(^._id)]{originalFilename, url, altText}
            }`;

  const data = await client.fetch(query);

  return data;
}

export async function getGalleryImages() {
  const query = `*[_type == 'media.tag' && name.current == 'Wszystko'] {
            'images': *[_type == 'sanity.imageAsset' && references(^._id)]{originalFilename, url, altText}
            }`;

  const data = await client.fetch(query);

  return data;
}

export async function getMainData() {
  const query = `*[_type == 'PageContent'] {
      name,
      phone,
      email,
      openHours,
      address
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

export async function getPricelist() {
  const query = `*[_type == "pricelist"] {
    wynajemPriv,
    Gokarty,
    KulaWodna,
    walecWodny,
    ZjezdzalniePtNd,
    ZjezdzalniePonCzw
  }`;

  const data = await client.fetch(query);

  return data;
}

export async function getFAQ() {
  const query = `*[_type == "qna"] {
    question,
    answear
  }`;

  const data = await client.fetch(query);

  return data;
}

export async function getNews(end = 5, start = 0) {
  const query = `*[_type == "news"][${start}...${end}] | order(_createdAt desc)  {
        id,
        title,
        smallDescription,
        "currentSlug": slug.current,
        titleImage,
        publishedAt,
        "count": count(*[_type == "news"])
      }
      `;

  const data = await client.fetch(query);

  return data;
}

export async function getSingleNews(slug: string) {
  const query = `*[_type == 'news' && slug.current == '${slug}'] {
    title,
    content,
    publishedAt,
    titleImage
  }`;

  const data = await client.fetch(query);

  return data;
}

export async function getOpinions() {
  const query = `*[_type == 'opinions'] {
    opinion,
    author,
    url
  }`;

  const data = await client.fetch(query);

  return data;
}
