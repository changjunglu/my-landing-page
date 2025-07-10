/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STAGEWISE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
} 