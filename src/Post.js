import React from 'react';
import Proptypes from 'prop-types';

function Post({ id, title, deletePost }) {
    return (
        <div className="Post">
            <button className="Post__delete" onClick={() => deletePost(id)}>X</button>
            <div className="Post__title">{title}</div>
            <img className="Post__image" src={`https://source.unsplash.com/random?sig=${id}`} />
        </div>
    )
}

Post.propTypes = {
    id: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    deletePost: Proptypes.func.isRequired
}

export default Post;