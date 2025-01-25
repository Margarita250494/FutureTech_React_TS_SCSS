import { Header } from "@/components/section/Header"
import { Tabs } from "@/components/section/Tabs"
import { blogNewsData } from "../newsData"


export const NewsBlogSection = () => {
  return (
    <section className="section" aria-labelledby="news-tabs-title">
      <Header
      id="news-tabs-title"
      subtitle="Welcome to Our News Hub"
      title="Discover the World of Headlines"
      to="/news"
      link="View All News"
      />
      <Tabs page="news" blogs={blogNewsData}/>
    </section>
  )
}

