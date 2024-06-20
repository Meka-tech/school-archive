import Footer from "components/footer/Footer";
import LandingPageNav from "components/navbar/landing-page-nav";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";
import { Spinner } from "flowbite-react";
import { IoMdArrowRoundBack } from "react-icons/io";

const Blog = () => {
  const { title, summary, authorName, publishedDate, coverArt, authorImage } =
    useLocation().state;
  const { id } = useParams();
  const [recordMap, setRecordMap] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const GetPage = async () => {
    setLoading(true);
    try {
      const data = await fetch(
        `https://notion-api.splitbee.io/v1/page/${id}`
      ).then((res) => res.json());

      setRecordMap(data);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetPage();
  }, []);

  return (
    <main className="flex min-h-screen w-full flex-col bg-white">
      <LandingPageNav />
      <div>
        <img
          src={coverArt}
          alt={title}
          className="h-40 w-full object-cover object-center xl:h-80"
        />
      </div>
      <div className=" relative ml-auto mr-auto w-11/12 py-5 pb-28 xl:w-3/5 xl:pt-10">
        <div
          className="mb-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-gray-800 text-gray-800 duration-100 ease-in hover:border-gray-800 hover:text-gray-800 xl:absolute xl:top-20 xl:-left-40 xl:mb-0 xl:h-14 xl:w-14 xl:border-gray-500 xl:text-gray-500"
          onClick={() => {
            navigate(-1);
          }}
        >
          <IoMdArrowRoundBack className="text-xl xl:text-4xl" />
        </div>
        <p className="text-2xl font-extrabold leading-tight xl:text-[50px] ">
          {title}
        </p>
        <div className=" mt-5 flex items-center xl:mt-10">
          <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#022c22] xl:h-14 xl:w-14">
            {authorImage ? (
              <img
                src={authorImage}
                className="h-10 w-10 rounded-full object-cover xl:h-14 xl:w-14"
                alt={authorName}
              />
            ) : (
              <p className=" text-xl capitalize text-white xl:text-3xl">
                {authorName[0]}
              </p>
            )}
          </div>
          <div>
            <p className="font-semibold capitalize xl:text-lg">{authorName}</p>
            <p className="xl:text-lg">{publishedDate}</p>
          </div>
        </div>
        <div className="mb-5 mt-5 h-1 w-full border-b-2 border-gray-300 xl:mt-10 xl:mb-10"></div>
        {loading && !recordMap ? (
          <Spinner size={"lg"} />
        ) : recordMap ? (
          recordMap && <NotionRenderer blockMap={recordMap} />
        ) : null}
      </div>
      <Footer />
    </main>
  );
};

export default Blog;
