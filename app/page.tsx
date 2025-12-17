// app/page.tsx
import Image from "next/image";

type Feature = {
  title: string;
  description: string;
  accentColorClass: string;
  iconSrc: string;
  iconAlt: string;
};

const features: Feature[] = [
  {
    title: "Supervisor",
    description: "Monitors activity to identify project roadblocks.",
    accentColorClass: "border-cyan-400",
    iconSrc: "/images/icon-supervisor.svg",
    iconAlt: "Magnifying glass icon representing supervision",
  },
  {
    title: "Team Builder",
    description:
      "Scans our talent network to create the optimal team for your project.",
    accentColorClass: "border-red-400",
    iconSrc: "/images/icon-team-builder.svg",
    iconAlt: "House and people icon representing team building",
  },
  {
    title: "Karma",
    description: "Regularly evaluates our talent to ensure quality.",
    accentColorClass: "border-amber-400",
    iconSrc: "/images/icon-karma.svg",
    iconAlt: "Lightbulb icon representing karma and ideas",
  },
  {
    title: "Calculator",
    description:
      "Uses data from past projects to provide better delivery estimates.",
    accentColorClass: "border-sky-400",
    iconSrc: "/images/icon-calculator.svg",
    iconAlt: "Calculator icon representing data calculation",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-800 flex flex-col">
      <div className="flex-1 max-w-6xl mx-auto px-6 py-16">
        {/* Intro / heading */}
        <header className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm text-slate-500">
            Reliable, efficient delivery
          </p>

          <h1 className="mt-2 text-2xl md:text-4xl font-light text-slate-800">
            Powered by <span className="font-semibold">Technology</span>
          </h1>

          <p className="mt-4 text-sm md:text-base text-slate-500 leading-relaxed">
            Our Artificial Intelligence powered tools use millions of project data points
            to ensure that your project is successful.
          </p>
        </header>

        {/* Cards grid */}
        <section
          className="grid gap-6 md:gap-8 md:grid-cols-3 md:grid-rows-2"
          aria-label="Feature cards"
        >
          {/* Supervisor – left column, spans 2 rows */}
          <div className="md:row-span-2 md:self-center">
            <FeatureCard feature={features[0]} />
          </div>

          {/* Team Builder – top middle */}
          <div>
            <FeatureCard feature={features[1]} />
          </div>

          {/* Karma – bottom middle */}
          <div className="md:row-start-2 md:col-start-2">
            <FeatureCard feature={features[2]} />
          </div>

          {/* Calculator – right column, spans 2 rows */}
          <div className="md:row-span-2 md:self-center">
            <FeatureCard feature={features[3]} />
          </div>
        </section>
      </div>
    </main>
  );
}

type FeatureCardProps = {
  feature: Feature;
};

function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <article
      className={`bg-white rounded-xl shadow-lg p-6 md:p-8 border-t-4 ${feature.accentColorClass} flex flex-col gap-3`}
    >
      <h2 className="text-lg font-semibold text-slate-800">
        {feature.title}
      </h2>

      <p className="text-sm text-slate-500 leading-relaxed">
        {feature.description}
      </p>

      <div className="mt-4 flex justify-end">
        <Image
          src={feature.iconSrc}
          alt={feature.iconAlt}
          width={64}
          height={64}
          className="h-12 w-12"
        />
      </div>
    </article>
  );
}
