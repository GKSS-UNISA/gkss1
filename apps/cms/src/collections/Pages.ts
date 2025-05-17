import type { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  slug: "slug",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "layouts",
      label: "Layouts",
      type: "blocks",
      blocks: [],
    },
  ],
};
