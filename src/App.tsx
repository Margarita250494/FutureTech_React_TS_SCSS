import "@/styles/main.css"
import { Header } from "./components/header/Header"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./scenes/home/Home"
import { News } from "./scenes/news/News"
import { Podcasts } from "./scenes/podcasts/Podcasts"
import { Resources } from "./scenes/resources/Resources"


export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  )
}


