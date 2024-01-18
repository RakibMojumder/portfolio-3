import Lottie from "lottie-react";
import contact from "../../assets/lottie-icons/contact.json";
import contactOne from "../../assets/lottie-icons/contact-1.json";
import { motion as m } from "framer-motion";
import { useTheme } from "../../provider/ThemeProvider";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [logging, setLogging] = useState(false);
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLogging(true);

    const res = await axios.post(
      "https://portfolio-server-mocha-ten.vercel.app/login",
      {
        email,
        password,
      }
    );

    if (res?.data.success) {
      toast.success(res.data.message, {
        unstyled: true,
        classNames: {
          toast:
            "w-full px-2 py-3 rounded-md flex items-center justify-center gap-x-2.5",
        },
      });
      navigate("/");
    }

    if (!res?.data.success) {
      toast.error(res.data.message, {
        unstyled: true,
        classNames: {
          toast:
            "w-full px-2 py-3 rounded-md flex items-center justify-center gap-x-2.5",
        },
      });
    }
    setLogging(false);
  };

  return (
    <section id="contact" className="min-h-full sm:p-4 px-3 overflow-x-hidden">
      <div className="text-center font-inter my-12">
        <h4 className="text-neutral-100 text-xs">Welcome Back</h4>
        <h2 className="text-3xl uppercase text-secondary dark:text-primary">
          Login
        </h2>
      </div>
      <div className="grid grid-cols-12 items-center">
        <m.div
          initial={{ x: -150 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="col-span-6 hidden lg:block"
        >
          <Lottie animationData={theme ? contact : contactOne} />
        </m.div>
        <m.div
          initial={{ x: 150 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="col-span-12 lg:col-span-5 md:w-[70%] md:mx-auto lg:w-[85%]"
        >
          <form
            onSubmit={handleSubmit}
            className="w-full space-y-8 text-slate-200"
          >
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent py-1 pl-3 border-b border-neutral-800 dark:border-purple-200/10 focus:border-secondary dark:focus:border-primary text-sm rounded-sm focus:outline-none"
            />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent py-1 pl-3 border-b border-neutral-800 dark:border-purple-200/10 focus:border-secondary dark:focus:border-primary text-sm rounded-sm focus:outline-none"
            />

            <button
              type="submit"
              //   disabled={logging}
              className="w-full py-1 bg-secondary text-black dark:text-white dark:bg-primary rounded-sm transition-all duration-500  active:scale-[.85]"
            >
              {logging ? "Logging" : "Login"}
            </button>
          </form>
        </m.div>
      </div>
    </section>
  );
};

export default Login;
