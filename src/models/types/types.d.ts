/* eslint-disable @typescript-eslint/no-explicit-any */
export type Author = {
  _type: 'author';
  _id: string;
  name: string;
  slug: { current: string };
  image: SanityImage;
  bio: Block[];
};

export type Category = {
  _type: 'category';
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
};

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Blog extends Base {
  author: Author;
  body1: Block[];
  body2: Block[];
  categories: Category[];
  titleImage: Image;
  midImage: Image;
  readTime: number;
  slug: Slug;
  title: string;
  subTitle: string;
  readTime: string;
  excerpt: string;
  intro: string;
  conclusion: string;
  videoLink: string;
  hasEmbeddedVideo: boolean;
  hasEmbeddedTweet: boolean;
  comments: Comment[];
  publishedAt: string;
}

interface Image {
  _type: 'image';
  asset: Reference;
  height: number;
  width: number;
  alt: string;
}

interface BlurredImages {
  id: string;
  width: number;
  height: number;
  url: string;
  src: [
    {
      large: string;
    },
  ];
  photos: Image[];
  alt: string;
  blurDataURL: string;
}

interface Reference {
  _ref: string;
  _type: 'reference';
  alt: string;
}

interface Slug {
  _type: 'slug';
  current: string;
}

interface Block {
  _key: string;
  _type: 'block';
  children: Span[];
  markDefs: any[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}

interface Span {
  _key: string;
  _type: 'span';
  marks: string[];
  text: string;
}

interface Category extends Base {
  keywords: string;
  description: string;
  title: string;
}

interface MainImage {
  _type: 'string';
  asset: Reference;
}

interface Title {
  _type: 'string';
  current: string;
}