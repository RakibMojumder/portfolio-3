import { projects } from "../../utils/data";

const ResumeProject = () => {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-normal bg-purple-200/10 pl-3 py-1 rounded-md text-secondary dark:text-purple-200">
        Projects
      </h2>

      <ol className="mt-4">
        {projects.map((project) => (
          <li
            key={project.id}
            className="text-neutral-300 text-sm py-4 border-b border-slate-700 first-of-type:pt-0 last-of-type:border-none last-of-type:pb-0"
          >
            {/* TITLE */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <p>
                <span className="text-neutral-100 font-semibold text-lg">
                  {project.name}
                </span>{" "}
                {project.description}
              </p>
              <div className="font-bold self-center md:self-start">
                {project.sourceCode.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    className="underline px-3 border-r last-of-type:pr-0 last-of-type:border-none"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            {/* FEATURES */}
            <ul className="list-disc pl-8">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            {/* TECHNOLOGY */}
            <p className="text-neutral-300 text-sm mt-2">
              <span className="text-neutral-100 font-semibold self-center md:self-start">
                {project.technology.title} :{" "}
              </span>
              {project.technology.tech}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ResumeProject;
