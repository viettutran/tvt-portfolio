import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Viet",
  lastName: "Tu",
  name: `Viet Tu`,
  role: "Multimedia",
  avatar: "/images/avatar.jpg",
  email: "example@gmail.com",
  location: "Asia/Ho_Chi_Minh", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home1.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hello, my name is Viet Tu</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Viet Tu</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I’m 25 years old, {" "}
      and I currently work in Multimedia.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        "With over three years of experience as a graphic designer and video editor,
        my passion for this field has driven me to continuously learn and enhance
        my multimedia skills."
      </>
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "BRONTOBYTE",
        timeframe: "August 2022 – September 2023",
        role: "/Editor-FullTime/",
        achievements: [
          <>
            Designed visuals, printed materials, and multi-platform promotional videos on topics
            such as robotics and programming, helping increase engagement and achieve multiple
            videos with over 1 million views.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "MM KOREA",
        timeframe: "September 2023 – December 2024",
        role: "/Editor remote/",
        achievements: [
          <>
            Designed multimedia content, including product images, standees, backdrops, event
            award presentations, and multi-platform videos featuring products from Korea.
          </>,
        ],
        images: [],
      },
      {
        company: "MH AUTHENTIC",
        timeframe: "September 2023 – August 2025",
        role: "/Editor Fulltime/",
        achievements: [
          <>
            Designed multimedia content, including images, broadcast materials, printed publications,
            landing pages, and multi-platform promotional videos focused on cosmetics and beauty for
            the brands Luminous and Dr.Nara.
          </>,
        ],
        images: [],
      },
      {
        company: "FDR/FREDO SRUDIO",
        timeframe: "May 2024 – March 2025",
        role: "/Editor Remote/",
        achievements: [
          <>
            Designed visuals, printed T-shirts, and multi-platform promotional videos focused
            on youth fashion managed product listings on Facebook, Shopee, and TikTok.
          </>,
          <>
            Managed product listings on Facebook, Shopee, and TikTok.
          </>,
        ],
        images: [],
      },
      {
        company: "HENIE WEDDING",
        timeframe: "December 2023 – March 2025",
        role: "/Editor and Design Team Lead/",
        
        achievements: [
          <>
            Designed multimedia content, including images, landing pages, and promotional videos
            for a wedding photography studio.
          </>,
          <>
            Oversaw contract content.
          </>,
          <>
            Controlled output quality (received files, detailed Photoshop color demos, and print materials).
            Evaluated the work performance of Photoshop team members.
          </>,
        ],
        images: [],
      },
      {
        company: "FREELANCER",
        timeframe: "June 2021 – currently",
        role: "/Graphic Designer-Viden Edtior/",
        achievements: [
          <>
            Filmed, edited videos, and created motion graphics for the channels 'Natural English'
            and 'Vàng Son Lộng Lẫy.
          </>,
          <>
            Photographed and edited product images and menus; produced promotional videos for the
            Japanese restaurant 'Mikeson Izakaza Hanoi.Managed product listings on Facebook, Shopee,
            and TikTok.
          </>,
          <>
            Designed logos, banners, posters, thumbnails, packaging, business cards, and produced
            client-requested videos.
          </>,
          <>
            Developed sales landing pages and created corporate brochures.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Transport Technology - /Aug 2019 – Dec 2023/",
        description: <>- Bachelor of Information Technology Engineering
        - GPA: 3.3 / 4.0</>,
      },
      {
        name: "Hanoi Transport Vocational College",
        description: <>- Applied Information Technology
        - GPA: 3.5 / 4.0</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Professional Skills",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
          {
            name: "Premiere",
            icon: "premiere",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Soft Skills",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },  
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
