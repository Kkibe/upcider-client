import React from 'react';
import './index.scss';
import PostCard from '../../components/postCard';
import PostDetail from '../../components/postDetail';
export default function Home({active, setActive}) {
  
  return (
    <div className='main'>
      <div className='main-header'>
        <ion-icon className='menu-bar' name='menu-outline'/>
        <div className="search">
          <input type="text" placeholder='Search your best job here...' />
          <button className="btn-search">
            <ion-icon name='search-outline'/>
          </button>
        </div>
      </div>
      <div className="filter-wrapper">
        <p>Recommendation</p>
        <div className="filter">
          <button className="btn-filter">Data Science</button>
          <button className="btn-filter">Data Engineer</button>
          <button className="btn-filter">Data Analyst</button>
          <button className="btn-filter">Data Visualization</button>
          <button className="btn-filter">CRM Analyst</button>
        </div>
      </div>
      <div className="sort">
        <p>Sort</p>
        <div className="sort-list">
          <select>
            <option value="0">All</option>
            <option value="1">Newest Post</option>
            <option value="2">Oldest Post</option>
            <option value="3">Most Relevant</option>
            <option value="4">Highest Paid</option>
          </select>
        </div>
      </div>
      
      <div className="wrapper">
        <PostCard active setActive/>
        <PostCard active setActive/>
        <PostCard active setActive/>
        <PostCard active setActive/>
      </div>
    </div>
  )
}
