import Home from "./components/section/Home";
import ThemeProvider from "./provider/ThemeProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import OthersLayout from "./layout/OthersLayout";
import Resume from "./components/section/Resume";
import Blog from "./components/section/Blog";
import ScrollToTop from "./utils/ScrollTop";
import Login from "./components/section/Login";
import { Toaster } from "sonner";
import Main from "./layout/Main";
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
    <main className="min-h-screen w-full bg-[#0D0D0D] sm:bg-black dark:bg-purple-gradient flex justify-center items-center">
      <ThemeProvider>
        <QueryClientProvider client={client}>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Main />}>
                <Route path="/" element={<Home />} />
                <Route path="/others" element={<OthersLayout />}>
                  <Route path="/others" element={<Resume />} />
                  <Route path="/others/resume" element={<Resume />} />
                  <Route path="/others/blog" element={<Blog />} />
                  <Route path="/others/login" element={<Login />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
      <Toaster
        toastOptions={{
          unstyled: true,
          classNames: {
            error: "bg-red-400",
            success: "bg-green-400",
            warning: "text-yellow-400",
            info: "bg-blue-400",
          },
        }}
      />
    </main>
  );
}

export default App;
