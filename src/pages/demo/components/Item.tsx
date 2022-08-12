import { useRef } from 'react'
import { useScroll, Image } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useSnapshot } from 'valtio'
import { state, damp, ItemProps } from '../constants'

import * as THREE from 'three'

export const Item: React.FC<ItemProps> = ({ index, position, scale, c = new THREE.Color(), getImageIndex, url }) => {
  const ref: any = useRef()
  const hoverRef = useRef(false)
  const scroll = useScroll()
  const { clicked, tours } = useSnapshot(state)
  const over = () => hoverRef.current = false
  const out = () => hoverRef.current = true
  const click = () => {
    state.clicked = index === clicked ? null : index;
    getImageIndex(index);
  }
  
  useFrame((state, delta) => {
    const y = scroll.curve(index / tours.length - 1.5 / tours.length, 4 / tours.length)
    ref.current.material.scale[1] = ref.current.scale.y = damp(ref.current.scale.y, clicked === index ? 5 : 4 + y, 8, delta)
    ref.current.material.scale[0] = ref.current.scale.x = damp(ref.current.scale.x, clicked === index ? 5 : scale[0], 6, delta)
    if (clicked !== null && index < clicked) ref.current.position.x = damp(ref.current.position.x, position[0] - 2, 6, delta)
    if (clicked !== null && index > clicked) ref.current.position.x = damp(ref.current.position.x, position[0] + 2, 6, delta)
    if (clicked === null || clicked === index) ref.current.position.x = damp(ref.current.position.x, position[0], 6, delta)
    ref.current.material.grayscale = damp(ref.current.material.grayscale, hoverRef.current || clicked === index ? 0 : Math.max(0, 1 - y), 6, delta)
    ref.current.material.color.lerp(c.set(hoverRef.current || clicked === index ? 'white' : '#aaa'), hoverRef.current ? 0.3 : 0.1) 
  })

  return (
    <Image
      ref={ref}
      position={position}
      scale={scale && undefined}
      onClick={click}
      onPointerOver={over}
      onPointerOut={out}
      url={url}
    />
  )
}