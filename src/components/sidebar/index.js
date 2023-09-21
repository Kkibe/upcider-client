import React from 'react'
import './index.scss';
import Profile from '../../assets/profile.png';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <h1 className='logo'>
            Upcider
        </h1>
        <div className='menus'>
          <a href='/'><ion-icon name='home-outline'></ion-icon> Home</a>
          <a href='/'><ion-icon name='newspaper-outline'/> Find Jibs</a>
          <a href='/'><ion-icon name='stats-chart-outline'/> Performance</a>
          <a href='/'><ion-icon name='bookmarks-outline'/> Bookmarks</a>
          <a href='/'><ion-icon name='mail-unread-outline'/> Message</a>
          <a href='/'><ion-icon name='settings-outline'/> Settings</a>
        </div>
        <div className='profile'>
          <img className='profile-img' src={Profile}/>
          <div className='profile-name'>
            <h4>Albert Einstein</h4>
            <p>Data Science</p>
          </div>
        </div>
    </div>
  )
}
