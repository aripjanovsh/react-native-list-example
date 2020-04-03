import React from 'react';
import {Path, Svg, SvgProps} from 'react-native-svg';
import {Omit} from '../../helpers/DataUtils';
import {Color} from '../../theme/MainTheme';

interface Props extends Omit<SvgProps, 'width' | 'height' | 'viewBox'> {
  size?: number;
  isActive?: boolean;
}

export function PromotionIcon({size = 24, isActive, ...props}: Props) {
  return (
    <Svg {...props} width={size} height={size} viewBox="0 0 21 20">
      <Path
        fill={isActive ? Color.Red : Color.GreyTwo}
        d="M10.3508 16.1L4.35537 19.252L5.50039 12.576L0.650002 7.84801L7.35307 6.874L10.3508 0.799988L13.3485 6.874L20.0516 7.84801L15.2012 12.576L16.3462 19.252L10.3508 16.1ZM6.61319 16.1443L10.3508 14.1794L14.0884 16.1443L13.3745 11.9825L16.3983 9.03503L12.2196 8.42782L10.3508 4.64123L8.48199 8.42782L4.30324 9.03503L7.32701 11.9825L6.61319 16.1443Z"
      />
    </Svg>
  );
}
