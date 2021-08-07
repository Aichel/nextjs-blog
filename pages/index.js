import Layout from "@components/layout";
import Services from "@components/services";
import BlogHome from "@components/blog-home";

export default function Home() {
  return (
    <Layout pageTitle="Blog Page">
    <BlogHome/>
    <Services/> 
  </Layout>
  )
}