import {qs} from "../helpers.js";
import View from "./View.js";

const tag = "[DetailView]";

export default class DetailView extends View {
  constructor() {
    super(qs("#detail-view"));

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