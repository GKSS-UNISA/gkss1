import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { uploadthingStorage } from "@payloadcms/storage-uploadthing";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import path from "path";
import sharp from "sharp";

import { Users, Media, Pages } from "@/collections";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    meta: {
      title: "GKSS UNISA | Admin Panel",
      description: "GKSS UNISA Admin panel for managing the website content.",
      icons: [],
    },
    user: Users.slug,
    importMap: {
      importMapFile: path.resolve(dirname, "app", "admin", "importMap.js"),
    },
  },
  collections: [Users, Media, Pages],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET as string,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI as string,
    },
  }),
  sharp,
  plugins: [
    // Activate Uploadthing storage adapter only
    // in production
    ...(process.env.NODE_ENV === "production"
      ? [
          uploadthingStorage({
            collections: {
              media: true,
            },
            options: {
              token: process.env.UPLOADTHING_TOKEN,
              acl: "public-read",
            },
          }),
        ]
      : []),
    seoPlugin({
      tabbedUI: true,
      collections: ["pages"],
      uploadsCollection: "media",
      generateTitle: ({ doc }) => `GKSS UNISA | ${doc.title}`,
      generateDescription: ({ doc }) => doc.excerpt,
    }),
  ],
});
