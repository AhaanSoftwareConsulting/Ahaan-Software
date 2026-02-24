import "./BlogBanner.css";

const BlogBanner = () => {
  const bannerStyle = {
    backgroundImage: `url(https://ahaanmedia.com/ahaanwebsite/Banner/blog-banner.webp)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section className="blog-banner-section" style={bannerStyle}>
      
      {/* Overlay */}
      <div className="blog-banner-overlay"></div>

      {/* Content */}
      <div className="container blog-banner-content">
        <div className="blog-banner-text">
          <h1 className="blog-banner-heading">
            Our Blogs
          </h1>

          <p className="blog-banner-subtitle">
  Insights, trends, and expert perspectives designed to help you stay ahead 
  in the fast-evolving digital landscape, empowering your business with 
  knowledge-driven strategies and informed decision-making.
</p>

        </div>
      </div>
    </section>
  );
};

export default BlogBanner;
