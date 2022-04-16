import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = new useParams();
    const url = 'http://localhost:4000/blogs/' + id;
    const { data: blogs, isPending, error } = useFetch(url);
    const navigate = useNavigate();
    const handleClick = () => {
        fetch('http://localhost:4000/blogs/' + id, {
            method: "DELETE"
        })
            .then(() => {
                navigate('/');
            })
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && console.error({ error })}
            {blogs && (
                <article>
                    <h2><b>{blogs.title}</b></h2>
                    <p>--{blogs.author}</p>
                    <div>{blogs.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}

        </div>
    );
}

export default BlogDetails;