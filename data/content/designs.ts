type Design = {
  label: string,
  img: string,
  link: string
}

export const designs: Design[] = [
  {
    label: "Mobile Shopping App",
    img: "/static/designs/mobile-shopping-app.jpg",
    link: "https://dribbble.com/shots/9458498-Mobile-Shopping-App",
  },
  {
    label: "Modern App Design",
    img: "/static/designs/modern-app-design.png",
    link: "https://dribbble.com/shots/15485626-Modern-App-Design",
  },
  {
    label: "Landing Pages for Startups - Concept",
    img: "/static/designs/startup-landing-pages.png",
    link: "https://dribbble.com/shots/15485635-Landing-Pages-for-Startups-Concept",
  },
  {
    label: "Luxury, Blue Portfolio",
    img: "/static/designs/luxury-blue-portfolio.png",
    link: "https://dribbble.com/shots/15165547-Luxury-Blue-Portfolio",
  },
  {
    label: "Mobile Deal Page",
    img: "/static/designs/mobile-deal-page.jpg",
    link: "https://dribbble.com/shots/9462248-Mobile-Deal-Page",
  },
  {
    label: "Neon Signatures",
    img: "/static/designs/neon-signatures.jpeg",
    link: "https://dribbble.com/shots/11134809-Neon-Signatures",
  },
  {
    label: "The Dentista - Logo Design",
    img: "/static/designs/the-dentista-logo.png",
    link: "https://dribbble.com/shots/14571857-The-Dentista-Logo-Design",
  },
  {
    label: "iPhone Wallpapers",
    img: "/static/designs/iphone-wallpapers.png",
    link: "https://dribbble.com/shots/14077089-Free-iPhone-Wallpapers",
  },
];

const steps = [
  {
    title: "ACHIEVEMENTS ROADMAP",
    description:
      "First off, thank you for being a part of the community. We are excited to se how much organic growth and engagement the community here is experiencing. Here are some community stats and updates:",
    content: [
      {
        title: "COMMUNITY GOALS:",
        subtitles: [
          "Discord Members: 20,000+",
          "Twitter Followers: 20,000+",
          "10 new Moderators Hired Full Time",
          "3,000 WL Raffle Signups",
        ],
      },
      {
        title: "PROJECTED GROWTH:",
        subtitles: [
          "2,519.8% Q3 of 2022",
          "2,000 Weekly Communicators",
          "17.10% new weekly member retention",
          "10,500+ Twitter followers (zero ads)",
        ],
      },
    ],
  },
  {
    title: "CURRENT EVENTS",
    description:
      "We're excited announce successful strategic partnerships and influencers we've onboarded:",
    content: [
      {
        title: "INFLUENCER NEWS & PARTNERS:",
        subtitles: [
          "FLWR Partnership Launchpad",
          "HolyVerse advisory",
          "Skullbots advisory",
          "Sol Flowers advisory",
          "Cyber Pharmacy advisory",
          "Shadowy Super Coder advisory",
        ],
      },
    ],
  },
  {
    title: "FUTURE UPDATES",
    description:
      "As we continue to grow, our goal is to keep you guys updated with all relevant details and up coming roadmap achievements:",
    content: [
      {
        title: "MINT UPDATES:",
        subtitles: [
          "Whitelist Raffles begin early June",
          "Founder speaks at major AMA and Twitter spaces with partners",
          "Mint date is TBD. All the technology is ready.",
          "New strategic promotion announcement",
          "A tier influencer partnership campaigns deployed",
          "Game theory rules & deflationary mechanics revealed to the public",
        ],
      },
    ],
  },
];

export default steps;
