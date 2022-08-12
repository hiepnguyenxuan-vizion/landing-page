import { COLORS } from 'consts';
import React from 'react';

export interface VzLogoProps {
  textColor?: string;
  logoColor?: string;
  width?: number;
}

const VzLogo: React.FC<VzLogoProps> = ({ textColor, logoColor }) => {
  return (
    <svg
      id="vizion_logo"
      data-name="vizion logo"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      viewBox="0 0 250.581 70"
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Rectangle_2"
            data-name="Rectangle 2"
            width="100%"
            height="100%"
            fill="#fff"
          />
        </clipPath>
      </defs>
      <g id="Group_1" data-name="Group 1">
        <path
          id="Path_1"
          data-name="Path 1"
          d="M38.438,41.735c-.4-.376-.794-.757-1.172-1.133l-.328-.4a8.6,8.6,0,0,1,.223-10.7l.072-.079c.387-.386.794-.78,1.244-1.2A62.87,62.87,0,0,1,69.886,12.236q-.3-1.22-.627-2.428-.259-.956-.54-1.9A12.379,12.379,0,0,0,55.935.062s-.005,0-.007,0q-.935.156-1.861.331A98.642,98.642,0,0,0,4.7,25.464q-.986.928-1.947,1.883A11.964,11.964,0,0,0,2.8,42.684a.008.008,0,0,0,0,.005q.907.9,1.836,1.774a98.632,98.632,0,0,0,49.245,25.1q1.094.207,2.2.392.543.048,1.1.049A12.3,12.3,0,0,0,68.7,62.144q.294-.994.567-2,.324-1.19.618-2.392l-.013,0A62.866,62.866,0,0,1,38.438,41.735"
          transform="translate(0)"
          fill={logoColor}
        />
        <path
          id="Path_2"
          data-name="Path 2"
          d="M178.924,97.459c-.106,0-.215,0-.322-.011-.36-.061-.729-.127-1.1-.2l-.087-.016a58.774,58.774,0,0,1-29.386-14.977c-.335-.315-.665-.633-.987-.951a4.63,4.63,0,0,1-.025-5.747c.328-.325.673-.657,1.05-1.012A58.773,58.773,0,0,1,177.5,59.59l.038-.007c.3-.056.577-.106.848-.153h.188l.111-.033c.078,0,.157-.006.237-.006a4.784,4.784,0,0,1,4.43,2.971c.108.37.2.706.289,1.024a57.381,57.381,0,0,1,.005,30.05c-.1.349-.2.709-.3,1.072a4.788,4.788,0,0,1-4.421,2.95"
          transform="translate(-106.772 -43.425)"
          fill={logoColor}
        />
        <path
          id="Path_3"
          data-name="Path 3"
          d="M358.228,63.713,347.8,94.411a3.34,3.34,0,0,1-3.163,2.266h-2.252a3.34,3.34,0,0,1-3.161-2.261l-10.482-30.7a4.394,4.394,0,1,1,8.38-2.642l5.094,17.6a1.344,1.344,0,0,0,2.583,0l5.042-17.59a4.394,4.394,0,0,1,4.224-3.184h0a4.394,4.394,0,0,1,4.161,5.808"
          transform="translate(-240.191 -42.338)"
          fill={textColor}
        />
        <path
          id="Path_4"
          data-name="Path 4"
          d="M462.639,97.031h0a4.482,4.482,0,0,1-4.482-4.482V62.872a4.482,4.482,0,0,1,8.964,0V92.549a4.482,4.482,0,0,1-4.482,4.482"
          transform="translate(-334.989 -42.693)"
          fill={textColor}
        />
        <path
          id="Path_5"
          data-name="Path 5"
          d="M534.572,92.875a3.8,3.8,0,0,1-3.8,3.8H513.126a8.714,8.714,0,0,1-5.413-1.46,4.882,4.882,0,0,1-1.9-4.108,9.206,9.206,0,0,1,2.275-5.568l14.613-17.835a1.344,1.344,0,0,0-1.04-2.2h-9.771a3.8,3.8,0,0,1,0-7.6h18.392a4.975,4.975,0,0,1,3.883,8.086l-16.741,20.9a1.344,1.344,0,0,0,1.049,2.185H530.77A3.8,3.8,0,0,1,534.572,92.875Z"
          transform="translate(-369.837 -42.338)"
          fill={textColor}
        />
        <path
          id="Path_6"
          data-name="Path 6"
          d="M632.982,96.677h0a4.482,4.482,0,0,1-4.482-4.482V62.387a4.482,4.482,0,0,1,8.964,0V92.195a4.482,4.482,0,0,1-4.482,4.482"
          transform="translate(-459.539 -42.338)"
          fill={textColor}
        />
        <path
          id="Path_7"
          data-name="Path 7"
          d="M712.2,75.643q0,12.563-4.827,16.84-4.07,3.667-11.792,3.667-9.862,0-13.309-5.7-3.242-5.228-3.241-14.8,0-8.963,3.241-14.056,3.585-5.7,13.068-5.7t13.171,4.991q3.689,4.991,3.69,14.769m-8.965,2.037V74.15q0-5.024-1.483-7.673t-6.172-2.648q-7.586,0-7.585,10.05v3.531q0,10.8,7.585,10.8,4.9,0,6.413-3.6a17.318,17.318,0,0,0,1.241-6.926"
          transform="translate(-496.488 -40.861)"
          fill={textColor}
        />
        <path
          id="Path_8"
          data-name="Path 8"
          d="M831.525,54.722h0A15.5,15.5,0,0,0,815.906,70.1V89.867a4.482,4.482,0,1,0,8.964,0V69.493a5.925,5.925,0,0,1,5.97-5.879h1.369a5.925,5.925,0,0,1,5.971,5.879V89.867a4.482,4.482,0,1,0,8.964,0V70.1a15.5,15.5,0,0,0-15.62-15.38"
          transform="translate(-596.564 -40.011)"
          fill={textColor}
        />
      </g>
    </svg>
  );
};

VzLogo.defaultProps = {
  textColor: '#ffffff',
  logoColor: COLORS.VZ_RED,
};

export default VzLogo;