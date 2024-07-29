import { getData } from "../utils/helper";
import React, { useState } from "react";
import PostComp from "./PostComp";

const UserComp = ({ user }) => {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    const [userPosts, setUserPosts] = useState([]);
    const [displayPost, setDisplayPost] = useState(false);
    const filterPosts = async () => {
        let response = await getData(url);
        let currentPosts = response.filter(post => post.userId === user.id).map(post => post);
        setUserPosts([...currentPosts]);
    }

    filterPosts();


    const displayUserPosts = () => {
        setDisplayPost(!displayPost);
    }

    return (
        <div style={{ border: "10px #b281eb48", padding: "50px", background: "#b281eb48", borderRadius: "15px", margin: "10px" }}>
            <button onClick={displayUserPosts}>SHOW/HIDE My posts</button>
            <ul>
                <li> I'm a User with Id: {user.id}</li>
            </ul>
            <h6> My Posts: </h6>
            <div>
                {displayPost &&
                    <div>
                        {
                            userPosts.map(post => {
                                return <PostComp key={post.id} post={post} />
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )
};

export default UserComp;