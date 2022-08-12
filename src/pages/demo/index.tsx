import React, { Suspense,useState } from 'react';
import { Canvas,  useThree } from '@react-three/fiber'
import {  ScrollControls, Scroll } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import { state, ItemsProps } from './constants'
import Logo from 'assets/gallery/Logo.png';
import { Item } from './components/Item';
import { Link } from 'react-router-dom';

const renderHtmlTag = (clicked: null | number, index: null | number, tours: readonly any[], tag: string) => {
  if (clicked === null) return null
  if (tag === "h2") {
    return tours.map(tour => tour.id === index ?
      <h2 className='vz-gallery--title__heading' key={index}>{tour.title}</h2>
      :
      null
    )
  }
  if (tag === "a") {
    return tours.map(tour => tour.id === index ?
      <a
        className='vz-gallery--explore-btn'
        href={tour.link}
        target="_blank"
        rel="noreferrer"
        key={index}
      >
        Explore
      </a>
      :
      null)
  }
}

const Gallery: React.FC = () => {
  const { clicked } = useSnapshot(state)
  const { tours } = useSnapshot(state)
  const [index, setImageIndex] = useState(null)
console.log(setImageIndex);

  return (
    <Suspense fallback={null}>
      <div className='vz-gallery'>
        <div className='vz-gallery--container'>
          <Link to="/" className='vz-gallery-logo'>
            <img className="vz-gallery--logo__image" src={Logo} alt="vizion-logo" />
          </Link>
          <div className='vz-gallery--title'>
            {renderHtmlTag(clicked, index, tours, "h2") || <h2 className='vz-gallery--hide' >Title</h2>}
          </div>
        </div>
        <div className='vz-gallery--canvas'>
          <Canvas
            gl={{ antialias: false }}
            dpr={[1, 1.5]}
            onPointerMissed={() => (state.clicked = null)}
          >
            <Items getImageIndex={setImageIndex} />
          </Canvas>
        </div>
        <div className='vz-gallery--container'>
          <div className='vz-gallery--explore'>
            {renderHtmlTag(clicked, index, tours, "a")}
          </div>
        </div>
      </div>
    </Suspense>
  )
};

const Items: React.FC<ItemsProps> = ({ w = 1, gap = 0.2, getImageIndex, ...props }) => {
  const { tours } = useSnapshot(state)
  const { width } = useThree((state) => state.viewport)
  const xW = w + gap
  
  return (
    <ScrollControls horizontal damping={10} pages={(width - xW + tours.length * xW) / width}>
      <Scroll>
        {tours.map((tour, i) => <Item
          key={i}
          index={i}
          position={[i * xW, 0, 1.5]}
          scale={[w, 4, 1]}
          url={tour.url}
          getImageIndex={getImageIndex}
          {...props}
        />
        )}
      </Scroll>
    </ScrollControls>
  )
}

export default Gallery;
