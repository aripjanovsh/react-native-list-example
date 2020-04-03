import React from 'react';
import {Path, Svg, SvgProps} from 'react-native-svg';
import {Omit} from '../../helpers/DataUtils';
import {Color} from '../../theme/MainTheme';

interface Props extends Omit<SvgProps, 'width' | 'height' | 'viewBox'> {
  size?: number;
  isActive?: boolean;
}

export function ProfileIcon({size = 24, isActive, ...props}: Props) {
  return (
    <Svg {...props} width={size} height={size} viewBox="0 0 18 20">
      <Path
        fill={isActive ? Color.Red : Color.GreyTwo}
        d="M9 9.14999C11.3472 9.14999 13.25 7.2472 13.25 4.89999C13.25 2.55278 11.3472 0.649994 9 0.649994C6.65279 0.649994 4.75 2.55278 4.75 4.89999C4.75 7.2472 6.65279 9.14999 9 9.14999ZM9 10.85C13.6944 10.85 17.5 14.1286 17.5 18.1731C15.6786 19.7423 2.32143 19.7423 0.5 18.1731C0.5 14.1286 4.30558 10.85 9 10.85ZM9 12.55C13.25 12.55 15.8 15.95 15.8 16.9438C14.3429 17.8854 3.65714 17.8854 2.2 16.9438C2.2 15.95 4.75 12.55 9 12.55ZM11.55 4.89999C11.55 6.30832 10.4083 7.45 9 7.45C7.59167 7.45 6.45 6.30832 6.45 4.89999C6.45 3.49167 7.59167 2.34999 9 2.34999C10.4083 2.34999 11.55 3.49167 11.55 4.89999Z"
      />
    </Svg>
  );
}
