import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Blogs.css";
import BlogCard from "../BlogCard/BlogCard";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        const apiKey = "AIzaSyA648_9Nm1ApGJ4CuJZI6wlajchvrsloog";
        const blogId = "1824805278014179281";
        const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`;

        axios
            .get(url)
            .then((response) => {
                const blogData = response.data.items.slice(1, 7);
                setBlogs(blogData);
                setShowMore(response.data.items.length > 7);
            })
            .catch((error) => {
                console.error("Error fetching blogs:", error);
            });
    }, []);

    const handleViewMore = () => {
        window.location.href = "https://jleiministry.blogspot.com/";
    };


    console.log("Blogs:", blogs);

    return (
        <div className="blog-container">
            <div className="title">All Blog Posts</div>
            <div className="sub-title">
                Stories, thoughts and articles about what Jesus is doing in our world
                and how we outwork that through our local churches.
            </div>
            <div className="card-container">
                {blogs.map((blog) => (
                    <BlogCard blog={blog} key={blog.id} />
                ))}
            </div>
                {showMore && (
                    <div className="view-more-button-container">
                        <button className="view-more-button" onClick={handleViewMore}>
                            View More
                        </button>
                    </div>
                )}
        </div>
    );
};

export default Blogs;
