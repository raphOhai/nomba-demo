export const glowLight = (element, className) => {
  const ball1 = document.getElementById(element);
  ball1.classList.add(className);
};

export const removeLight = (element, className) => {
  const ball1 = document.getElementById(element);
  ball1.classList.remove(className);
};
