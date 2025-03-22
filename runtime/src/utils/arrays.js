import { DOM_TYPES } from '../h';

export function withoutNulls(arr) {
  return arr.filter((item) => item != null);
}

function mapTextNodes(children) {
  return children.map((child) => (typeof child === 'string' ? hString(child) : child));
}

export function hString(str) {
  return { type: DOM_TYPES.TEXT, value: str };
}

export function hFragment(vNodes) {
  return {
    type: DOM_TYPES.FRAGMENT,
    children: mapTextNodes(withoutNulls(vNodes))
  };
}
