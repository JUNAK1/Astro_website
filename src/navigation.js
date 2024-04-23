import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      links: [
        {
          text: 'Quienes somos',
          href: getPermalink('/quienes-somos'),
        },
        {
          text: 'Que nos inspira',
          href: getPermalink('/que-nos-inspira'),
        },
        {
          text: 'Café del Huila',          
          href: getPermalink('/cafe-huila'),
        },
        {
          text: 'Beneficios del cafe',
          href: getPermalink('/beneficios-cafe'),
        },
       
        
       /* {
          text: 'Productos',
          href: getBlogPermalink(),
          //href: getPermalink('/homes/saas'),
        },
        {
          text: 'Video',
          href: getPermalink('/homes/startup'),
        },
        /*{
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/pre-launch-copy'),
        },*/
      ],
    },
   /* {
      text: 'Paginas',
      links: [
       /* {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },/*
       
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },*/
    {
      text: 'Productos',
      links: [
        {
          text: 'productos',
          href: getBlogPermalink(),
        },/*
        {
          text: 'Maquinas',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },*/
        /*{
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },*/
      ],
    },
    {
    
    },
  ],
  actions: [{ text: 'Comprar', href: 'https://articulo.mercadolibre.com.co/MCO-1415447013-cafe-bourbon-rosado-molido-_JM', target: '_blank' }],
};

export const footerData = {
  links: [
    
  ],
  secondaryLinks: [
    
    { text: 'Copyright © 2024 Café Makafe | Todos los derechos reservados'},
  ],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/JUNAK1/Astro_website' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/cafe_makafe/'},
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/' },
    //{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    //{ ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowin' },
  ],
};
