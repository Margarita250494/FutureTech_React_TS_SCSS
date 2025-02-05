import { blogHomeData } from "@/components/section/data"
import { Header,Tabs } from "@/components/section/sectionImport"

export const BlogSection = () => {
  return (
    <section className="section" aria-labelledby="blog-title">
        <Header
            to="/blogs"
            subtitle="A Knowledge Treasure Trove"
            id="blog-title"
            title="Explore FutureTech's In-Depth Blog Posts"
            link="View All Blogs"
        />
        <Tabs page="home" blogs={blogHomeData}/>
    </section>
  )
}

