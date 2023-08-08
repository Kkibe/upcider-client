import React from 'react'
import './index.scss';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <h1>
            Upcider
        </h1>
        <div className='menus'>
          <a href='#'><ion-icon name='home-outline'></ion-icon> Home</a>
          <a href='#'><ion-icon name='newspaper-outline'/> Find Jibs</a>
          <a href='#'><ion-icon name='stats-chart-outline'/> Performance</a>
          <a href='#'><ion-icon name='home_outline'/> Bookmarks</a>
          <a href='#'><ion-icon name='home_outline'/> Message</a>
          <a href='#'><ion-icon name='home_outline'/> Settings</a>
        </div>
    </div>
  )
}
