import { useEffect, useState } from "react";

import { MindMap, type MindMapOptions } from "@ant-design/graphs";

import "./app.css";

const deepMap = (bookmarkTreeNodes: chrome.bookmarks.BookmarkTreeNode[]): any[] => {
  return bookmarkTreeNodes.map((item) => {
    if (item.children?.length) {
      return {
        id: item.title || item.url || item.id,
        children: deepMap(item.children),
      };
    }
    return {
      id: item.title || item.url || item.id,
    };
  });
};

function App() {
  const [bookmarks, setBookmarks] = useState<MindMapOptions["data"]>();

  const getBookmarks = () => {
    chrome.bookmarks.getTree((bookmarkTreeNodes) => {
      console.log(bookmarkTreeNodes);
      if (!bookmarkTreeNodes?.[0]?.children?.length)
        return;

      console.log(deepMap(bookmarkTreeNodes?.[0]?.children)?.[0]);
      setBookmarks(deepMap(bookmarkTreeNodes?.[0]?.children)?.[0]);
    });
  };

  useEffect(() => {
    getBookmarks();
  }, []);

  return (
    <div className="w-dvw h-dvh p-6">
      <MindMap
        data={bookmarks}
        animation={false}
        direction="right"
        type="boxed"
        autoFit="view"
        padding={8}
        edge={{
          style: {
            endArrow: true,
          },
        }}
      />
    </div>
  );
}

export default App;
