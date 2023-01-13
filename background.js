browser.contextMenus.create({
  id: "BunproSearch",
  title: "Search on Bunpro",
  contexts: ["selection"],
  "icons": {
    "16": "icons/icon16.png",
    "32": "icons/icon32.png"
  }
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  const query = encodeURIComponent(info.selectionText.trim());
  const url = `https://bunpro.jp/grammar_points/${query}`;
  browser.tabs.create({ url });
});
