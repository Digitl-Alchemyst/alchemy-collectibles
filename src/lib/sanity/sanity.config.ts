"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {
  apiVersion,
  dataset,
  projectId,
  studioUrl,
  title,
} from "@/lib/sanity/env";
import { schema } from "@/models/schema";
import { structure } from "@/lib/sanity/lib/structure";
// import Logo from "@/c/studio/Logo";
// import StudioNavbar from "@/c/studio/StudioNavbar";

export default defineConfig({
  projectId,
  dataset,
  basePath: studioUrl,
  name: "CMS_Studio",
  title,
  schema,
  apiVersion,
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  // studio: {
  //   components: {
  //     logo: Logo,
  //     navbar: StudioNavbar,
  //   },
  // },
});
