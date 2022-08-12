import React, { useEffect } from 'react';

import LetHaveAChat from 'components/LetHaveAChat';

import Integration from 'components/Integration';
import ACEAndRealEstate from 'components/ACEAndRealEstate';
import TravelAndTourism from 'components/TravelAndTourism';
import CustomSolution from 'components/CustomSolution';
import Banner from 'components/Banner';
import Features from 'components/Features';

export interface HomeProps { }

const Home: React.FC<HomeProps> = () => {
  //Change header background
  useEffect(() => {
    const secondBlock = document.getElementById('features')
    const header = document.getElementById('header')
    const headerHeight = 61

    const setHeader = () => {
      const scrollPoint = window.pageYOffset + headerHeight
      if (secondBlock) {
        let blockPoint = 61 - (scrollPoint - secondBlock?.offsetTop)
        if (blockPoint <= 0) { blockPoint = 0 }

        if (scrollPoint > secondBlock.offsetTop) {
          header?.setAttribute('style', 'background-color: #000000; margin-top: 0;animation: fadeIn 1s')
        } else {
          header?.setAttribute('style', `background-color: transparent;`)
        }
      }
      window.requestAnimationFrame(setHeader)
    }
    window.requestAnimationFrame(setHeader)
  }, [])

  return (
    <>
      <Banner />
      <Features />
      <ACEAndRealEstate />
      <TravelAndTourism />
      <CustomSolution />
      <LetHaveAChat />
      <Integration />
    </>
  );
};

export default Home;
