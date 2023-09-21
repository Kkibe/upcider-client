import React from 'react'
import './index.scss';
import Profile from '../../assets/profile.png';

export default function PostCard({active, setActive}) {
  const handleClick = () => {
    setActive(!active);
  };
  return (
  <div className="card" onClick={handleClick}>
    <div className="card-left blue-bg">
      <img src={Profile} alt="" />
    </div>
    <div className="card-center">
      <h3>Google</h3>
      <p className="card-detail">
        Data Science, Data Engineer
      </p>
      <p className="card-loc">
        <ion-icon name='location-outline'></ion-icon>
        Abcd street
      </p>
      <p className="card-sub">
        <p><ion-icon name='today-outline' /> 1 mins ago</p>
        <p><ion-icon name='hourglass-outline' /> Full-time</p>
        <p><ion-icon name='people-outline' /> 200 Applicants</p>
      </p>
    </div>
    <div className="card-right">
      <div className="card-tag">
        <h5>Division</h5>
        <a href="#">Data Engineer</a>
      </div>
      <div className="card-salary">
        <p><b>$350k</b><span>/year</span></p>
      </div>
    </div>
  </div>
  )
}
