import React from 'react'
import './index.scss';
import Profile from '../../assets/profile.png';
export default function PostDetail({isActive}) {
  return (
    <div className='detail' style={{
      display: isActive ? 'block' : 'none'
    }}>
        <ion-icon className='close-detail' name='close-outline'/>
        <div className="detail-header">
            <img src={Profile} alt="" />
            <h2>Google</h2>
            <p>Data Science</p>
        </div>
        <hr className="divider"></hr>
        <div className="detail-desc">
            <div className="about">
                <h4>About Company</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, adipisci consectetur error aut odio dolore velit inventore cum assumenda tempore repellat facilis recusandae beatae explicabo. Id hic totam nesciunt aliquid?</p>
                <a href="#">read more</a>
            </div>
        </div>
        <div className="divider"></div>
        <div className="qualification">
            <h4>Qualification</h4>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            </ul>
        
        </div>
        <hr className="divider"></hr>
        <div className="detail-btn">
          <button className="btn-apply">Apply Now</button>
          <button className="btn-save">Save Job</button>
        </div>
    </div>
  )
}
