const Title = ({ labelOne, labelTwo }) => {
  return (
    <div className="relative font-PlaypenSans mb-8 mt-2">
      <h1 className="text-6xl lg:text-[110px] text-center text-white/[.07] uppercase font-extrabold tracking-wider">
        {labelOne}
      </h1>
      <h2 className="w-full text-center text-4xl lg:text-6xl uppercase font-extrabold text-emerald-500 dark:text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {labelTwo}
      </h2>
    </div>
  );
};

export default Title;
