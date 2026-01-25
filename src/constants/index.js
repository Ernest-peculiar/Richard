import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  governchain,
  nexusswap,
  bridgeflow,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Technical Writer",
    icon: web,
  },
  {
    title: "Ecosystem Manager",
    icon: mobile,
  },
  {
    title: "Governance Lead",
    icon: backend,
  },
  {
    title: "Community & Project Manager",
    icon: creator,
  },
];

const technologies = [
  
];

const experiences = [
  {
    title: "Technical Writer",
    company_name: "Ethereum Foundation",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Created comprehensive technical documentation for blockchain protocols and smart contracts.",
      "Collaborated with developers and researchers to produce educational content on Web3 technologies.",
      "Developed governance proposals and framework documentation for decentralized protocols.",
      "Reviewed and provided feedback on technical specifications and governance documents.",
    ],
  },
  {
    title: "Ecosystem Manager",
    company_name: "Polkadot",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Managed ecosystem growth and partnerships within the Polkadot network.",
      "Coordinated with multiple teams including developers, community managers, and stakeholders.",
      "Implemented strategies for ecosystem expansion and decentralized adoption.",
      "Participated in governance discussions and provided insights on ecosystem development.",
    ],
  },
  {
    title: "Governance Lead",
    company_name: "Aave",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Led governance initiatives and protocol improvement proposals (AIPs).",
      "Collaborated with core teams and community members to shape protocol direction.",
      "Implemented transparent governance frameworks and voting mechanisms.",
      "Participated in governance reviews and provided strategic recommendations.",
    ],
  },
  {
    title: "Community & Project Manager",
    company_name: "Snapshot",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Managing community engagement and building a thriving ecosystem of DAOs.",
      "Coordinating with multiple teams including developers, designers, and governance facilitators.",
      "Implementing community programs and supporting decentralized governance initiatives.",
      "Facilitating discussions and providing feedback on community-driven proposals.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Their governance framework revolutionized how our DAO operates. The transparency and efficiency they brought to our treasury management is unmatched in the Web3 space.",
    name: "Alex Vitalik",
    designation: "DAO Treasury Lead",
    company: "Protocol Collective",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Building with their ecosystem insights has been incredible. They truly understand the nuances of decentralized governance and helped us achieve true community-driven decision making.",
    name: "Jordan Chen",
    designation: "Protocol Architect",
    company: "DeFi Innovations",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Their Web3 expertise helped us tokenize governance efficiently. Our community participation increased by 3x and our token holders are more engaged than ever!",
    name: "Maya Satoshi",
    designation: "Community Manager",
    company: "NextGen DAO",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "GovernChain",
    description:
      "A decentralized governance platform that enables DAOs to manage treasury, create proposals, and execute governance decisions efficiently. Provides comprehensive tools for community voting and protocol administration across multiple blockchain networks.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "web3",
        color: "green-text-gradient",
      },
      {
        name: "governance",
        color: "pink-text-gradient",
      },
    ],
    image: governchain,
    
  },
  {
    name: "NexusSwap",
    description:
      "A decentralized exchange (DEX) platform enabling seamless token swaps, liquidity pooling, and yield farming. Built on smart contracts with advanced features for DeFi traders and liquidity providers seeking efficient asset exchange.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "smartcontracts",
        color: "green-text-gradient",
      },
      {
        name: "defi",
        color: "pink-text-gradient",
      },
    ],
    image: nexusswap,
    
  },
  {
    name: "BridgeFlow",
    description:
      "A cross-chain bridge protocol that facilitates seamless asset transfer and interoperability between multiple blockchains. Enables users to move tokens across different networks with enhanced security and reduced latency for Web3 ecosystem connectivity.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "chainlink",
        color: "green-text-gradient",
      },
      {
        name: "interoperability",
        color: "pink-text-gradient",
      },
    ],
    image: bridgeflow,
   
  },
];

export { services, technologies, experiences, testimonials, projects };
