import React from "react";
import { useRouteData } from "@remix-run/react";
import { Article } from "../lib/feed/article";
import Banner from "../components/layout/Banner";
import TagList from "../components/tags/TagList";
import Tag from "../components/tags/Tag";
import FeedToggle from "../components/feed/FeedToggle";
import FeedLayout from "../components/feed/FeedLayout";
import Pagination from "../components/feed/Pagination";
import Feed from "../components/feed/Feed";
import HideAfterFirstRender from "../components/HideAfterFirstRender";

export function meta() {
  return {
    title: "Home — Conduit",
    description: "A place to share your knowledge.",
  };
}

type IndexData = {
  articles: Article[];
  articlesCount: number;
  page: number;
  totalPages: number;
};

const Index = function Index() {
  const data = useRouteData<IndexData>();

  return (
    <div className="home-page">
      <Banner>
        <h1 className="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </Banner>

      <FeedLayout
        feed={
          <>
            <FeedToggle tag="javascript" />

            <Feed
              initialPage={data.page}
              initialData={data.articles}
              totalPages={data.totalPages}
            />

            <HideAfterFirstRender>
              <Pagination page={data.page} totalPages={data.totalPages} />
            </HideAfterFirstRender>
          </>
        }
        tags={
          <>
            <p>Popular Tags</p>

            <TagList>
              <Tag>programming</Tag>
              <Tag>javascript</Tag>
              <Tag>emberjs</Tag>
              <Tag>angularjs</Tag>
              <Tag>react</Tag>
              <Tag>mean</Tag>
              <Tag>node</Tag>
              <Tag>rails</Tag>
            </TagList>
          </>
        }
      />
    </div>
  );
};

export default Index;