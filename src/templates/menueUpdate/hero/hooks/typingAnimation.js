import React, { useEffect } from "react";

export const TypingAnimation = () => {
  return useEffect(() => {
    const texts = ["restaurants", "bars", "cafes", "clubs"];
    const textElement = document.getElementById("text-output");
    let textIndex = 0; // Index to keep track of which text to display from the array
    function typeText(index, text, callback) {
      if (index < text.length) {
        textElement.textContent += text.charAt(index);
        setTimeout(function () {
          typeText(index + 1, text, callback);
        }, 100); // Adjust the delay (in milliseconds) between each character
      } else {
        // If typing is complete, wait for a moment and then erase or change text
        setTimeout(callback, 1000); // Adjust the delay before erasing or changing the text
      }
    }

    function eraseText(callback) {
      let currentText = textElement.textContent;
      if (currentText.length > 0) {
        textElement.textContent = currentText.substring(0, currentText.length - 1);
        setTimeout(function () {
          eraseText(callback);
        }, 50); // Adjust the delay (in milliseconds) between each character erasure
      } else {
        // Once text is erased, type the next text or loop back to the start
        textIndex = (textIndex + 1) % texts.length;
        typeNextText();
      }
    }

    function typeNextText() {
      // Clear the current text
      textElement.textContent = "";
      // Start typing the next text
      typeText(0, texts[textIndex], function () {
        // Once typing is complete, wait for a moment and then start erasing
        setTimeout(function () {
          eraseText(typeNextText);
        }, 500); // Adjust the delay before starting the erasing process
      });
    }

    // Start the animation
    typeNextText();
  }, []);
};
