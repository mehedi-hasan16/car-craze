import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const Blog = () => {
    const blogData = useLoaderData();
    return (
        <div className="container min-vh-100">
            <Helmet>
                <title>Car Craze | Blog</title>
            </Helmet>
        <h1 className="text-center mt-2 mb-5">Blog</h1>
            {
                blogData.map(n =>
                    <div key={n._id} className="border px-4 py-3 rounded mb-3">
                        <h5>Question: {n.question}</h5>
                        <p><span className="bg-primary bg-opacity-25 p-1 rounded ">Answer:</span> {n.answer}</p>
                    </div>)
            }

        </div>
    );
};

export default Blog;