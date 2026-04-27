/// <reference types="astro/client" />

declare class PagefindUI {
  constructor(options: {
    element: string;
    showImages?: boolean;
    resetStyles?: boolean;
    translations?: Record<string, string>;
  });
}
