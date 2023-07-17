import { useTheme } from "../../provider/ThemeProvider";

const ThemeSwitcher = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="pl-10 flex items-center gap-5 mt-3 cursor-pointer"
    >
      <div
        className={`px-[18px] py-2.5 dark:bg-emerald-500 bg-purple-500 rounded-full relative after:absolute after:top-0 after:h-full after:px-[10px] after:bg-white after:rounded-full ${
          theme ? "after:right-0" : "after:left-0"
        }`}
      ></div>
      <span className="text-white sm:text-neutral-400 sm:dark:text-neutral-500">
        Theme
      </span>
    </button>
  );
};

export default ThemeSwitcher;
