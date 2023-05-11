import React from 'react';
import '../styles/profileCard.css';
import Button from './Button';

const ProfileCard = ({firstName, lastName, imgUrl}) => {
  return (
    <div className='profile-card'>
        <img src={imgUrl}/>

        <section className='user-name'>
        <h1>{firstName}</h1>
        <h1>{lastName}</h1>
        </section>
        
        <section>
            <Button btnText='Edit' btnType='btn-green'/>
            <Button btnText='Remove' btnType='btn-maroon'/>
        </section>
    </div>
  )
}

export default ProfileCard