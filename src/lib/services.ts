import webDev from "@/assets/services/01-web-development.jpg.asset.json";
import softwareDev from "@/assets/services/02-software-development.jpg.asset.json";
import uiux from "@/assets/services/03-uiux-design.jpg.asset.json";
import mobileApp from "@/assets/services/04-mobile-app-development.jpg.asset.json";
import ecommerce from "@/assets/services/05-ecommerce.jpg.asset.json";
import aiAutomation from "@/assets/services/06-ai-automation.jpg.asset.json";
import cloud from "@/assets/services/07-cloud-deployment.jpg.asset.json";
import customSolutions from "@/assets/services/08-custom-solutions.jpg.asset.json";
import dataAnalytics from "@/assets/services/09-data-analytics.jpg.asset.json";
import socialMedia from "@/assets/services/10-social-media-management.jpg.asset.json";

export interface Service {
  id: string;
  index: string;
  tag: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: "web-development",
    index: "01",
    tag: "Core Service",
    title: "Web Development",
    description:
      "Responsive websites, corporate platforms, portals and high-performance web applications.",
    features: [
      "Enterprise corporate portals & web apps",
      "Next.js / React high-performance SPA & SSR",
      "SEO-optimized semantic architecture",
      "Micro-frontend & headless CMS integration",
    ],
    image: webDev.url,
  },
  {
    id: "software-development",
    index: "02",
    tag: "Enterprise",
    title: "Software Development",
    description:
      "Custom software systems designed around specific business workflows and operational requirements.",
    features: [
      "Custom workflow & ERP platforms",
      "Robust REST & GraphQL API architecture",
      "Role-based access control (RBAC)",
      "High-volume data processing engines",
    ],
    image: softwareDev.url,
  },
  {
    id: "uiux-design",
    index: "03",
    tag: "Creative & UI",
    title: "UI/UX Design",
    description:
      "Research-driven interfaces, wireframes, prototypes and design systems focused on usability.",
    features: [
      "Comprehensive design systems & tokens",
      "Interactive high-fidelity prototypes",
      "User journey & usability research",
      "Accessibility (WCAG 2.1 AA) compliance",
    ],
    image: uiux.url,
  },
  {
    id: "mobile-app-development",
    index: "04",
    tag: "Mobile",
    title: "Mobile App Development",
    description:
      "Native-quality mobile experiences for iOS and Android, built from a single modern codebase.",
    features: [
      "Cross-platform React Native apps",
      "Offline-first data synchronization",
      "Push notifications & deep linking",
      "App store deployment & maintenance",
    ],
    image: mobileApp.url,
  },
  {
    id: "ecommerce",
    index: "05",
    tag: "Commerce",
    title: "E-Commerce",
    description:
      "Conversion-optimized digital storefronts and marketplace engines with automated order processing.",
    features: [
      "Multi-tier checkout flows",
      "Inventory synchronization",
      "Secure payment gateway integration",
      "Automated marketing webhooks",
    ],
    image: ecommerce.url,
  },
  {
    id: "ai-automation",
    index: "06",
    tag: "Intelligence",
    title: "AI & Automation",
    description:
      "Domain-specific AI assistants and workflow automation that remove repetitive operational work.",
    features: [
      "Conversational AI trained on your docs",
      "Document processing & extraction",
      "Workflow automation pipelines",
      "Human-in-the-loop review systems",
    ],
    image: aiAutomation.url,
  },
  {
    id: "cloud-deployment",
    index: "07",
    tag: "Infrastructure",
    title: "Cloud & Deployment",
    description:
      "Resilient cloud architectures, CI/CD pipelines and managed deployments that stay up.",
    features: [
      "Cloud-native architecture design",
      "Automated CI/CD pipelines",
      "Monitoring, logging & alerting",
      "Cost-optimized scaling strategies",
    ],
    image: cloud.url,
  },
  {
    id: "custom-solutions",
    index: "08",
    tag: "Bespoke",
    title: "Custom Solutions",
    description:
      "Specialized software architectures built precisely to solve proprietary operational challenges.",
    features: [
      "Custom microservices",
      "Audited data compliance",
      "Automated report generators",
      "Legacy system modernization",
    ],
    image: customSolutions.url,
  },
  {
    id: "data-analytics",
    index: "09",
    tag: "Service",
    title: "Data Analytics",
    description:
      "Business intelligence, predictive modeling, data visualization, and comprehensive data strategy.",
    features: [
      "Interactive data visualization dashboards",
      "Predictive analytics & forecasting",
      "Data warehousing & ETL pipelines",
      "Business intelligence (BI) integration",
    ],
    image: dataAnalytics.url,
  },
  {
    id: "social-media-management",
    index: "10",
    tag: "Service",
    title: "Social Media Management",
    description:
      "Comprehensive social media strategy, content creation, and community engagement.",
    features: [
      "Targeted content strategy & creation",
      "Community engagement & moderation",
      "Paid ad campaign management",
      "Performance analytics & reporting",
    ],
    image: socialMedia.url,
  },
];
