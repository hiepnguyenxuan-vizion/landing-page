import { IItem } from './type';

export const MENU: Array<IItem> = [
  {
    key: 'homepage',
    name: 'Home',
    path: '/',
  },

  {
    key: 'caseStudy',
    name: 'Case Study',
    path: '/case-study',
    children: [
      {
        key: 'realEstate',
        name: 'Real Estate',
        path: '/real-estate',
      },
      {
        key: 'retails',
        name: 'Retails',
        path: '/retails',
      },
      {
        key: 'others',
        name: 'Others',
        path: '/others',
      },
    ],
  },
  {
    key: 'contactUs',
    name: 'Contact Us',
    path: '/contact-us',
  },
  {
    key: 'becomeAPartner',
    name: 'Become A Partner',
    path: '/become-a-partner',
  },
];
