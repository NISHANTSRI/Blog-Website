// eslint-disable
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const url = 'http://localhost:4000/blogs'
    //eslint-disable-next-line
    const { data: blogs, isPending, error } = useFetch(url);

    return (
        <div className="homepage">
            {isPending && <div>Loading.....</div>}
            {blogs && <BlogList blogs={blogs} title='All Blogs' />}
        </div>
    );
}

export default Home;