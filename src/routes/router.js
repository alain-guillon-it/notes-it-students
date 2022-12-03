// dependencies
import { createBrowserRouter } from "react-router-dom";

// pages
import App from "../App/App";
import About from "../pages/about/About";
import CoursesList from "../pages/coursesList/CoursesList";
import HomePage from "../pages/homepage/HomePage";
import LearningCss from "../pages/learningCSS/learningCss";
import ArticleIDE from "../pages/learningHTML/articles/ArticleIDE";
import ArticleMETA from "../pages/learningHTML/articles/ArticleMETA";
import ArticleHTML from "../pages/learningHTML/articles/ArticleHTML";
import ArticleTAG from "../pages/learningHTML/articles/ArticleTAG";
import LearningHtml from "../pages/learningHTML/learningHtml";
import LearningJs from "../pages/learningJS/learningJS";
import LearningPhp from "../pages/learningPHP/learningPhp";
import ArticleHEAD from "../pages/learningHTML/articles/ArticleHEAD";
import ArticleLINK from "../pages/learningHTML/articles/ArticleLINK";
import ArticleBODY from "../pages/learningHTML/articles/ArticleBODY";
import ArticleSTRUCTURE from "../pages/learningHTML/articles/ArticleSTRUCTURE";

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
            path: "ide",
            element: <ArticleIDE />,
          },
          {
            path: "tag",
            element: <ArticleTAG />,
          },
          {
            path: "html",
            element: <ArticleHTML />,
          },
          {
            path: "head",
            element: <ArticleHEAD />,
          },
          {
            path: "meta",
            element: <ArticleMETA />,
          },
          {
            path: "link",
            element: <ArticleLINK />,
          },
          {
            path: "body",
            element: <ArticleBODY />,
          },
          {
            path: "structure",
            element: <ArticleSTRUCTURE />,
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
