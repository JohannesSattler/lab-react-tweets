import React from 'react'

function ProfileImage(props) {
    return (
        <>
            <img
            src={props.userimg}
            className="profile"
            alt="profile"
            />
        </>
    )
}

export default ProfileImage
