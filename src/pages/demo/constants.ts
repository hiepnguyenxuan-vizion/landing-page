import * as THREE from 'three';
import { proxy } from 'valtio';

//Gallery Images
import successSoftware8 from 'assets/gallery/success-software-8-ltn.png';
import aquacityVillaHouse from 'assets/gallery/aquacity-villa-house.png';
import aquacityLuxuryHouse from 'assets/gallery/aquacity-luxury-house.png';
import rangrangCoffee from 'assets/gallery/rang-rang-coffee.png';
import surveyMatterport from 'assets/gallery/survey-matterport.jpg';
import hamburgMatterport from 'assets/gallery/hamburg-matterport.jpg';
import houseMatterport from 'assets/gallery/house-matterport.jpg';
import houseDemo from 'assets/gallery/houseDemo.jpg';

export const damp = THREE.MathUtils.damp;

export interface TourProps {
  id: number;
  url: string;
  title: string;
  link: string;
}

export interface Proxy {
  clicked: number | null;
  tours: Array<TourProps>;
}

export interface ItemProps {
  key: number;
  index: number;
  position: [number, number, number];
  scale: [number, number, number];
  url: string;
  getImageIndex: Function;
  c?: any;
  props?: string;
}

export interface ItemsProps {
  w?: number;
  gap?: number;
  getImageIndex: Function;
  props?: string;
}

export const state: Proxy = proxy({
  clicked: null,
  tours: [
    {
      id: 0,
      url: successSoftware8,
      title: 'Success Software Office 8 LTN',
      link: 'https://view.vizion.space/success-software-office',
    },

    {
      id: 1,
      url: aquacityVillaHouse,
      title: 'Aquacity Villa House',
      link: 'https://view.vizion.space/aquacity-house-villa',
    },
    {
      id: 2,
      url: aquacityLuxuryHouse,
      title: 'Aquacity Luxury House',
      link: 'https://view.vizion.space/aquacity-luxury-house',
    },
    {
      id: 3,
      url: rangrangCoffee,
      title: 'Rang Rang Coffee',
      link: 'https://view.vizion.space/rang-rang-coffee',
    },
    {
      id: 4,
      url: surveyMatterport,
      title: 'Survey Matterport',
      link: 'https://view.vizion.space/vizdemo/welcome/Home-Yard/Survey-for-the-tour',
    },
    {
      id: 5,
      url: hamburgMatterport,
      title: 'Hamburg Canal Video Matterport',
      link: 'https://view.vizion.space/ea822070-946b-47af-b508-c8bbe2d8f2a8/welcome/Out-Door-Hamburg-Canals-/Hamburg-Canal-Video',
    },
    {
      id: 6,
      url: houseMatterport,
      title: 'House Matterport',
      link: 'https://view.vizion.space/vizdemo/welcome/Home-Yard/House-Matterport',
    },
    {
      id: 7,
      url: houseDemo,
      title: 'House Demo',
      link: 'https://three-fiber-chi.vercel.app',
    },
  ],
});
