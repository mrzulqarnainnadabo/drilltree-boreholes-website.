export type Project = {
  title: string;
  location: string;
  type: string;
  scope: string;
  photos: { src: string; alt: string }[];
  outcome?: string;
};

/** Only add entries that the business owner has verified and approved for publication. */
export const projects: Project[] = [];
