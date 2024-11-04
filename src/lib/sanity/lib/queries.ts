export const queryBlogList = `
  *[_type=='blog']  {
  
  } | order(_createdAt desc)
`;

export const queryBlogListByCategory = `
  *[_type == 'blog' && references(*[_type == 'category' && slug.current == $slug]._id)] {
  
  } | order(_createdAt desc)
`;

export const queryBlogPostBySlug = `
  *[_type == "blog" && slug.current == $slug][0] {
  
  }
`;

export const queryBlogCategories = `
  *[_type == 'blogCategory'] {
  
  }
`;
