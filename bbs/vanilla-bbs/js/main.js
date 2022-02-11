import Controller from "./Controller.js";
import Store from "./store.js";
import storage from "./storage.js";
import SearchFormView from "./views/SearchFormView.js";
import SearchResultView from "./views/ListView.js";
import TabView from "./views/PageView.js";
import KeywordListView from "./views/KeywordListView.js";
import HistoryListView from "./views/HistoryListView.js";
import PageView from "./views/PageView.js";

const tag = "[main]";

document.addEventListener("DOMContentLoaded", main);

function main() {
  console.log(tag, "main");

  const store = new Store(storage);

  const views = {
    pageView: new PageView(),
    listView: new ListView(),
    detailView: new DetailView(),
    buttonView: new ButtonView(),
  };

  new Controller(store, views);
}
