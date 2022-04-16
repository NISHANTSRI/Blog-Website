import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreateNew = () => {
    const [title, settitle] = useState('');
    const [body, setbody] = useState('')
    const [author, setauthor] = useState('mario')
    const [isPending, setisPending] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        setisPending(true);

        const blog = { title, body, author }
        console.log(blog);
        fetch('http://localhost:4000/blogs', {
            "method": 'POST',
            'headers': { 'Content-Type': 'application/json' },
            'body': JSON.stringify(blog)
        })
            .then(() => {
                console.log("blog added")
                setisPending(false);
                navigate('/')
            })
    }


    return (
        <div className="create">
            <h2>Create New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog Title</label>
                <input type="text" required
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                ></input>
                <label>Blog Body</label>
                <textarea required
                    value={body}
                    onChange={(e) => setbody(e.target.value)}
                ></textarea>
                <label >Blog Author</label>
                <select value={author} onChange={(e) => setauthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="luigi">Luigi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}

export default CreateNew;