import {qs} from "../helpers.js";
import View from "./View.js";

const tag = "[ListView]";

export default class ListView extends View {
  constructor() {
    super(qs("#list-view"));

    this.template = new Template();
  }

  show(data = []) {
    this.element.innerHTML =
      data.length > 0 ?
      this.template.getList(data) :
      this.template.getEmptyMessage();

    super.show();
  }
}

class Template {
  getEmptyMessage() {
    return `
      <header>
        <h2 class="container">목록</h2>
      </header>
      <div class="empty-box">
        검색결과가 없습니다
      </div>
    `;
  }

  getList(data = []) {
    return `
    <table id="list" class="table table-striped">
      <thead>
          <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>날짜</th>
              <th>조회수</th>
          </tr>
      </thead>
      ${data.map(this._getItem).join("")}
  </table>
    `;
  }

  _getItem({
    id,
    title,
    insterId,
    instDtm,
    readCnt
  }) {
    return `
      <tbody>
          <td>${id}</td>
          <td>${title}</td>
          <td>${insterId}</td>
          <td>${instDtm}</td>
          <td>${readCnt}</td>
      </tbody>
    `;
  }
}