import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import BlogCard from "./cards/blog-card";
import BlockTitle from "./block-title";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const BLOG_DATA = [
  {
    image: "/blog-1-1.png",
    author: "Admin",
    date: "30 April, 2021",
    comments: "2 Comments",
    title: "Pre and post launch mobile app marketing pitfalls to avoid",
    text:
      "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
    link: "/blog-details"
  },
  {
    image: "/blog-1-2.png",
    author: "Admin",
    date: "15 May, 2021",
    comments: "2 Comments",
    title: "Social currency high perfor- mance keywords or",
    text:
      "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
    link: "/blog-details"
  },
  {
    image: "/blog-1-3.png",
    author: "Admin",
    date: "3 June, 2021",
    comments: "2 Comments",
    title: "Prioritize these line items quarterly sales are at ",
    text:
      "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
    link: "/blog-details"
  },
  {
    image: "/blog-1-4.png",
    author: "Admin",
    date: "30 April, 2021",
    comments: "2 Comments",
    title: "Pre and post launch mobile app marketing pitfalls to avoid",
    text:
      "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
    link: "/blog-details"
  },
  {
    image: "/blog-1-5.png",
    author: "Admin",
    date: "30 April, 2021",
    comments: "2 Comments",
    title: "Social currency high perfor- mance keywords or",
    text:
      "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
    link: "/blog-details"
  },
  {
    image: "/blog-1-6.png",
    author: "Admin",
    date: "30 April, 2021",
    comments: "2 Comments",
    title: "Prioritize these line items quarterly sales are at ",
    text:
      "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
    link: "/blog-details"
  }
];
const BlogHome = () => {

  const CarouselOptions = {
    spaceBetween: 30,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
    pagination: {
      el: "#testimonials-swiper-pagination",
      type: "bullets",
      clickable: "true"
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30
      },
      576: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30
      },
      1199: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30
      }
    }
  };

  return (
    <>
    <section className="banner-style-one" id="banner">
    <span className="bubble-1"></span>
    <span className="bubble-3"></span>
    <span className="bubble-4"></span>
    <span className="bubble-6"></span>
    <Container>
    <section id="blog">
      <Container>
        <BlockTitle
          textAlign="center"
          title={`Check out our latest \n news & articles.`}
        />
        <Row>
          <Col xl={12}>
            <Swiper {...CarouselOptions}
            className="owl-dot-type1"
              spaceBetween={50}
              pagination={{ clickable: true }}
            >
               {BLOG_DATA.map(
                ({ image, author, date, comments, title, text, link }, index) => (
                  <SwiperSlide key={index}>
                    <BlogCard
                      image={image}
                      author={author}
                      date={date}
                      comments={comments}
                      title={title}
                      text={text}
                      link={link}
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>
            <div
              className="swiper-pagination"
              id="testimonials-swiper-pagination"
            ></div>
          </Col>
        </Row>
      </Container>
    </section>
    </Container>
  </section>
 
    </>
  );
};

export default BlogHome;
