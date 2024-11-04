import { type SchemaTypeDefinition } from "sanity";

import { blockContent } from "./blockContent";
import { blog } from "./blog";
import { author } from "./author";
import { blogCategory } from "./blogCategory";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, blogCategory, blog, author],
};
