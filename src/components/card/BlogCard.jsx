import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ data }) => {
  const navigate = useNavigate();
  const Properties = data?.properties;

  function shortenText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength - 3) + "...";
  }

  const title = Properties.Name?.title[0].plain_text || "Blog";
  const summary = shortenText(
    Properties.Summary?.rich_text[0]?.plain_text || "",
    200
  );
  const authorName =
    Properties["Author Name"]?.rich_text[0]?.plain_text || "Idah Diocese";

  const publishedDate = (
    new Date(Properties["Date Published"]?.created_time) || new Date()
  ).toLocaleDateString("en-GB", {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const coverArt = data?.cover?.external?.url || " ";

  const authorImage = Properties.authorImage?.files[0]?.file.url || "";

  const NavigateState = {
    title,
    summary,
    authorName,
    publishedDate,
    coverArt,
    authorImage,
  };

  return (
    <div
      className="h-96 w-full cursor-pointer overflow-hidden rounded-3xl bg-white shadow-xl duration-200 ease-in-out hover:scale-105 hover:shadow-2xl"
      onClick={() => navigate(`/blog/${data.id}`, { state: NavigateState })}
    >
      <div className="h-2/5 w-full bg-gray-100">
        <img
          src={coverArt}
          alt="cover"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex h-3/5 w-full flex-col  px-4 py-3">
        <p className="text-xl font-extrabold"> {shortenText(title, 50)}</p>
        <p className="mt-2 text-sm font-medium">{summary}</p>
        <div className="mt-auto flex w-full items-center justify-between">
          <div className="flex items-center">
            <div className="mr-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#022c22]">
              {authorImage ? (
                <img
                  src={authorImage}
                  className="h-8 w-8 rounded-full object-cover"
                  alt={authorName}
                />
              ) : (
                <p className="text-lg capitalize text-white">{authorName[0]}</p>
              )}
            </div>
            <p className="ml-1 font-semibold">{authorName}</p>
          </div>
          <p className="text-sm text-gray-600">{publishedDate}</p>
        </div>
      </div>
    </div>
  );
};

export const BlogCardLoading = () => {
  return (
    <div className="h-96 w-full overflow-hidden rounded-3xl bg-gray-200 shadow-xl">
      <div className="h-2/5 w-full animate-pulse bg-gray-300"></div>
      <div className="flex h-3/5 w-full flex-col px-4 py-3 ">
        <div className="mt-2 h-4 w-full animate-pulse rounded-full bg-gray-300"></div>
        <div className="mt-6 h-2 w-full animate-pulse rounded-full bg-gray-300"></div>
        <div className="mt-2 h-2 w-10/12 animate-pulse rounded-full bg-gray-300"></div>
        <div className="mt-2 h-2 w-11/12 animate-pulse rounded-full bg-gray-300"></div>
        <div className="mt-2 h-2 w-1/2 animate-pulse rounded-full bg-gray-300"></div>
        <div className="mt-2 h-2 w-full animate-pulse rounded-full bg-gray-300"></div>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex w-1/2 items-center ">
            <div className="mr-1 flex h-8 w-8 animate-pulse  items-center justify-center rounded-full bg-gray-300 "></div>
            <div className="h-2 w-3/5 animate-pulse rounded-full bg-gray-300"></div>
          </div>

          <div className=" h-2 w-2/5 animate-pulse rounded-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
