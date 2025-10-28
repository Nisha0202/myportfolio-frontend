// src/app/about/page.tsx

import React from "react";

const skills = [
  // Frontend
  "React", "Next.js", "TypeScript", "Redux", "Tailwind CSS",
  // Backend
  "Node.js", "Express.js", "REST APIs", "GraphQL",
  // Databases
  "PostgreSQL", "MongoDB", "MySQL", "Redis",
  // DevOps & Tools
  "Git", "Docker", "AWS", "CI/CD",
];

// Skill pill component
const SkillPill: React.FC<{ skill: string }> = ({ skill }) => (
  <span className="inline-block px-3 py-1.5 text-xs font-medium bg-zinc-300 rounded-full">
    {skill}
  </span>
);

// ✅ Use an async server component for static data (App Router style SSG)
export default async function AboutMe() {
  // Static data (this will be **statically generated at build time**)
  const staticData = {
    name: "Alex Chen",
    email: "alexchen@example.com",
    phone: "+1 234 567 890",
    bio: "I'm Alex Chen, a results-oriented Software Developer from San Francisco with 5 years of full-stack experience specializing in building scalable web applications using React, Node.js, and cloud technologies.",
  };

  const { name, email, phone, bio } = staticData;

  return (
    <section
      id="about"
      className="bg-transparent px-4 h-full flex py-12 sm:pt-14 justify-center"
    >
      <div className="max-w-5xl w-full">
        <div
          className="rounded-lg bg-linear-to-r 
                     from-zinc-400 via-green-600 to-lime-700 
                     p-1 shadow-xl transition-all duration-300"
        >
          <div className="rounded-md bg-zinc-200 p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col justify-center">
              <h2 className="text-xl font-bold mb-4 text-gray-800">About Me</h2>

              {/* Static bio */}
              <p className="text-sm leading-relaxed mb-8 text-gray-700">{bio}</p>

              {/* Personal details */}
              <div className="mb-8 text-sm text-gray-700 space-y-1">
                <p><span className="font-semibold">Name:</span> {name}</p>
                <p><span className="font-semibold">Email:</span> {email}</p>
                <p><span className="font-semibold">Phone:</span> {phone}</p>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">My Journey</h3>
              <p className="text-sm leading-relaxed mb-8 text-gray-700">
                At TechSolutions Inc., I helped maintain an e-commerce platform
                for over 1 million users and led a migration to GraphQL, slashing
                data-fetching times by 40%. At DataLogix Corp., I built
                client-facing analytics dashboards with React and D3.js and
                resolved over 100 bug tickets.
              </p>

              <h3 className="text-xl font-bold mb-4">My Tech Stack</h3>
              <div className="flex flex-wrap gap-2 mb-8 text-gray-700">
                {skills.map((skill) => (
                  <SkillPill key={skill} skill={skill} />
                ))}
              </div>

              <h3 className="text-xl font-bold mb-3">Projects & Education</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                I hold a B.S. in Computer Science from UT Austin. In my spare
                time, I build projects like{" "}
                <a
                  href="https://github.com/alexchen/zentask"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                >
                  ZenTask
                </a>{" "}
                (a Next.js task manager) and{" "}
                <a
                  href="https://github.com/alexchen/algoviz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                >
                  AlgoVisualizer
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
