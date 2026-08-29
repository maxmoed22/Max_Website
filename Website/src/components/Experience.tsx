import { education, experience } from "@/data/site";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-8 font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-[0.3em] text-glow-cyan">
        Experience
      </h2>

      <ol className="flex flex-col">
        {experience.map((item, i) => {
          const periodColors = [
            "text-neon-cyan",
            "text-neon-pink",
            "text-neon-yellow",
          ];
          return (
            <li
              key={i}
              className="grid grid-cols-1 gap-2 border-t border-matrix-green/15 py-8 first:border-t-0 sm:grid-cols-[160px_1fr]"
            >
              <span className={`text-base uppercase tracking-wider sm:text-lg ${periodColors[i % periodColors.length]}`}>
                {item.period}
              </span>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold uppercase tracking-wide text-matrix-green">
                  {item.role} · <span className="font-normal text-foreground/70">{item.company}</span>
                </h3>
                {
                  (() => {
                    const desc = item.description;
                    const bulletItems = typeof desc === "string"
                      ? desc
                          .split(/\r?\n/)
                          .map((line) => line.trim())
                          .filter((line) => line.startsWith("-"))
                          .map((line) => line.replace(/^-\s*/, "").trim())
                          .filter(Boolean)
                      : [];

                    if (bulletItems.length > 0) {
                      return (
                        <ul className="mt-2 max-w-2xl list-disc space-y-3 pl-6 text-foreground/60">
                          {bulletItems.map((b, idx) => (
                            <li key={idx} className="leading-relaxed">
                              {b}
                            </li>
                          ))}
                        </ul>
                      );
                    }

                    return (
                      <p className="mt-2 max-w-2xl text-foreground/60">
                        {desc}
                      </p>
                    );
                  })()
                }
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-16">
        <h3 className="mb-8 font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-[0.3em] text-glow-cyan">
          Education
        </h3>

        <ol className="flex flex-col">
          {education.map((item, i) => {
            const periodColors = [
              "text-neon-cyan",
              "text-neon-pink",
              "text-neon-yellow",
            ];
            return (
              <li
                key={`${item.school}-${item.degree}`}
                className="grid grid-cols-1 gap-2 border-t border-matrix-green/15 py-8 first:border-t-0 sm:grid-cols-[160px_1fr]"
              >
                <span className={`text-base uppercase tracking-wider sm:text-lg ${periodColors[i % periodColors.length]}`}>
                  {item.period}
                </span>
                <div>
                  <h4 className="font-[family-name:var(--font-heading)] text-lg font-bold uppercase tracking-wide text-matrix-green">
                    {item.degree}
                    {item.field && <span className="font-normal text-foreground/70"> · {item.field}</span>}
                  </h4>
                  <p className="mt-2 max-w-2xl text-foreground/60">{item.school}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="rounded-none border border-matrix-green/15 bg-black/20 p-6">
          <h3 className="mb-4 font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-[0.3em] text-glow-cyan">
            Skills &amp; Expertise
          </h3>
          <ul className="space-y-2 text-sm leading-relaxed text-foreground/70">
            <li>Enterprise Architecture</li>
            <li>Business Architecture</li>
            <li>Enterprise &amp; Business Modeling</li>
            <li>Risk &amp; Security Analysis</li>
            <li>SAP Datasphere &amp; SAC</li>
            <li>Alteryx, Power BI, SQL, Databricks, Snowflake</li>
            <li>Azure, AWS, Python, Excel, Visio</li>
            <li>Digital Commerce, Strategy, Leadership</li>
            <li>Unify IRI, Circana, Salsify, Profitero, Walmart Luminate</li>
            <li>Jira, Confluence, Loop, GitHub, Figma</li>
          </ul>
        </div>

        <div className="rounded-none border border-matrix-green/15 bg-black/20 p-6">
          <h3 className="mb-4 font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-[0.3em] text-glow-cyan">
            Awards &amp; Certifications
          </h3>
          <ul className="space-y-3 text-sm leading-relaxed text-foreground/70">
            <li>
              <span className="font-semibold text-matrix-green">Awards:</span> Alteryx Customer Excellence Award - Business Impact, 2025
            </li>
            <li>
              <span className="font-semibold text-matrix-green">Certifications:</span> TOGAF Business Architecture Level 1, Alteryx Designer Core, Cyber Security and Forensics Foundations, Google Data Analytics 1 &amp; 2, Snowflake Gen AI Bootcamp, Lean Six Sigma Green Belt, Advanced SQL for Data Analytics, Azure AZ-900 Azure Fundamentals, Figma UI UX Design Essentials
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
