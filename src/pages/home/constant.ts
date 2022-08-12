import { isBrowser, isMobileOnly } from 'react-device-detect';

// ICONS
import iconConsulting from 'assets/icon/icon-consulting.svg';
import iconDesign from 'assets/icon/icon-design.svg';
import iconTraining from 'assets/icon/icon-training.svg';
import iconImplementation from 'assets/icon/icon-implementation.svg';
// Plan
import iconPlanFree from 'assets/icon/plan-free.svg';
import iconPlanStarter from 'assets/icon/plan-starter.svg';
import iconPlanPro from 'assets/icon/plan-pro.svg';
import iconPlanEnterprise from 'assets/icon/plan-enterprise.svg';
//
import { CaseStudyProps } from './components/CaseStudyCard';
//
import whyUs1Icon from 'assets/icon/why-us-1.svg';
import whyUs2Icon from 'assets/icon/why-us-2.svg';
import whyUs3Icon from 'assets/icon/why-us-3.svg';

//Cutom solution
import customSolutionImg1 from 'assets/img/custom-solution-1.png';
import customSolutionImg2 from 'assets/img/custom-solution-2.png';
import customSolutionImg3 from 'assets/img/custom-solution-3.png';
import customSolutionTabletImg1 from 'assets/img/custom-solution-tablet-1.png';
import customSolutionTabletImg2 from 'assets/img/custom-solution-tablet-2.png';
import customSolutionTabletImg3 from 'assets/img/custom-solution-tablet-3.png';
import customSolutionMobleImg1 from 'assets/img/custom-solution-moble-1.png';
import customSolutionMobleImg2 from 'assets/img/custom-solution-moble-2.png';
import customSolutionMobleImg3 from 'assets/img/custom-solution-moble-3.png';

import customSolutionIcon1 from 'assets/icon/custom-solution-icon-1.png';
import customSolutionIcon2 from 'assets/icon/custom-solution-icon-2.png';
import customSolutionIcon3 from 'assets/icon/custom-solution-icon-3.png';

// Features
import featuresIcon1 from 'assets/icon/features-Icon1.png';
import featuresIcon2 from 'assets/icon/features-Icon2.png';
import featuresIcon3 from 'assets/icon/features-Icon3.png';
import featuresIcon4 from 'assets/icon/features-Icon4.png';
import featuresIcon5 from 'assets/icon/features-Icon5.png';
import featuresIcon6 from 'assets/icon/features-Icon6.png';

//Integration
import mapbox from 'assets/logo/mapbox-logo.png';
import shapespark from 'assets/logo/shapespark-logo.png';
import sketchfab from 'assets/logo/sketchfab-logo.png';
import typeform from 'assets/logo/typeform-logo.png';
import youtube from 'assets/logo/youtube-logo.png';
import googleAnalytics from 'assets/logo/google-analytics-logo.png';
import mapboxMobile from 'assets/logo/mapbox.png';
import shapesparkMobile from 'assets/logo/shapespark.png';
import sketchfabMobile from 'assets/logo/sketchfab.png';
import typeformMobile from 'assets/logo/typeform.png';
import youtubeMobile from 'assets/logo/youtube.png';
import googleAnalyticsMobile from 'assets/logo/google-analytics.png';

export interface HwchyProps {
  name: string;
  description: string;
  iconUrl: string;
}

export interface PlanProps {
  name: string;
  iconUrl: string;
  timeLimit: string | number;
  timeUnit: string;
  resourceLimit: string;
  currencyUnit: string;
  feature: Array<{
    name: string;
    hasFeat: boolean;
  }>;
  isHighlight: boolean;
}

export interface CustomSolutionProps {
  content: string;
  key: number;
  imgUrl: string;
  iconSrc: string;
}

export interface ContactUsSelect {
  value: string;
  name: string;
}

export interface FeaturesProps {
  content: string;
  icon: string;
}

export interface IntegrationProps {
  name: string;
  imgUrl: string;
}

export const HWCHY_LIST: Array<HwchyProps> = [
  {
    name: 'Consulting',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    iconUrl: iconConsulting,
  },
  {
    name: 'Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    iconUrl: iconDesign,
  },
  {
    name: 'Implementation',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    iconUrl: iconImplementation,
  },
  {
    name: 'Training',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    iconUrl: iconTraining,
  },
];

export const WHY_US_LIST: Array<HwchyProps> = [
  {
    name: 'Experience',
    description:
      'With many years of experience in digital transformation solutions consulting as well as software development, our team also obtained specialized certifications. We believe that our experience will bring you the best value.',
    iconUrl: whyUs1Icon,
  },
  {
    name: 'Expertise',
    description:
      'We have successfully implemented many projects in different areas for our customers. Based our successful projects, we believe that we are the reliable companion for you in the development of management solutions.',
    iconUrl: whyUs2Icon,
  },
  {
    name: 'Engagement',
    description:
      'With many years of experience in consulting and developing software solutions, we have optimized the working processes according to the best method. This has helped us to complete services for many customers with high efficiency.',
    iconUrl: whyUs3Icon,
  },
];

