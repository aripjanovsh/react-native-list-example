import {Dimensions, Platform} from 'react-native';

const {height, width} = Dimensions.get('window');

function isIphoneX() {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (height === 812 || width === 812 || height === 896 || width === 896)
  );
}

export const PLATFORM_OS = Platform.OS;

export const IS_IOS = PLATFORM_OS === 'ios';
export const IS_IPHONE_X = isIphoneX();
export const DEVICE_HEIGHT = height;
export const DEVICE_WIDTH = width;
