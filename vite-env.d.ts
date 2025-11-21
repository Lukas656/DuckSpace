/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly MONGODB_URI: string;
  readonly MONGO_DB_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
