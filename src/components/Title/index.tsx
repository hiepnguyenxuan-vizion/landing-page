import classNames from 'classnames';
import VzHeaderIcon from 'components/VzHeaderIcon';
import React from 'react';
import { isBrowser, isTablet } from 'react-device-detect';

export interface TitleProps {
  title: string;
  className?: string;
  titleClassName?: string;
  iconColor?: string;
}

const Title: React.FC<TitleProps> = ({
  title,
  className,
  titleClassName,
  iconColor,
}) => {
  return (
    <div
      className={`${isTablet && 'align-items-center d-flex'}  vz-title ${isBrowser && 'vz-title--desktop center-items'
        } ${className}`}
    >
      <VzHeaderIcon iconColor={iconColor} />
      <h2
        className={classNames('m-0', {
          titleClassName: Boolean(titleClassName),
          'px-3': isBrowser,
        })}
      >
        {title}
      </h2>
    </div>
  );
};

export default Title;
