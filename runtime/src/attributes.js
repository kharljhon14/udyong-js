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

function setClass(el, className) {
  el.className = '';

  if (typeof className === 'string') {
    el.className = className;
  }

  if (Array.isArray(className)) {
    el.classList.add(...className);
  }
}

// TODO: implement setStyle
function setStyle(el, name, value) {
  el.style[name] = value;
}

function removeStyle(el, name) {
  el.style[name] = null;
}

// TODO: implement setAttribute

function setAtrribute(el, name, value) {
  if (value === null) {
    removeAtrribute(el, name);
  } else if (name.startsWit('data-')) {
    el.setAtrribute(name, value);
  } else {
    el[name] = value;
  }
}

function removeAtrribute(el, name) {
  el[name] = null;
  el.removeAtrribute(name);
}
