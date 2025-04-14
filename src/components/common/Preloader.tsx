import React from 'react';
import preloaderIMg from '../../../public/assets/img/logo/preloader.svg';
import Image from 'next/image';
import { brand_data } from '@/data/brand-data';

const Preloader = () => {
  return (
    <>
      <div id="loading">
        <div id="loading-center">
          <div id="loading-center-absolute">
            <div className="loading-icon text-center d-flex flex-column align-items-center justify-content-center">
              <p
                style={{
                  fontSize: '30px',
                  fontWeight: 'bold',
                  color: '#000',
                }}
              >
                {brand_data.name}
              </p>
              <Image className="loading-logo" src={preloaderIMg} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
