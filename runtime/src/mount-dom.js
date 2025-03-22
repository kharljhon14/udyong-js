import { addEventListener } from './events';
import { DOM_TYPES } from './h';

export function mountDOM(vdom, parentEl) {
  switch (vdom.type) {
    case DOM_TYPES.TEXT:
      break;
    case DOM_TYPES.ELEMENT:
      break;
    case DOM_TYPES.FRAGMENT:
      break;
    default:
      throw new Error(`Can't mount DOM of type ${vdom.type}`);
  }
}

function createTextNode(vdom, parentEl) {
  const { value } = vdom;

  const textNode = document.createTextNode(value);
  vdom.el = textNode;

  parentEl.append(textNode);
}

function createElementNode(vdom, parentEl) {
  const { tag, props, children } = vdom;

  const element = document.createElement(tag);

  vdom.el = element;
}

function addprops(el, props, vdom) {
  const { on: events, ...attrs } = props;
  vdom.listeners = addEventListener(events, el);
  setAttributes(el, attrs);
}

function createFragmentNodes(vdom, parentEl) {
  const { children } = vdom;

  vdom.el = parentEl;

  childeren.forEach((child) => mountDOM(child, parentEl));
}
