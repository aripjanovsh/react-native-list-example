import {Dimensions, Platform} from 'react-native';

const {height, width} = Dimensions.get('window');

export const PLATFORM_OS = Platform.OS;

export const IS_IOS = PLATFORM_OS === 'ios';

export const DEVICE_HEIGHT = height;
export const DEVICE_WIDTH = width;
