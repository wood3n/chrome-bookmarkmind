chrome.action.onClicked.addListener(() => {
  // 当用户点击插件图标时执行此函数
  chrome.tabs.create({
    url: chrome.runtime.getURL("index.html"),
  });
});
