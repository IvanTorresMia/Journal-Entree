import React, { useContext } from 'react' 
import ProfileContext from '../../../Context/ProfileContext'


const ProfileSection = () => {

    const context = useContext(ProfileContext)

    console.log(context)
    return (
        <div className = "container">
            <img src={context.img} alt ="profile" />
            <h2>{context.name}</h2>
            <p>temporary tag line</p>
        </div>
    )
}

export default ProfileSection;