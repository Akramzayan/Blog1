import React from "react";
import MainLayout from "../../../componenets/MainLayout";
import BreadCrumps from "../../../componenets/BreadCrumps";
import { images } from "../../../constants";
import { Link } from "react-router-dom";
import SuggestedPosts from "./container/SuggestedPosts";
import CommentContainer from "../../../componenets/comments/CommentContainer";
const BreadCrumpsData = [
  {
    name: "Home",
    Link: "/",
  },
  {
    name: "Blog",
    Link: "/Blog",
  },
  {
    name: "Article Ttitle",
    Link: "/blog/1",
  },
];
const postsData = [
  {
    _id: "1",
    image: images.Post1,
    title: "Help Children Get Better Education",
    createdAt: "2023-07-22T00:00:00.000Z",
  },
  {
    _id: "2",
    image: images.Post1,
    title: "Help Children Get Better Education",
    createdAt: "2023-07-22T00:00:00.000Z",
  },
  {
    _id: "3",
    image: images.Post1,
    title: "Help Children Get Better Education",
    createdAt: "2023-07-22T00:00:00.000Z",
  },
  {
    _id: "4",
    image: images.Post1,
    title: "Help Children Get Better Education",
    createdAt: "2023-07-22T00:00:00.000Z",
  },
];
const tagsData = [
    "Medical",
    "Lifestyle",
    "Learn",
    "Education",
    "Food",
    "Travel",
    "Adventure",
]
const ArticleDetailPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start
       ">
        <article className="flex-1">
          <BreadCrumps data={BreadCrumpsData} />
          <img className="rounded-xl w-full" src={images.Post1} alt="Laptop" />
          <Link
            to="/blog?category=selectedCategory"
            className="text-primary text-sm font-roboto inline-block mt-4 md:text-base"
          >
            Education
          </Link>
          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
            Help Children Get Better Education
          </h1>
          <div className="mt-4 text-dark-soft">
            <p className="leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              aliquam officiis iste at error consectetur doloremque provident id
              repudiandae libero ipsam expedita repellendus dignissimos
              consequuntur animi adipisci rem, accusantium placeat.
            </p>
          </div>
          <CommentContainer className="mt-10" /> 
        </article>
        <SuggestedPosts header={"Latest Article"} posts={postsData} tags={tagsData} className="mt-8 lg:mt-0 lg:max-w-xs"/>
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;
