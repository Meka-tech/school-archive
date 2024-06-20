import LandingPageNav from "components/navbar/landing-page-nav";
import React, { useEffect, useState } from "react";
import BannerImg from "../../assets/img/landing-page/archive-new.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdLibraryBooks, MdSearch } from "react-icons/md";
import { Client } from "@notionhq/client";

import { FaBloggerB } from "react-icons/fa";
import Footer from "components/footer/Footer";
import BlogCard from "components/card/BlogCard";
import { BlogCardLoading } from "components/card/BlogCard";

const Blogs = () => {
  const BaseUrl = process.env.REACT_APP_BASE_URL;
  const [blogItem, setBlogItem] = useState([]);
  const [blogLoading, setBlogLoading] = useState(false);

  const GetBlogs = async () => {
    setBlogLoading(true);
    try {
      const response = await axios.get(`${BaseUrl}/blog`);
      setBlogItem(response.data.blogs);
    } catch (e) {
      console.error(e);
    } finally {
      setBlogLoading(false);
    }
  };

  useEffect(() => {
    GetBlogs();
  }, []);

  return (
    <main className="flex min-h-screen w-full flex-col bg-white ">
      <LandingPageNav />
      <body className="mb-40 mt-10">
        <div></div>
        <h1 className="text-center text-3xl font-extrabold text-[#065f46] xl:text-[40px]">
          From Our Blog
        </h1>
        <div className=" relative z-10 ml-auto mr-auto mt-10 flex  w-10/12 grid-cols-3  flex-col items-center justify-center gap-y-6 xl:mt-16 xl:grid xl:w-10/12 xl:gap-x-20">
          {blogLoading ? (
            <>
              <BlogCardLoading />
              <BlogCardLoading />
              <BlogCardLoading />
              <BlogCardLoading />
              <BlogCardLoading />
              <BlogCardLoading />
            </>
          ) : !blogLoading && blogItem.length > 0 ? (
            blogItem.map((item, i) => {
              return <BlogCard data={item} key={i} />;
            })
          ) : null}
        </div>
      </body>
      <Footer />
    </main>
  );
};

export default Blogs;
