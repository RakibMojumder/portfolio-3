const Language = () => {
  return (
    <div className="mt-10 text-neutral-300 text-sm">
      <h2 className="text-xl font-normal bg-purple-200/10 pl-3 py-1 rounded-md text-secondary dark:text-purple-200">
        Language
      </h2>
      <div className="flex gap-10 items-center mt-4">
        <p>
          <span className="font-semibold">Bangla</span> - Native
        </p>
        <p>
          <span className="font-semibold">English</span> - Comfortable
        </p>
        <p>
          <span className="font-semibold">Hindi</span> - Comfortable
        </p>
      </div>
    </div>
  );
};

export default Language;
