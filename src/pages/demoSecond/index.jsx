import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from 'assets/gallery/Logo.png';
import { dataGallery } from './constants';
import LocomotiveScroll from 'locomotive-scroll';
import { GalleryItem } from './components/GalleryItem';

import './css/base.css';
import './css/demo.css';

const GalleryDemo = () => {
  const galleryDemo1 = dataGallery.tours.slice(0, 4);
  const galleryDemo2 = dataGallery.tours.slice(4, 8);

  useEffect(() => {
    const lscroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      direction: 'horizontal',
    });

    const loading = setTimeout(() => {
      document.querySelector('.demo-1').classList.remove('loading');
    }, 1000);

    return () => {
      clearTimeout(loading);
      lscroll.destroy();
    };
  }, []);

  return (
    <div className="demo-1 loading">
      <div className="frame">
        <Link to="/">
          <img src={Logo} alt="vizion-logo" className="vizion-logo" />
        </Link>
        <div className="frame__links">
          <p>&lt;&lt;&lt;&ensp; SCROLL &ensp;&gt;&gt;&gt;</p>
        </div>
      </div>
      <main data-scroll-container>
        <div className="content">
          <div className="gallery">
            {galleryDemo1.map((item) => (
              <GalleryItem item={item} key={item.id} />
            ))}

            <div className="gallery__text">
              <span
                className="gallery__text-inner"
                data-scroll
                data-scroll-speed={3}
              >
                FEATURED
              </span>
              <span
                data-scroll
                data-scroll-speed={1}
                className="gallery__text-inner"
              >
                DEMO
              </span>
            </div>

            {galleryDemo2.map((item) => (
              <GalleryItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default GalleryDemo;
