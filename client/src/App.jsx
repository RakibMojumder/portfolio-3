import Home from "./components/others/Home";
import ThemeProvider from "./provider/ThemeProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import OthersLayout from "./components/others/OthersLayout";
import Resume from "./components/section/Resume";
import Blog from "./components/section/Blog";
import ScrollToTop from "./utils/ScrollTop";

const client = new QueryClient();

function App() {
  // useEffect(() => {
  //   function handleContextMenu(e) {
  //     e.preventDefault(); // prevents the default right-click menu from appearing
  //   }
  //   // add the event listener to the component's root element
  //   const rootElement = document.getElementById("root");
  //   rootElement.addEventListener("contextmenu", handleContextMenu);

  //   // remove the event listener when the component is unmounted
  //   return () => {
  //     rootElement.removeEventListener("contextmenu", handleContextMenu);
  //   };
  // }, []);
  return (
    <main className="min-h-screen w-full bg-[#0D0D0D] sm:bg-black dark:bg-purple-gradient flex justify-center items-center">
      <div className="dark:bg-purple-200/[.07] bg-white/5 border dark:border-none border-secondary/10 sm:h-[90vh] sm:w-[90%] 2xl:w-[75%] 2xl:mx-auto rounded-xl overflow-hidden font-montserrat w-full">
        <ThemeProvider>
          <QueryClientProvider client={client}>
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/others" element={<OthersLayout />}>
                  <Route path="/others" element={<Resume />} />
                  <Route path="/others/resume" element={<Resume />} />
                  <Route path="/others/blog" element={<Blog />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </QueryClientProvider>
        </ThemeProvider>
      </div>
    </main>
  );
}

export default App;
