import Tools from "./Tools";
import ArticleIcon from "../assets/article.png";
import BlogIcon from "../assets/blog.png";
import ContentRewriterIcon from "../assets/content_rewriter.png";
import ImageIcon from "../assets/image_generator.png";
import ProductIcon from "../assets/product_descriptions.png";
import SocialMediaIcon from "../assets/social_media_post.png";

function ToolsSection() {
  const tools = [
    {
      icon: ArticleIcon,
      title: "Article Generator",
      description:
        "Turn a title and an outline into a fully SEO-optimized and long article with this AI editor",
    },
    {
      icon: BlogIcon,
      title: "Blog Post Writer",
      description:
        "Turn a title and an outline into a fully SEO-optimized and long article with this AI editor",
    },
    {
      icon: ContentRewriterIcon,
      title: "Content Rewriter",
      description:
        "Turn a title and an outline into a fully SEO-optimized and long article with this AI editor",
    },
    {
      icon: ImageIcon,
      title: "Image Generator",
      description:
        "Turn a title and an outline into a fully SEO-optimized and long article with this AI editor",
    },
    {
      icon: ProductIcon,
      title: "Product Descriptions",
      description:
        "Turn a title and an outline into a fully SEO-optimized and long article with this AI editor",
    },
    {
      icon: SocialMediaIcon,
      title: "Social Media Post",
      description:
        "Turn a title and an outline into a fully SEO-optimized and long article with this AI editor",
    },
  ];
  return (
    <section
      className="flex flex-col items-center gap-3 bg-linear-to-r from-red-100 via-gray-100 to-blue-200 px-12 pb-12 "
      id="section-2"
    >
      <h2 className="text-gray-600 text-3xl lg:text-5xl mt-12 text-center font-semibold md:px-24">
        Most Popular Tools
      </h2>
      <p className="text-gray-500 font-semibold mt-6 text-lg">
        These are the most popular tools and a good place to start,
        <br /> Give them a try!
      </p>
      <div className=" grid md:grid-cols-2 gap-5 lg:grid-cols-3   lg:px-36 mt-6">
        {tools.map((tool) => (
          <Tools
            icon={tool.icon}
            title={tool.title}
            description={tool.description}
          />
        ))}
      </div>
    </section>
  );
}

export default ToolsSection;
