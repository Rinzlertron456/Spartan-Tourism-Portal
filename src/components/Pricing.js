import React from 'react'
  
  export default function Pricing(props) {
    return(
      <div>
      <div className="section over-hide">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section text-center py-5 py-md-0">
                <input className="pricing check" type="checkbox" id="pricing" name="pricing" style={{display:'none'}}/>
                <label htmlFor="pricing">
                  <span className="block-diff">
                    societies<span>warriors</span>
                  </span>
                </label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="pricing-wrap">
                        <h4 className="mb-5">WORLD OF SPARTA</h4>
                        <h2>
                          Starts at <sup>$</sup>39 / 4<sup>hrs</sup>
                        </h2>
                        <p className="mb-4">per person</p>
                        <p className="mb-1">
                          <i className="uil uil-location-pin-alt size-22"></i>
                        </p>
                        <p className="mb-3">Free Acropolis Tour</p>
                        <a href="/societies" className="link">
                          Choose Date
                        </a>
                        <div className="img-wrap img-2">
                          <img src="https://th.bing.com/th/id/OIP.vQ3hylwq1NsMBwWHoVbWzgHaE5?pid=ImgDet&w=1049&h=694&rs=1" alt="" />
                        </div>
                        <div className="img-wrap img-1">
                          <img src="https://cdn1.iconfinder.com/data/icons/world-landmark-vol-1/512/32-acropolis-ancient-athens-greece-512.png" alt="" />
                        </div>
                        {/* <div className="img-wrap img-3">
                          <img src="https://assets.codepen.io/1462889/water.png" alt="" />
                        </div> */}
                        <div className="img-wrap img-6">
                          <img src="https://assets.codepen.io/1462889/Stone.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="pricing-wrap">
                        <h4 className="mb-5" style={{color:'white'}}>MIGHT OF SPARTA</h4>
                        <h2 style={{fontSize:'30px'}}>
                          Starts at <sup>$</sup>295 / 20<sup>hrs</sup>
                        </h2>
                        <p className="mb-4">per person</p>
                        <p className="mb-1">
                          <i className="uil uil-location-pin-alt size-22"></i>
                        </p>
                        <p className="mb-4">King Leonidas Tour</p>
                        <a href="/warriors" className="link">
                          Choose Date
                        </a>
                        <div className="img-wrap img-2">
                          <img src="https://media.gazetadopovo.com.br/2022/09/22134408/tile.jpg" alt="" />
                        </div>
                        <div className="img-wrap img-4">
                          <img src="https://s-media-cache-ak0.pinimg.com/736x/7a/0b/5d/7a0b5d124548f95e9dedf90c3f9b4df9.jpg" alt="" />
                        </div>
                        {/* <div className="img-wrap img-5">
                          <img src="https://assets.codepen.io/1462889/Ivy.png" alt="" />
                        </div> */}
                        <div className="img-wrap img-7">
                          <img src="https://i.pinimg.com/originals/f7/2d/77/f72d779bfac86f465f8544123d235132.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
