import { Header } from "@/components/section/Header"
import { Tabs } from "@/components/section/Tabs"

export const BlogSection = () => {
  return (
    <section className="section" aria-labelledby="blog-title">
        <Header
            subtitle="A Knowledge Treasure Trove"
            id="blog-title"
            title="Explore FutureTech's In-Depth Blog Posts"
            link="View All Blogs"
        />
        <Tabs page="home"/>
    </section>
  )
}

