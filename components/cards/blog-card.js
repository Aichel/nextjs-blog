import React from "react";
import { motion } from "framer-motion"

const BlogCard = ({ image, author, date, comments, title, text, link }) => {
  return (
    <motion.div initial={{scale: 0.6}}  animate={{scale: 1}} transition={{ duration: 0.5 }}>
    <div className="single-blog-style-one">
      <div className="image-block">
        <div className="inner-block">
          <img src={image} alt=""/>
          <div className="date-block">{date}</div>
        </div>
      </div>
      <div className="text-block">
        <div className="meta-info">
            <a>By {author}</a>
          <span className="sep">.</span>
            <a>{comments}</a>
        </div>
        <h3>
            <a className="text-decoration-none">{title}</a>
        </h3>
        <p>{text}</p>
        <div className="line-block"></div>
          <a className="more-link">Read More</a>
      </div>
    </div>
    </motion.div>
  );
};

export default BlogCard;
