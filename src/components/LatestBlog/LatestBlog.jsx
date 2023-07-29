import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LatestBlog.css";

const LatestBlog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const apiKey = "AIzaSyA648_9Nm1ApGJ4CuJZI6wlajchvrsloog";
    const blogId = "1824805278014179281";
    const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`;

    axios
      .get(url)
      .then((response) => {
        setBlog(response.data.items[0]);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

  console.log("Blogs:", blog);
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
    var first50Words = words.slice(0, 50).join(" ");

    console.log("First 50 words of content (excluding title):", first50Words);

    var title = blog.title;
    var url = blog.url;
  }

  return blog ? (
    <div className="latest-blog-container">
      {imageURL ? <div className="image">
        <img src={imageURL} alt="Blog" />
      </div> : <div></div>}
      <div className="content">
        <div className="date">{formattedDate}</div>
        <div className="title">{title}</div>
        <div className="description">{first50Words}</div>
        <a href={url} target="_blank" className="read-more-btn" rel="noreferrer">read more</a>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default LatestBlog;
