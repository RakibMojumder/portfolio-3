import Home from "./components/others/Home";
import ThemeProvider from "./provider/ThemeProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import OthersLayout from "./components/others/OthersLayout";
import Resume from "./components/section/Resume";
import Blog from "./components/section/Blog";
import ScrollToTop from "./utils/ScrollTop";
import { useEffect } from "react";

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
    <main className="min-h-screen w-full bg-black dark:bg-purple-gradient flex justify-center items-center">
      {/* <div>
        <div className="h-80 w-80 bg-emerald-500 absolute top-0 left-0 blur-[400px] block dark:hidden"></div>
        <div className="h-80 w-80 bg-emerald-500 absolute bottom-0 right-0 blur-[400px] block dark:hidden"></div>
      </div> */}
      <div className="dark:bg-purple-200/[.07] bg-white/5 border dark:border-none border-emerald-500/10 sm:h-[90vh] sm:w-[93%] 2xl:w-[75%] 2xl:mx-auto rounded-lg overflow-hidden font-montserrat">
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
