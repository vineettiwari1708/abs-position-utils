/**
 * Get absolute position of an element on the screen
 * @param {HTMLElement} el
 * @returns {{ top: number, left: number }}
 */
function getAbsolutePosition(el) {
  const rect = el.getBoundingClientRect();
  return {
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX
  };
}

/**
 * Set an element's position to an absolute coordinate
 * @param {HTMLElement} el
 * @param {{ top: number, left: number }} position
 */
function setAbsolutePosition(el, position) {
  el.style.position = 'absolute';
  el.style.top = `${position.top}px`;
  el.style.left = `${position.left}px`;
}

/**
 * Move element by offset (relative to current position)
 * @param {HTMLElement} el
 * @param {{ x: number, y: number }} offset
 */
function moveBy(el, offset) {
  const current = getAbsolutePosition(el);
  setAbsolutePosition(el, {
    top: current.top + offset.y,
    left: current.left + offset.x
  });
}

module.exports = {
  getAbsolutePosition,
  setAbsolutePosition,
  moveBy
};
