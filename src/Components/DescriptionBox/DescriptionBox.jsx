import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
    </div>
    <div className="descriptionbox-description">
        <p>An online-shoping website is an online platform (just like the name) that facilitate the 
            buying and selling of products or services over the internet. it 
            serves as a virtual marketplace where a businesses and individuals can 
            showcase their products, interact with customers and conduct 
            transaction without the need for a physical presence. online-shoping 
            websites have gained immense popularity due to their convenience, 
            accessibility and the reach they offer.</p>
        <p>Online-shoping websites typically, display products or services along with 
            detailed description, image, prices, and any available variations
            (e.g size, colors). Each product usually has its own dedicated page with 
            relevant information.
            </p>
    </div>
    </div>
  )
}

export default DescriptionBox