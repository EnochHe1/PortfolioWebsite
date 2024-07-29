import React, { useState, useEffect } from 'react';

const Typewriter = ({ words, speed = 150, pause = 1000 }) => {
  const [displayedText, setDisplayedText] = useState(' ');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => {
          setDisplayedText(` ${currentWord.substring(0, charIndex - 1)} `);
          setCharIndex(charIndex - 1);
        }, speed);
      } else {
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    } else {
      if (charIndex < currentWord.length) {
        setTimeout(() => {
          setDisplayedText(` ${currentWord.substring(0, charIndex + 1)} `);
          setCharIndex(charIndex + 1);
        }, speed);
      } else {
        setTimeout(() => {
          setIsDeleting(true);
        }, pause);
      }
    }
  }, [charIndex, isDeleting, words, wordIndex, speed, pause]);

  return <span>{displayedText}</span>;
};

export default Typewriter;