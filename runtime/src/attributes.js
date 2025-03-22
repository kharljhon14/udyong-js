export function setAttributes(el, attrs) {
  const { class: className, style, ...otherAtrrs } = attrs;

  if (className) {
    setClass(el, className);
  }

  if (style) {
    Object.entries(style).forEach(([prop, value]) => {
      setStyle(el, prop, value);
    });
  }

  for (const [name, value] of Object.entries(otherAtrrs)) {
    setAttribute(el, name, value);
  }
}
// TODO: implement setClass
// TODO: implement setStyle
// TODO: implement setAttribute
