const SectionItem = ({ href, label, icon: Icon, setPath, activeSection }) => {
  const handleScroll = (e) => {
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const ref = e.currentTarget.href;
    const targetId = ref.replace(/.*#/, "");

    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    setTimeout(() => {
      elem?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 1);
  };

  return (
    <a
      href={`#${href}`}
      onClick={handleScroll}
      className={`flex items-center gap-5 pl-10 ${
        activeSection == href
          ? "text-neutral-100"
          : "text-neutral-400 dark:text-neutral-500"
      }`}
    >
      <span
        className={`h-7 w-7 flex justify-center items-center rounded-lg transition-all duration-300 ${
          activeSection === href
            ? "bg-emerald-500 dark:bg-primary"
            : "bg-white/10"
        }`}
      >
        <Icon size={18} />
      </span>
      <span>{label}</span>
    </a>
  );
};
export default SectionItem;
