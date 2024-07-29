import { getDataById } from "../utils/helper";

const PostComp = ({ post }) => {
    // const [post, setPost] = useState([]);

    // const displayPost = async () => {
    //     let response = await getDataById(url, post.id);

    //     setPost([...response]);
    // }

    return (
        <div style={{ border: "10px #f094dc88", padding: "10px", background: "#f094dc57", borderRadius: "15px", margin:"10px" }}>
            <h5> I'm A Post</h5>
            <ul>
                <li> My Post Id: {post.id}</li>
                <li> title: {post.title} </li>
            </ul>
        </div>
    )
};

export default PostComp;