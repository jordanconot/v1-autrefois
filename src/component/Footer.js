import React from 'react';


function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href='https://www.instagram.com/explore/locations/1500555416822726/' target='_blank'>
        <img src='./img/iconinsta.svg' className=''></img>
        </a>
        <a href='https://m.facebook.com/profile.php?id=100067896482908&eav=AfZg4_pRFQgnpZMRJOn3JRzsRLA9dOpnOLaKt70giKavbEY6Hwl00JdldYzm1h1MtCk&ref=py_c&paipv=0&_rdr' target='_blank'>    
        <img src='./img/iconfacebook.svg'></img>
        </a>
      </div>
      <p> &copy; 202 pizzeria.d'autrefois</p>
    </div>
  );
}

export default Footer;