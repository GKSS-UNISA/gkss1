import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { uploadthingStorage } from "@payloadcms/storage-uploadthing";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import path from "path";
import sharp from "sharp";

import { Users, Media, Pages } from "@/collections";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

console.log(process.env.NODE_ENV);

export default buildConfig({
  admin: {
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
  ],
});
