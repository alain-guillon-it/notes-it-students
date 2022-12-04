// dependencies
import { createBrowserRouter } from "react-router-dom";

// pages
import App from "../App/App";
import About from "../pages/about/About";
import CoursesList from "../pages/coursesList/CoursesList";
import HomePage from "../pages/homepage/HomePage";
import LearningCss from "../pages/learningCSS/learningCss";
import ArticleIDE from "../pages/learningHTML/articles/ArticleIDE";
import ArticleTAG from "../pages/learningHTML/articles/articleTAG/ArticleTAG";
import LearningHtml from "../pages/learningHTML/learningHtml";
import LearningJs from "../pages/learningJS/learningJS";
import LearningPhp from "../pages/learningPHP/learningPhp";
import ArticleSTRUCTURE from "../pages/learningHTML/articles/ArticleSTRUCTURE";
import HomeHTML from "../pages/learningHTML/HomeHTML";
import ArticleTITLE from "../pages/learningHTML/articles/ArticleTITLE";
import WhatTag from "../pages/learningHTML/articles/articleTAG/WhatTag";
import HowWriteTag from "../pages/learningHTML/articles/articleTAG/HowWriteTag";
import ArticlePARAGRAPH from "../pages/learningHTML/articles/ArticlePARAGRAPH";
import ArticleLIST from "../pages/learningHTML/articles/ArticleLIST";
import ArticleLINK from "../pages/learningHTML/articles/ArticleLINK";
import ArticleIMG from "../pages/learningHTML/articles/ArticleIMG";
import ArticleARRAY from "../pages/learningHTML/articles/ArticleARRAY";
import ArticleFORM from "../pages/learningHTML/articles/ArticleFORM";
import ArticleLABEL from "../pages/learningHTML/articles/ArticleLABEL";
import ArticleINPUT from "../pages/learningHTML/articles/ArticleINPUT";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/learning",
        element: <CoursesList />,
      },
      {
        path: "/learning/html",
        element: <LearningHtml />,
        children: [
          {
            index: true,
            element: <HomeHTML />,
          },
          {
            path: "ide",
            element: <ArticleIDE />,
          },
          {
            path: "tag",
            element: <ArticleTAG />,
            children: [
              {
                path: "what-is-a-tag-or-balise",
                element: <WhatTag />,
              },
              {
                path: "how-writing-a-tag",
                element: <HowWriteTag />,
              },
            ],
          },
          {
            path: "structure",
            element: <ArticleSTRUCTURE />,
          },
          {
            path: "title",
            element: <ArticleTITLE />,
          },
          {
            path: "paragraph",
            element: <ArticlePARAGRAPH />,
          },
          {
            path: "list",
            element: <ArticleLIST />,
          },
          {
            path: "link",
            element: <ArticleLINK />,
          },
          {
            path: "img",
            element: <ArticleIMG />,
          },
          {
            path: "table",
            element: <ArticleARRAY />,
          },
          {
            path: "form",
            element: <ArticleFORM />,
          },
          {
            path: "label",
            element: <ArticleLABEL />,
          },
          {
            path: "input",
            element: <ArticleINPUT />,
          },
        ],
      },
      {
        path: "/learning/css",
        element: <LearningCss />,
      },
      {
        path: "/learning/js",
        element: <LearningJs />,
      },
      {
        path: "/learning/php",
        element: <LearningPhp />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
