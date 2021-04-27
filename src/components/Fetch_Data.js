import React, { useState, useEffect } from 'react';

function Fetch_Data() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data)
            })
    }, [])

    console.log(posts)

    return (
        <div className="App">
            <h1>Learn useEffect</h1>
            <div>
                {
                    posts.map(post => (
                        <div key={post.id}>{post.title}</div>
                    ))
                }
            </div>
        </div>
    );
}

export default Fetch_Data
