import { useTheme } from "../../provider/ThemeProvider";

const ThemeSwitcher = ({ className }) => {
  const { toggleTheme, theme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center gap-5 cursor-pointer w-full ${className}`}
    >
      <div className={`h-6 w-9 p-1 bg-secondary dark:bg-white/20 rounded-full`}>
        <div
          className={`h-full w-full rounded-full relative after:transition-all after:duration-300 after:absolute after:top-0 after:h-full after:w-4 after:bg-black after:dark:bg-white after:rounded-full ${
            theme ? "after:left-0" : "after:left-3"
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
