import "@/styles/main.css"
import { Header } from "./components/header/Header"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./scenes/home/Home"
import { News } from "./scenes/news/News"
import { Podcasts } from "./scenes/podcasts/Podcasts"
import { Resources } from "./scenes/resources/Resources"
import { Footer } from "./components/footer/Footer";
import { Blogs } from "./scenes/blog/Blogs";
import { Contact } from "./scenes/contact/Contact";


export const App = () => {
  return (
    <Router>
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
      <Footer/>
    </Router>
  )
}


