import facebook from "../../assets/social-icons/facebook.png";
import twitter from "../../assets/social-icons/twitter.png";
import whatsapp from "../../assets/social-icons/whatsapp.png";
import linkedin from "../../assets/social-icons/linkedin.png";
import instagram from "../../assets/social-icons/instagram.png";
import github from "../../assets/social-icons/github.png";

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-5 mt-8 pb-14 md:pb-0">
      <a
        href="https://www.facebook.com/profile.php?id=100078261521721"
        target="_blank"
        rel="noreferrer"
      >
        <img src={facebook} alt="" height={27} width={27} />
      </a>
      <a
        href="https://www.instagram.com/sujonahmed45a4/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagram} alt="" height={27} width={27} />
      </a>
      <a
        href="https://twitter.com/RakibMojumder9"
        target="_blank"
        rel="noreferrer"
      >
        <img src={twitter} alt="" height={27} width={27} />
      </a>
      <a href="https://wa.me/8801829218489" target="_blank" rel="noreferrer">
        <img src={whatsapp} alt="" height={27} width={27} />
      </a>
      <a
        href="https://www.linkedin.com/in/rakib-ahmed4554/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="" height={27} width={27} />
      </a>
      <a
        className="bg-white rounded-full"
        href="https://github.com/RakibMojumder"
        target="_blank"
        rel="noreferrer"
      >
        <img src={github} alt="" height={27} width={27} />
      </a>
    </div>
  );
}; 

export default SocialLinks;
