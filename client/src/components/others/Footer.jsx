import bmcImage from "../../assets/bmc-button.png";

const Footer = () => {
  return (
    <div className="my-10">
      <p className="text-neutral-400 text-sm tracking-widest text-center">
        <span className="text-xl">©</span> All Rights Reserved -{" "}
        {new Date().getFullYear()}.
      </p>
      <p className="text-neutral-400 text-sm tracking-widest text-center">
        Design & Developed by{" "}
        <span className="text-secondary dark:text-primary mx-1">
          Rakib Ahmed
        </span>
      </p>

      <div className="mt-3 flex justify-center">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.buymeacoffee.com/rakib4554"
        >
          <img src={bmcImage} alt="" className="h-12" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
