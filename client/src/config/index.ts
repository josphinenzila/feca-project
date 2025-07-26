interface AppConfig {
  APP_NAME: string;
  APP_ENV: string;
  BACKEND_URL: string;
}

interface SeoConfig {
  title: string;
  description: string;
  keywords: string;
  openGraph: {
    type: string;
    locale: string;
    url: string;
    title: string;
    description: string;
    image: string;
    site_name: string;
    imageWidth: number;
    imageHeight: number;
  };
}

interface GtmConfig {
  containerId: string;
}

export const app: AppConfig = {
  APP_NAME: "Transmall",
  APP_ENV: process.env.NEXT_PUBLIC_APP_ENV! || "local",
  BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL!,
};

export const seo: SeoConfig = {
  title: "Transmall - Platform for Micro SMEs",
  description: "Launch your business in minutes",
  keywords: "SMes, business, micro",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: process.env.NEXT_PUBLIC_DOMAIN_URL!,
    title: "Transmall - Platform for Micro SMEs",
    description: "Launch your business in minutes",
    image: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/img/logo.svg`,
    site_name: "Transmall",
    imageWidth: 170,
    imageHeight: 75,
  },
};
