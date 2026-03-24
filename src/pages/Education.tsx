import { education } from "@/data/education";

function fmt(s?: string) {
  if (!s || s === "Présent") return "Présent";
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function EducationPage() {
  return (
    <section className="grid gap-6">
      <h2 className="text-2xl font-semibold">Formations</h2>
      <ol className="relative border-l border-gray-200">
        {" "}
        {/* border-left classique */}
        {education.map((e) => (
          <li key={e.school + e.start} className="ml-6 pb-6">
            {" "}
            {/* ml-6 au lieu de ms-6 */}
            <h3 className="font-semibold">
              {e.degree}
              {e.field ? ` — ${e.field}` : ""} @ {e.school}
            </h3>
            <p className="text-sm text-muted-foreground">
              {fmt(e.start)} — {fmt(e.end)}{" "}
              {e.location ? `• ${e.location}` : ""}{" "}
              {e.gpa ? `• GPA ${e.gpa}` : ""}
            </p>
            {e.courses?.length ? (
              <p className="mt-2 text-sm">
                Cours: {e.courses.slice(0, 5).join(", ")}
              </p>
            ) : null}
            {e.highlights?.length ? (
              <ul className="list-disc ml-5 mt-2 text-sm">
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
