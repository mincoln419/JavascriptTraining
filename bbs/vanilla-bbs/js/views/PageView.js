import { delegate, qs, qsAll } from "../helpers.js";
import View from "./View.js";

const tag = "[PageView]";

export const PageType = {
  KEYWORD: "LIST",
  HISTORY: "DETAIL",
};

const TabLabel = {
  [TabType.LIST]: "목록",
  [TabType.DETAIL]: "상세",
};

export default class PageView extends View {
  constructor() {
    console.log(tag, "constructor");

    super(qs("#page-view"));

    this.template = new Template();
  }

  
  show(selectedTab) {
    this.element.innerHTML = this.template.getTabList();
    qsAll("li", this.element).forEach((li) => {
      li.className = li.dataset.tab == selectedTab ? "active" : "";
    });

    super.show();
  }
}

class Template {
  getTabList() {
    return `
      <ul class="tabs">
        ${Object.values(TabType)
          .map((tabType) => ({ tabType, tabLabel: TabLabel[tabType] }))
          .map(this._getTab)
          .join("")}
      </ul>
    `;
  }

  _getTab({ tabType, tabLabel }) {
    return `
      <li data-tab="${tabType}">${tabLabel}</li>
     `;
  }
}
