import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileCard from '../components/ProfileCard';
import '../styles/profile.css';


const fetchUserData = async () => {
  const res = await axios.get('http://localhost:4000/users');

  console.log(res.data);

  const data = res.data;

  return data;
};


const Profile = () => {

  const [data,setData] = useState([]);

  const assignedData = async () => {
    const fetchedUserData = await fetchUserData();
    setData(fetchedUserData);
  }


  useEffect(() => {
    assignedData();
  }, []);

  return (
    <div className='profile-container'>
      {data.map((profile) => {
        return (
          <ProfileCard
          firstName={profile.firstName}
          lastName={profile.lastName}
          imgUrl={profile.imgUrl}
          key={profile._id}
          />
        )
      })}
    </div>
  )
}

export default Profile