// Central place for editable content.
// Update this file to change the text/links shown across the site.

export const profile = {
  name: "Max Moed",
  fullName: "Max Moed",
  role: "Currently: Senior Developer at American Honda Motor Co.",
  tagline: "I design and build digital products and analytics solutions that drive insight and automation.",
  location: "Currently: Columbus, Ohio",
  email: "max.moed22@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/maxmoed22" },
    { label: "LinkedIn", href: "https://linkedin.com/in/max-moed" },
    { label: "Resume", href: "https://docs.google.com/document/d/1GrJjyy5xePvp3Sze7Aoy-qVsiZdzhEdi/edit?usp=sharing&ouid=100125776777914454085&rtpof=true&sd=true" },
  ],
};

export const about = {
  heading: "About",
  subheading: "Outside of Work",
  paragraphs: [
    "I’m a technology and analytics professional with a background in enterprise architecture, business architecture, data analytics, and digital innovation. I enjoy working at the intersection of technology and business—turning complex problems and data into practical solutions that make people’s work more efficient. I’m especially interested in emerging technologies, automation, data, and finding new ways to use technology to create meaningful business impact.",
    "When I’m not working, I love spending time with my friends, cooking, and staying active. I’m also really interested in building PCs and learning more about the hardware and technology that goes into them. One of my next hobbies I’m hoping to get into is 3D printing, especially as another way to combine technology, creativity, and hands-on projects. Lastly, I'm a big fan of video games, watching Gundam anime, and love building legos!",
  ],
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  image?: string; // path in /public, e.g. "/projects/example.png"
};

export const projects: Project[] = [
  {
    title: "Business Architecture Modeling Project: Tesla",
    description: "Enterprise modeling project focused on Tesla’s business, systems, and technology landscape.",
    tags: ["Business Architecture", "Enterprise Modeling"],
    href: "/projects/enterprise-modeling-tesla.pdf",
    image: "/projects/tesla-business-architecture-thumbnail.png",
  },
  {
    title: "Enterprise Architecture Modeling Project",
    description: "Final project exploring business architecture concepts, analysis, and design.",
    tags: ["Enterprise Architecture", "Enterprise Modeling"],
    href: "/projects/enterprise-modeling-final.pdf",
    image: "/projects/enterprise-architecture-modeling-thumbnail.png",
  },
  {
    title: "Figma Design Project",
    description: "UI and UX design project developed in Figma, covering the concept, design process, and final solution.",
    tags: ["UI/UX", "Figma"],
    href: "/projects/figma-project.pdf",
    image: "/projects/homepage-new.jpg",
  },
  {
    title: "Matrix Power BI Dashboard",
    description: "Power BI dashboard project built from structured business data to surface trends and support data-driven decisions.",
    tags: ["Power BI", "Data Analytics"],
    href: "https://docs.google.com/spreadsheets/d/1ZVfJwoobJyOANylzmHSCWzozOdlPDgfanUIxDboS5YY/edit?usp=sharing",
    image: "/projects/matrix-pbi.png",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Senior Developer",
    company: "American Honda Motor Co.",
    period: "April 2026 — Present",
    description: `- Techline Dashboard — Created wireframes, models, and dashboards in Qlik, Power BI, and AWS Redshift for the Techline team, helping identify warranty issues faster and saving 5–10 hours per week per user.
- Battery Dashboard — Created a GitHub repository, ETL pipeline, QVD generators, and a Qlik dashboard to surface “Golden Battery” candidates and potential problem dealerships, saving Honda thousands in false replacement battery warranty claims.
- BEAR Application — Leading UI/UX design for budgeting and expense reporting app (BEAR) full-stack app with Figma, Confluence, and VS Code using agile sprints and GitHub CI/CD across market quality and expense teams.`,
  },
  {
    role: "Dx Program Lead - Business Architect",
    company: "American Honda Motor Co.",
    period: "November 2025 — April 2026",
    description: `- Developed and implemented a new DX process so NAQC teams could submit requests for new solutions, increasing efficiency and enabling new technologies.
- Built backend automation for the DX process using Power Automate, Power Apps, Power BI, and GitHub to support agile project tracking.`,
  },
  {
    role: "Lead Analyst, OMNI & B2B Insights",
    company: "The Hershey Company",
    period: "October 2024 — October 2025",
    description: `- Developed and automated monthly digital performance reports for the Walmart OMNI team covering search, content, and ratings/reviews using Alteryx and Databricks, saving 5 hours per month.
- Led a competitive insights project and presented key findings to leadership, guiding strategic decisions and delivering 4% budget savings based on competitor practices.
- Built B2B sales reporting models in SAP Datasphere and dashboards in SAC to support data-driven decision-making and track transitions from email to web orders, driving a 10% sales increase on average per customer.
- Built an on-demand Power BI dashboard for Instacart, GoPuff, Uber, and DoorDash to drive insights and increase sales by 20%.
- Expanded the KPS dashboard using Python in Databricks and Power BI to improve product keyword targeting across retailers, helping paid media and SEO drive overall sales growth of more than 5%.`,
  },
  {
    role: "Analyst, Insights & Analytics",
    company: "The Hershey Company",
    period: "June 2023 — October 2024",
    description: `- Delivered the end-to-end automation of the CTT system using Alteryx, Axway Secure File Transfer, and Azure File Storage, Databricks, and designed the front-end in Power BI to enhance workflow efficiency and visibility. Increased efficiency by 10+ minutes per asset leading to over 2 million assets being touched per year.
- Designed and implemented the Content Comparison Audit Tool (Alteryx + Power BI) to align brand and content teams on preferred digital assets, improving customer experience and reducing content mismatches by over 85% on product PDPs on strategic retailers.`,
  },
  {
    role: "Digital Transparency Analyst",
    company: "The Hershey Company",
    period: "January 2023 — June 2023",
    description: `- Product Owner for the Content Transparency Tool—a proprietary workflow and front-end solution enabling real-time content syndication tracking. This tool directly contributed to doubling Hersheys online business to over $1B in 2025.
- Took over ownership of the SmartLabel process and led a cross-functional initiative involving Digital, ESG, IS, Regulatory, and Legal teams to transition ownership to an external partner, resulting in increased compliance and over 200% more product pages.`,
  },
  {
    role: "HR Data Analyst",
    company: "Paychex",
    period: "October 2020 - January 2023",
    description: `- Responsible for running reports in excel, HR software, and creating dashboards for payroll and taxes.`,
  },
  {
    role: "Data Analyst",
    company: "JM Family Enterprises",
    period: "June 2019 - March 2020",
    description: `- Prepared and processed data sets to produce valuable information in relation to data storage, cost analysis, and scaling Oracle usage in SQL and excel.`,
  },
];

export type EducationItem = {
  degree: string;
  field: string;
  school: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    degree: "Master's Degree",
    field: "Enterprise Architecture and Business Transformation",
    school: "Penn State World Campus",
    period: "August 2024 — December 2025",
  },
  {
    degree: "Bachelor's Degree",
    field: "Economics",
    school: "University of Wisconsin - Madison",
    period: "September 2016 — May 2020",
  },
  {
    degree: "ISSUES Certificate",
    field: "Integrated Studies in Science, Engineering, and Society",
    school: "University of Wisconsin - Madison",
    period: "September 2016 — May 2020",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
