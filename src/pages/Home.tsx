import { profile } from "@/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <section className="grid gap-6 md:grid-cols-2 items-center">
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta
          name="description"
          content="Portfolio : IA, SIG, DevSecOps, Android."
        />
      </Helmet>

      <div>
        <h1 className="text-4xl md:text-5xl font-bold">{profile.name}</h1>

        <p className="mt-2 text-xl">{profile.role}</p>

        <p className="mt-4 text-muted-foreground">{profile.about}</p>

        <div className="mt-6 flex gap-3">
          <Link to="/projects" className="underline">
            Voir les projets
          </Link>
          <Link to="/contact" className="underline">
            Contact
          </Link>
        </div>

        <div
          className="mt-6 flex flex-wrap gap-2 text-sm"
          aria-label="badges de parcours"
        >
          Master IA (2025) AWS SAA
        </div>
      </div>

      <div
        className="aspect-square rounded-2xl border"
        role="img"
        aria-label="illustration de profil"
      />
    </section>
  );
}
