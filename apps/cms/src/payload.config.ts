import { uploadthingStorage } from "@payloadcms/storage-uploadthing";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import path from "path";
import sharp from "sharp";

import { Users, Media } from "@/collections";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET as string,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  // database-adapter-config-start
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI as string,
    },
  }),
  // database-adapter-config-end
  sharp,
  plugins: [
    uploadthingStorage({
      clientUploads: true,
      collections: {
        media: true,
      },
      options: {
        token: process.env.UPLOADTHING_TOKEN,
      },
    }),
  ],
});
