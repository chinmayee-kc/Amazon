import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Sliders = () => {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div 
        className={className}
        style={{ ...style, display: 'block', position: 'absolute', right: '10px', top: '30%', transform: 'translateY(-50%)', zIndex: '1' }}
        onClick={onClick}
      />
    );
  };
  
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', position: 'absolute', left: '10px', top: '30%', transform: 'translateY(-50%)', zIndex: '1' }}
        onClick={onClick}
      />
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="slider-container">
    <Slider {...settings}>
      <div >
        <img
           className='slider-container img '
          src='https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/2x_SSpc._CB560317064_.jpg'
          alt='slider 1'
        />
      </div>
      <div  >
        <img
          className='slider-container img '
          src='https://images-eu.ssl-images-amazon.com/images/G/31/img24/AmazonPay/Travel/PC_Hero_BAU/DF_PC_Hero_3000x1200._CB583399235_.jpg'
          alt='slider 2'
        />
      </div>
      <div>
        <img
          className='slider-container img '
          src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/19Apr/D118015762_INWLD_Redmi13C_5G_BAU_tallhero_1500x600._CB560830965_.jpg'
          alt='slider 3'
        />
      </div>
      <div>
        <img
          className='slider-container img '
          src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/3000x1200-toys-unrec2x-NEW._CB579491525_.jpg'
          alt='slider 4'
        />
      </div>
     
      <div>
        <img
          className='slider-container img '
          src='https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/Madhav/Apr/Nokia/D121321585_BAU_Nokia_HMD_Launch_G425G_tallhero_3000x1200._CB560840138_.jpg'
          alt='slider 5'
        />
      </div>
      <div>
        <img
          className='slider-container img '
          src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/NoteSeiers/D86618544_WLD_BAU_MotorolaKv_40ultra_DesktopTallHero_3000x1200._CB561980070_.jpg'
          alt='slider 6'
        />
      </div>
    </Slider>
    </div>
  );
};
