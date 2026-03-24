export type Project = {
  title: string;
  description: string;
  tech: string[];
  year: string;
  author: string;
};

export const projects: Project[] = [
  {
    title: "EcoShop",
    description: "Application mobile pour scanner des produits et favoriser des achats durables.",
    tech: ["React", "Node.js", "OpenFoodFacts"],
    year: "2026",
    author: "Oussama El Mouekken",
  },
  {
    title: "GestionRH",
    description: "Application Java pour gérer les employés et leurs congés dans une PME.",
    tech: ["Java", "Swing", "MySQL"],
    year: "2025",
    author: "Oussama El Mouekken",
  },
  {
    title: "Portfolio Full Stack",
    description: "Portfolio personnel développé avec React en front-end et Java Spring Boot en back-end.",
    tech: ["Java", "Spring Boot", "React", "TypeScript"],
    year: "2026",
    author: "Oussama El Mouekken",
  },
];