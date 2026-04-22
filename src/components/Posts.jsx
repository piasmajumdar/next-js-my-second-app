'use client'
import React, { use } from 'react';

const Posts = ({postsPromise}) => {
    const posts = use(postsPromise);
    console.log('posts in Posts component', posts)
    return (
        <div>
            <h2 className='text-4xl'>Posts: {posts.length}</h2>
        </div>
    );
};

export default Posts;