import React from "react";
import "./Activity.css";
import { images } from '../../constants'


export const Box = () => {
    return (
      <div className="box">
        <div className="page-wrapper">
          <div className="page">
            <div className="group">
              <div className="div">
                <p className="text-wrapper">
                  Helping underprivileged children and widows, in particular, but not exclusively in Sri Lanka. Bring the
                  gospel of Jesus Christ, especially but not exclusively to the municipality of Wageningen and the
                  surrounding area. Visiting hospitals and prisons to pray
                </p>
                <h1 className="h-1">Our Activities</h1>
              </div>
              <div className="group-2">
                <img
                  className="spirituality"
                  alt="Spirituality"
                  src={images.About1}
                />
                <div className="group-3">
                  <div className="text-wrapper-2">Diaconal Activities</div>
                  <p className="text-wrapper-3">
                    support of underprivileged children and widows, specifically but not exclusively in sri lanka
                  </p>
                </div>
              </div>
              <div className="group-4">
                <img
                  className="spirituality"
                  alt="Spirituality"
                  src={images.About1}
                />
                <div className="group-5">
                  <div className="text-wrapper-2">Other Activities</div>
                  <div className="text-wrapper-3">
                    Yearly seminars
                    <br />
                    Incidental conferences
                  </div>
                </div>
              </div>
              <div className="group-6">
                <img className="img" alt="Spirituality" src={images.About1} />
                <div className="group-7">
                  <div className="text-wrapper-2">Pastoral Activities</div>
                  <p className="text-wrapper-3">
                    Weekly Church services in Wageningen
                    <br />
                    Regular bible studies in Wageningen
                    <br />
                    Visiting hospitals and prisons around Wageningen to pray
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Box;
