export type Education = {
  degree: string;
  field?: string;
  school: string;
  location?: string;
  start: string;
  end?: string;
  courses?: string[];
  highlights?: string[];
  gpa?: string;
};

export const education: Education[] = [
  {
    degree: "Licence — Systèmes Informatiques Répartis (SIR)",
    school: "Faculté des Sciences et Techniques de Marrakech",
    location: "Marrakech",
    start: "2025-09",
    end: "Présent",
    courses: [
      "Développement d’applications Web Full Stack",
      "Gestion des systèmes Linux et administration serveur",
      "Conception et architecture des systèmes distribués",
      "Bases de données distribuées et optimisation",
      "Programmation orientée objet en Java et interfaces graphiques",
    ],
    highlights: [
      "Réalisation de projets intégrant Laravel, React, Node.js et Spring Boot",
      "Création d’une application Java Swing avec packaging Inno Setup",
      "Simulation et modélisation de réseaux avec Cisco Packet Tracer",
    ],
  },
  {
    degree: "DEUST — Informatique",
    school: "Faculté des Sciences et Techniques de Marrakech",
    location: "Marrakech",
    start: "2022-09",
    end: "2025-06",
    courses: [
      "Algorithmique et résolution de problèmes",
      "Programmation en langage C",
      "Structures de données avancées avec C",
    ],
    highlights: [
      "Projets pratiques de programmation orientée C",
      "Approfondissement des concepts de structures et algorithmes",
    ],
  },
];