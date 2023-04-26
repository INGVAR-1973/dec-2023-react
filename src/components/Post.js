import React from 'react';
import {post} from "axios";

const Post = ({post,setPost}) => {
    const{id,title}=post;

    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <button onClick={()=>setPost(post)}>details</button>
        </div>
    );
}

export default Post;