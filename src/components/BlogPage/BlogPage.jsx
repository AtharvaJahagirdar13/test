import React from "react";
import blogs from "../Assets/data4";
import './BlogPage.css';

const BlogPage = () => {
  return (
    <div className="blog-page-container">
      <h1 className="blog-heading">Sports Blogs</h1>
      <div className="blogs-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-author">By {blog.author} on {blog.date}</p>
              <p className="blog-excerpt">{blog.content.substring(0, 100)}...</p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
