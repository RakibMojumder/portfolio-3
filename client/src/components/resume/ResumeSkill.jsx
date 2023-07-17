const ResumeSkill = () => {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-normal bg-purple-200/10 pl-3 py-1 rounded-md text-emerald-100 dark:text-purple-200">
        Skill & Technology
      </h2>
      <ul className="list-disc px-4 mt-4 space-y-2">
        <li className="text-neutral-300 text-sm">
          <span className="text-neutral-100 font-semibold">Expert : </span>HTML
          | CSS | Tailwind CSS | Bootstrap | JavaScript | React JS | React
          Router | Firebase
        </li>
        <li className="text-neutral-300 text-sm">
          <span className="text-neutral-100 font-semibold">Comfortable : </span>
          Next JS | Node JS | Express JS | MongoDB | Redux (Toolkit) | JWT
        </li>
        <li className="text-neutral-300 text-sm">
          <span className="text-neutral-100 font-semibold">Familiar : </span>
          TypeScript | Material UI | Socket IO
        </li>
        <li className="text-neutral-300 text-sm">
          <span className="text-neutral-100 font-semibold">Tools : </span>
          Git | Github | Netlify | Vercel | VS Code | Dev Tools | NPM | Figma
        </li>
      </ul>
    </div>
  );
};

export default ResumeSkill;
