import React, { useState } from "react";
import blogs from "../Assets/data2"
import "./BlogSlider.css"; 

const BlogSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === blogs.length - 3 ? 0 : prevIndex + 1)); // Show 3 blogs at a time
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? blogs.length - 3 : prevIndex - 1));
  };

  return (
    <div style={styles.sliderContainer}>
      <h2 style={styles.heading}>Blogs to Keep You Fit</h2>
      
      {/* Slider Controls */}
      <div style={styles.sliderWrapper}>
        <button onClick={prevSlide} style={styles.navButton}>‹</button>
        
        <div style={styles.blogContainer}>
          {blogs.slice(currentIndex, currentIndex + 3).map((blog) => (
            <div key={blog.id} style={styles.blogBox}>
              <img src={blog.image} alt={blog.title} style={styles.blogImage} />
              <h3 style={styles.blogTitle}>{blog.title}</h3>
              <p style={styles.blogDescription}>{blog.description}</p>
              <a href={blog.link} style={styles.readMore}>Read More</a>
            </div>
          ))}
        </div>

        <button onClick={nextSlide} style={styles.navButton}>›</button>
      </div>
      <hr />
    </div>
  );
};


const styles = {
    sliderContainer: {
        margin: "50px auto",
        width: "80%",
        textAlign: "center",
        
      },
      heading: {
        color:"light-green", // Dark emerald color
        fontSize: "28px",
        marginBottom: "20px",
      },
      sliderWrapper: {
        display: "flex",
        alignItems: "center",
      },
      navButton: {
        backgroundColor: "#065F46",
        color: "#fff",
        border: "none",
        fontSize: "24px",
        cursor: "pointer",
        padding: "10px 20px",
      },
      blogContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        overflow: "hidden",
      },
      blogBox: {
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        transition: "transform 0.3s ease",
        cursor: "pointer",
      },
      blogBoxHover: {
        transform: "scale(1.05)",
      },
      blogImage: {
        width: "100%",
        height: "150px",
        borderRadius: "10px",
      },
      blogTitle: {
        fontSize: "20px",
        color: "#065F46",
        margin: "10px 0",
      },
      blogDescription: {
        fontSize: "16px",
        color: "#333",
        marginBottom: "10px",
      },
      readMore: {
        textDecoration: "none",
        color: "#065F46",
        fontWeight: "bold",
      },
    };
    
export default BlogSlider;
