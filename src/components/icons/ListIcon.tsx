import React from 'react';
import {Path, Svg, SvgProps} from 'react-native-svg';
import {Omit} from '../../helpers/DataUtils';
import {Color} from '../../theme/MainTheme';

interface Props extends Omit<SvgProps, 'width' | 'height' | 'viewBox'> {
  size?: number;
  isActive?: boolean;
}

export function ListIcon({size = 24, isActive, ...props}: Props) {
  return (
    <Svg {...props} width={size} height={size} viewBox="0 0 20 14">
      <Path
        fill={isActive ? Color.Red : Color.GreyTwo}
        d="M1.5 0.200012C1.03056 0.200012 0.650002 0.58057 0.650002 1.05001C0.650002 1.51945 1.03056 1.90001 1.5 1.90001H18.5C18.9694 1.90001 19.35 1.51945 19.35 1.05001C19.35 0.58057 18.9694 0.200012 18.5 0.200012H1.5ZM0.650002 7.00001C0.650002 6.53057 1.03056 6.15001 1.5 6.15001H18.5C18.9694 6.15001 19.35 6.53057 19.35 7.00001C19.35 7.46945 18.9694 7.85001 18.5 7.85001H1.5C1.03056 7.85001 0.650002 7.46945 0.650002 7.00001ZM0.650002 12.95C0.650002 12.4806 1.03056 12.1 1.5 12.1H18.5C18.9694 12.1 19.35 12.4806 19.35 12.95C19.35 13.4195 18.9694 13.8 18.5 13.8H1.5C1.03056 13.8 0.650002 13.4195 0.650002 12.95Z"
      />
    </Svg>
  );
}
