const Footer = () => {
  return (
    <p className="text-neutral-400 text-sm tracking-widest text-center py-8 mt-10 sm:mt-0">
      <span className="text-xl">©</span> All Rights Reserved by
      <span className="text-secondary dark:text-primary mx-1">
        Rakib Ahmed -
      </span>
      {new Date().getFullYear()}.
    </p>
  );
};

export default Footer;
