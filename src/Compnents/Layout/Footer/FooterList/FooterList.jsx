import React from 'react';
import './FooterList.css';
import { Link } from 'react-router-dom';

const FooterList = () => {
  return (
    <div className='list'>
      <p className='title'>أهم الروابط</p>
      <ul>
        <li><Link to="/About">الأسئلة الشائعة</Link></li>
        <li><Link to="/Banks">الحسابات البنكية للجمعية</Link></li>
        <li><Link to="/Payement">طرق التبرع</Link></li>
        <li><a href='#'>حساباتنا في البنوك</a></li>
        <li><a href='#'>أخبارنا</a></li>
        <li><a href='#'>فروعنا</a></li>
      </ul>
    </div>
  );
}

export default FooterList;
