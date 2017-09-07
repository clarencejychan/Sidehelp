import React, {Component} from 'react';
import TrashIcon from 'react-icons/lib/ti/trash';
import ShoppingCartIcon from 'react-icons/lib/ti/shopping-cart';
import SpannerIcon from 'react-icons/lib/ti/spanner-outline';

import './style.scss';

const Info = () => {
  return(
    <div className="homepage-info homepage-inner-container">
      <div className="homepage-how-it-works-content">
        <h2 className="how-it-works-content-title">
          How it works
        </h2>
      </div>
      <ul className="how-it-works-content-boxes">
        <li className="how-it-works-items">
          <TrashIcon size={'100px'} />
          <div className="how-it-works-items-text">
            <h3 className="how-it-works-items-text-title">
              BLURB ABOUT HOW IT WORKS
            </h3>
            <p>
              TEXT ABOUT HOW THIS WORKS AND HOW THIS IS GOING TO BE GREAT AND AWESOME AND WHAT IT CAN DO
            </p>
          </div>
        </li>
        <li className="how-it-works-items">
          <ShoppingCartIcon size={'100px'} />
          <div className="how-it-works-items-text">
            <h3 className="how-it-works-items-text-title">
              BLURB ABOUT HOW IT WORKS
            </h3>
            <p>
              TEXT ABOUT HOW THIS WORKS AND HOW THIS IS GOING TO BE GREAT AND AWESOME AND WHAT IT CAN DO
            </p>
          </div>
        </li>
        <li className="how-it-works-items">
          <SpannerIcon size={'100px'} />
          <div className="how-it-works-items-text">
            <h3 className="how-it-works-items-text-title">
              BLURB ABOUT HOW IT WORKS
            </h3>
            <p>
              TEXT ABOUT HOW THIS WORKS AND HOW THIS IS GOING TO BE GREAT AND AWESOME AND WHAT IT CAN DO
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Info;
