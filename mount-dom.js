import { DOM_TYPES } from './runtime/src/h';

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

// TODO: implement createTextNode()
// TODO: implement createElementNode()
// TODO: implement createFragmentNodes(
