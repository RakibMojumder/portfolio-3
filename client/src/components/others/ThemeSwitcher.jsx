import { useTheme } from "../../provider/ThemeProvider";

const ThemeSwitcher = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="pl-10 flex items-center gap-5 mt-3 cursor-pointer"
    >
      <div
        className={`h-6 w-9 p-1 bg-emerald-500 dark:bg-white/20 rounded-full`}
      >
        <div
          className={`h-full w-full rounded-full relative after:transition-all after:duration-300 after:absolute after:top-0 after:h-full after:w-4 after:bg-white after:rounded-full ${
            theme ? "after:left-3" : "after:left-0"
          }`}
        ></div>
      </div>
      <span className="text-white sm:text-neutral-400 sm:dark:text-neutral-500">
        Dark
      </span>
    </button>
  );
};

export default ThemeSwitcher;
