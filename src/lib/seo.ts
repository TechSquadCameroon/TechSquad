export const SITE_URL =
  process.env.SITE_URL ||
  (typeof process !== 'undefined' && process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'https://techsquad.cam');

export function absolute(path: string) {
  if (!path) return SITE_URL;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${SITE_URL.replace(/\/$/, '')}${path.startsWith('/') ? path : `/${path}`}`;
}

export const SITE_NAME = 'TechSquad Cameroon';
export const DEFAULT_TITLE = 'TechSquad - Empowering Africa\'s Digital Future';
export const DEFAULT_DESCRIPTION =
  'TechSquad Cameroon builds web and software solutions, trains young digital talent, and prepares LaneForge to help students and youths discover the right career path.';
export const DEFAULT_KEYWORDS =
  'TechSquad, Cameroon, LaneForge, digital skills, software development, student tech, hackathon, web design, brand growth, career platform';
export const DEFAULT_OG_IMAGE = absolute('/demos/previews/laneforge-preview.svg');
export const TWITTER_HANDLE = '@TechSquadCam';

export function buildPageHead({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  const url = absolute(path);
  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'keywords', content: DEFAULT_KEYWORDS },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:image:alt', content: title },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: TWITTER_HANDLE },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      { name: 'twitter:image:alt', content: title },
    ],
    links: [{ rel: 'canonical', href: url }],
  };
}
