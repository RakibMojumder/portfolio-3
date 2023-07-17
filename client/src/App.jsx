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
  useEffect(() => {
    function handleContextMenu(e) {
      e.preventDefault(); // prevents the default right-click menu from appearing
    }
    // add the event listener to the component's root element
    const rootElement = document.getElementById("root");
    rootElement.addEventListener("contextmenu", handleContextMenu);

    // remove the event listener when the component is unmounted
    return () => {
      rootElement.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
  return (
    <main className="min-h-screen w-full bg-green-gradient dark:bg-purple-gradient flex justify-center items-center">
      <div className="dark:bg-purple-200/[.07] bg-white/10 sm:h-[88vh] sm:w-[93%] 2xl:w-[75%] 2xl:mx-auto rounded-md overflow-hidden font-montserrat">
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
