import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const getReadingTime = () => {
    if (!minutes) return "";
    
    if (minutes < 30) {
      const cups = Math.ceil(minutes / 5);
      return "☕️".repeat(cups) + ` ${minutes} min read`;
    } else {
      const boxes = Math.ceil(minutes / 10);
      return "🍱".repeat(boxes) + ` ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      {minutes && <span>{getReadingTime()}</span>}
      <p>{preview}</p>
    </article>
  );
}

export default Article;