import "@/styles/main.css";
import { Header } from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, News,Podcasts,Resources,Contact,Blogs } from "@/scenes/scenesImport"
import { Footer } from "./components/footer/Footer";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "./shared/hooks";


export const App = () => {
  
  return (
    <HelmetProvider>
      <Router>
      <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contacts" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </HelmetProvider>
  );
};