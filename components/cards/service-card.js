import React from "react";
import { motion } from "framer-motion"

const ServiceCard = ({ icon, title, text, link }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }} >
      <div className="single-service-one">
        <div className="hover-block"></div>
            <i className={icon}></i>  
          <h3>{title}</h3>
          <p>{text}</p>
          <div className="line-block"></div>
          <a href={link} className="more-link">
            Read More
          </a>
        </div>
      </motion.div>  
  );
};

export default ServiceCard;