export const CUSTOM_SOLUTIONS: Array<CustomSolutionProps> = [
  {
    content: 'integrate_Tour_3Ds_into_mobile_apps_websites',
    imgUrl: isBrowser
      ? customSolutionImg1
      : isMobileOnly
        ? customSolutionMobleImg1
        : customSolutionTabletImg1,
    iconSrc: customSolutionIcon1,
    key: 1,
  },
  {
    content: 'launch_a_custom_VR_app_in_app_stores',
    iconSrc: customSolutionIcon2,
    imgUrl: isBrowser
      ? customSolutionImg2
      : isMobileOnly
        ? customSolutionMobleImg2
        : customSolutionTabletImg2,
    key: 2,
  },
  {
    content: 'develop_fully_custom_3D_experiences',
    iconSrc: customSolutionIcon3,
    imgUrl: isBrowser
      ? customSolutionImg3
      : isMobileOnly
        ? customSolutionMobleImg3
        : customSolutionTabletImg3,
    key: 3,
  },
];

export const PLAN_PRICING_LIST: Array<PlanProps> = [
  {
    name: 'Free',
    timeLimit: 'No Time Limit',
    timeUnit: '',
    iconUrl: iconPlanFree,
    isHighlight: false,
    resourceLimit: '1 Tour - 4 Scenes',
    currencyUnit: '',
    feature: [
      {
        name: 'Work on all devices',
        hasFeat: true,
      },
      {
        name: '4K Images',
        hasFeat: true,
      },
      {
        name: 'Gyro mode',
        hasFeat: true,
      },
      {
        name: 'Shared & Embed every where',
        hasFeat: true,
      },
      {
        name: 'Branding',
        hasFeat: false,
      },
      {
        name: 'Ambient Audio',
        hasFeat: false,
      },
      {
        name: 'Analytics',
        hasFeat: false,
      },
    ],
  },
  {
    name: 'Starter',
    timeLimit: 20,
    timeUnit: 'month',
    iconUrl: iconPlanStarter,
    isHighlight: false,
    resourceLimit: '5 Tour - 20 Scenes',
    currencyUnit: '$',

    feature: [
      {
        name: 'Work on all devices',
        hasFeat: true,
      },
      {
        name: '4K Images',
        hasFeat: true,
      },
      {
        name: 'Gyro mode',
        hasFeat: true,
      },
      {
        name: 'Shared & Embed every where',
        hasFeat: true,
      },
      {
        name: 'Branding',
        hasFeat: true,
      },
      {
        name: 'Ambient Audio',
        hasFeat: true,
      },
      {
        name: 'Analytics',
        hasFeat: false,
      },
    ],
  },
  {
    name: 'Pro',
    timeLimit: 100,
    timeUnit: 'month',
    iconUrl: iconPlanPro,
    isHighlight: true,
    resourceLimit: '25 Tour - 100 Scenes',
    currencyUnit: '$',

    feature: [
      {
        name: 'Work on all devices',
        hasFeat: true,
      },
      {
        name: '4K Images',
        hasFeat: true,
      },
      {
        name: 'Gyro mode',
        hasFeat: true,
      },
      {
        name: 'Shared & Embed every where',
        hasFeat: true,
      },
      {
        name: 'Branding',
        hasFeat: true,
      },
      {
        name: 'Ambient Audio',
        hasFeat: true,
      },
      {
        name: 'Analytics',
        hasFeat: true,
      },
    ],
  },
  {
    name: 'Enterprise',
    timeLimit: 'Call For Quote',
    timeUnit: '',
    iconUrl: iconPlanEnterprise,
    isHighlight: false,
    resourceLimit: 'Flexible Investment',
    currencyUnit: '',

    feature: [
      {
        name: 'Unique & Innovative Product',
        hasFeat: true,
      },
      {
        name: 'Suit with Specific Needs',
        hasFeat: true,
      },
      {
        name: 'Higher ROI',
        hasFeat: true,
      },
    ],
  },
];

export const CONTACT_US_SELECT: Array<ContactUsSelect> = [
  {
    value: 'I_want_to_access_the_Vizion_platform_and_build_my_own_tours',
    name: 'Option1',
  },
  {
    value: 'I_want_to_talk_to_someone_about_having_a_tour_built_for_me',
    name: 'Option2',
  },
  {
    value: 'I_want_to_talk_to_someone_about_a_custom_3D_solution',
    name: 'Option3',
  },
];

export const FEATURES: Array<FeaturesProps> = [
  {
    content: 'easily_build_custom_360_tours_fully_hosted_in_the_cloud',
    icon: featuresIcon1,
  },
  {
    content: 'show_various_versions_of_a_scene',
    icon: featuresIcon2,
  },
  {
    content: 'add_info_beacons_audio_video_and_images_to_your_scenes',
    icon: featuresIcon3,
  },
  {
    content: 'add_3D_objects_using_SketchFab',
    icon: featuresIcon4,
  },
  {
    content: 'add_custom_2D/3D_maps_to_your_tour',
    icon: featuresIcon5,
  },
  {
    content: 'integrate_existing_assets_using_third-party_formats',
    icon: featuresIcon6,
  },
];

export const INTEGRATION: Array<IntegrationProps> = [
  {
    name: 'mapbox',
    imgUrl: isMobileOnly ? mapboxMobile : mapbox,
  },
  {
    name: 'shapspark',
    imgUrl: isMobileOnly ? shapesparkMobile : shapespark,
  },
  {
    name: 'sketchfab',
    imgUrl: isMobileOnly ? sketchfabMobile : sketchfab,
  },
  {
    name: 'typeform',
    imgUrl: isMobileOnly ? typeformMobile : typeform,
  },
  {
    name: 'youtube',
    imgUrl: isMobileOnly ? youtubeMobile : youtube,
  },
  {
    name: 'googleAnalytics',
    imgUrl: isMobileOnly ? googleAnalyticsMobile : googleAnalytics,
  },
];
