import { profile } from "@/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-200px)] text-gray-900 dark:text-gray-100">
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta
          name="description"
          content="Portfolio : IA, SIG, DevSecOps, Android."
        />
      </Helmet>

      <div>
        <h1 className="text-4xl md:text-5xl font-bold">{profile.name}</h1>
        <p className="mt-2 text-xl font-medium">{profile.role}</p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">{profile.about}</p>

        <div className="mt-6 flex justify-center">
          <Link
            to="/projects"
            className="text-blue-600 hover:underline font-medium dark:text-blue-400"
          >
            Voir les projets
          </Link>
        </div>
      </div>
    </section>
  );
}