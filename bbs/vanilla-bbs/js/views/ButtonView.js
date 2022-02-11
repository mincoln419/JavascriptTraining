import {qs} from "../helpers.js";
import View from "./View.js";

const tag = "[ButtonView]";

export default class ButtonView extends View {
  constructor() {
    super(qs("#button-view"));

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