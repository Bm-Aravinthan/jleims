import React from "react";
import "./BlogCard.css";

const BlogCard = ({blog}) => {
  if (blog !== undefined) {
    const inputDateStr = blog.published;
    // Create a new Date object with the input date string
    const date = new Date(inputDateStr);
    // Function to get the day name (e.g., Monday, Tuesday, etc.)
    function getDayName(date) {
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      return days[date.getDay()];
    }
    // Function to get the month name (e.g., January, February, etc.)
    function getMonthName(date) {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return months[date.getMonth()];
    }
    // Format the date as "Tuesday 13 May, 2022"
    var formattedDate = `${getDayName(date)} ${date.getDate()} ${getMonthName(
      date
    )}, ${date.getFullYear()}`;

    const contentHTML = new DOMParser().parseFromString(
      blog.content,
      "text/html"
    );
    const imageElement = contentHTML.querySelector("img");

    // Check if an image exists in the content and get its URL
    var imageURL = null;
    if (imageElement) {
      imageURL = imageElement.src;
    }

    console.log("Content Image URL:", imageURL);

    function extractTextFromHTML(html) {
      const tempElement = document.createElement("div");
      tempElement.innerHTML = html;
      return tempElement.textContent || tempElement.innerText || "";
    }

    // Extract content from the data
    const content = blog.content;

    // Remove HTML tags and extract the text
    const textContent = extractTextFromHTML(content);

    // Split the text into an array of words
    const words = textContent.trim().split(/\s+/);

    // Get the first 50 words
    var first20Words = words.slice(0, 20).join(" ");

    console.log("First 20 words of content (excluding title):", first20Words);

    var title = blog.title;
    var url = blog.url;
  }

  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div className="blog-card-container" onClick={handleClick}>
      <div className="image">
        <img src={imageURL} alt="" />
      </div>
      <div className="blog-content">
        <div className="blog-title">{title}</div>
        <div className="blog-description">
          {first20Words}
        </div>
        <div className="blog-date">{formattedDate}</div>
      </div>
    </div>
  );
};

export default BlogCard;
