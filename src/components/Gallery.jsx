import React, { useState, useRef } from 'react';
import './Gallery.css'
const Gallery = () => {
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const newImages = Array.from(e.target.files).map(file => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  
  const handleButtonClick = () => {
    fileInputRef.current.click(); 
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <span>Gallery</span>
        <button className="add-image-button" onClick={handleButtonClick}>+ Add Image</button>
        <input
          type="file"
          multiple
          ref={fileInputRef}
          onChange={handleImageUpload}
          className="image-input"
          style={{ display: 'none' }} 
        />
      </div>

      <div className="gallery-images">
        <button className="arrow-left"><svg width="115" height="115" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dd_30196_51)">
<circle cx="53.5" cy="52.5" r="22.5" fill="url(#paint0_linear_30196_51)"/>
</g>
<path d="M46.4022 52.3765H60.5967" stroke="#6F787C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M53.4022 59.3765L46.4022 52.3765L53.4022 45.3765" stroke="#6F787C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<filter id="filter0_dd_30196_51" x="0" y="0" width="115" height="115" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_30196_51"/>
<feOffset dx="4" dy="5"/>
<feGaussianBlur stdDeviation="15"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0628125 0 0 0 0 0.0697768 0 0 0 0 0.075 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_30196_51"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="10" operator="erode" in="SourceAlpha" result="effect2_dropShadow_30196_51"/>
<feOffset dx="-5" dy="-3"/>
<feGaussianBlur stdDeviation="15"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.587708 0 0 0 0 0.745938 0 0 0 0 0.904167 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_30196_51" result="effect2_dropShadow_30196_51"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_30196_51" result="shape"/>
</filter>
<linearGradient id="paint0_linear_30196_51" x1="36.8264" y1="35.366" x2="71.1147" y2="75" gradientUnits="userSpaceOnUse">
<stop stopColor="#303439"/>
<stop offset="1" stopColor="#161718"/>
</linearGradient>
</defs>
</svg>
</button>
        <div className="image-scroll-container">
          {images.length > 0 ? (
            images.map((image, index) => (
              <div key={index} className="gallery-image">
                <img src={image} alt={`Uploaded ${index}`} />
              </div>
            ))
          ) : (
            <p></p>
          )}
        </div>
        <button className="arrow-right">
  <svg width="102" height="115" viewBox="0 0 102 115" fill="none">
    <g filter="url(#filter0_dd_30196_46)">
      <circle cx="53.5" cy="52.5" r="22.5" fill="url(#paint0_linear_30196_46)" />
    </g>
    <path
      d="M60.5968 52.3765H46.4024"
      stroke="#6F787C"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M53.5968 45.3765L60.5968 52.3765L53.5968 59.3765"
      stroke="#6F787C"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <filter
        id="filter0_dd_30196_46"
        x="0"
        y="0"
        width="115"
        height="115"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_30196_46" />
        <feOffset dx="4" dy="5" />
        <feGaussianBlur stdDeviation="15" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0628125 0 0 0 0 0.0697768 0 0 0 0 0.075 0 0 0 1 0"
        />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_30196_46" />
        <feMorphology radius="10" operator="erode" in="SourceAlpha" result="effect2_dropShadow_30196_46" />
        <feOffset dx="-5" dy="-3" />
        <feGaussianBlur stdDeviation="15" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.587708 0 0 0 0 0.745938 0 0 0 0 0.904167 0 0 0 1 0"
        />
        <feBlend mode="normal" in2="effect1_dropShadow_30196_46" result="effect2_dropShadow_30196_46" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_30196_46" result="shape" />
      </filter>
      <linearGradient
        id="paint0_linear_30196_46"
        x1="36.8264"
        y1="35.366"
        x2="71.1147"
        y2="75"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#303439" />
        <stop offset="1" stopColor="#161718" />
      </linearGradient>
    </defs>
  </svg>

</button>
      </div>
    </div>
  );
};

export default Gallery;
