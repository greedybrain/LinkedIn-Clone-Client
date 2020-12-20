//! Core Modules
import React from 'react'

//! Cutome Modules/ Components
import avatar from '../Images/naya_willis.jpg'

const UserImage = ({ styles }) => {
        return (
                <div className="image_wrapper" style={styles.imageWrapper}>
                        <img src={avatar} alt="user avatar" style={styles.imageWrapper.image} />
                </div>
        )
}

export default UserImage
