import { PageType, TabType } from "./views/PageView.js";

const tag = "[Controller]";

export default class Controller {
  constructor(
    store,
    {
      listView,
      detailView,
      pageView,
      buttonView,
    }
  ) {
    console.log(tag, "constructor");

    this.store = store;

    this.listView = listView;
    this.detailView = detailView;
    this.pageView = pageView;
    this.buttonView = buttonView;

    this.subscribeViewEvents();
    this.render();
  }

  subscribeViewEvents() {
    this.searchFormView
      .on("@submit", (event) => this.search(event.detail.value))
      .on("@reset", () => this.reset());

    this.pageView.on("@change", (event) => this.changePage(event.detail.value));

    this.keywordListView.on("@click", (event) =>
      this.search(event.detail.value)
    );

    this.detailView
      .on("@click", (event) => this.search(event.detail.value))
      .on("@remove", (event) => this.removeHistory(event.detail.value));
  }

  search(keyword) {
    console.log(tag, "search", keyword);

    this.store.search(keyword);
    this.render();
  }

  changePage(page) {
    console.log(page, "changePage", page);

    this.store.changePage = page;
    this.render();
  }

  render() {
    this.pageView.show(this.store.selectedTab);
    if (this.store.selectedPage === PageType.LIST) {
      this.listView.show(this.store.getList());
      this.detailView.hide();
    } else if (this.store.selectedPage === PageType.DETAIL) {
      this.listView.hide();
      this.detailView.show(this.store.getDetail(this.store.id));
    } else {
      throw "존재하지 않는 페이지 입니다.";
    }

    this.listView.show(this.store.getList());
  }
}
