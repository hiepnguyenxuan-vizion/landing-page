import { COLORS } from 'consts';
import React from 'react';

export interface VzHeaderIconProps {
  iconColor?: string;
}

const VzHeaderIcon: React.FC<VzHeaderIconProps> = ({
  iconColor = COLORS.VZ_RED,
}) => {
  return (
    <svg
      id="icon-header"
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="52"
      viewBox="0 0 63 52"
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Rectangle_142"
            data-name="Rectangle 142"
            width="63"
            height="52"
            fill="none"
          />
        </clipPath>
      </defs>
      <g
        id="Mask_Group_10"
        data-name="Mask Group 10"
      >
        <g
          id="Group_586"
          data-name="Group 586"
          transform="translate(-823.027 -256.5) rotate(180)"
        >
          <path
            id="Path_425"
            data-name="Path 425"
            d="M182.322,101.391c-.117,0-.237,0-.356-.012-.4-.068-.8-.141-1.213-.217l-.1-.017A64.846,64.846,0,0,1,148.236,84.62c-.37-.348-.734-.7-1.089-1.05a5.108,5.108,0,0,1-.028-6.34c.362-.358.742-.725,1.159-1.117a64.844,64.844,0,0,1,32.477-16.5l.042-.008c.328-.061.637-.117.935-.168h.207l.122-.036c.086,0,.173-.006.261-.006a5.278,5.278,0,0,1,4.887,3.278c.119.409.224.779.319,1.129a63.309,63.309,0,0,1,.006,33.154c-.1.386-.217.782-.335,1.183a5.283,5.283,0,0,1-4.878,3.255"
            transform="translate(-1028.316 -362.891)"
            fill="none"
            stroke={iconColor}
            strokeWidth="3"
          />
          <path
            id="Path_426"
            data-name="Path 426"
            d="M175.165,93.109c-.094,0-.19,0-.286-.01-.319-.054-.646-.113-.974-.175l-.077-.014A52.058,52.058,0,0,1,147.8,79.645c-.3-.279-.589-.561-.874-.843a4.1,4.1,0,0,1-.022-5.09c.29-.288.6-.582.93-.9a52.057,52.057,0,0,1,26.073-13.248l.033-.006c.263-.049.511-.094.751-.135h.166l.1-.029c.069,0,.139-.005.21-.005a4.237,4.237,0,0,1,3.923,2.632c.1.328.18.625.256.907a50.825,50.825,0,0,1,0,26.616c-.084.31-.174.628-.269.95a4.241,4.241,0,0,1-3.916,2.613"
            transform="translate(-1007.147 -358.742)"
            fill="none"
            stroke={iconColor}
            strokeWidth="3"
          />
        </g>
      </g>
    </svg>
  );
};

export default VzHeaderIcon;
