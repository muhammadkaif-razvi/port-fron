/**
 * Utility function to combine class names conditionally.
 * @param  {...any} classes - Class names or conditional expressions
 * @returns {string} - Combined class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
