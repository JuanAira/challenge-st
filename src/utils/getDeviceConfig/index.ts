import { DEVICE_SIZE } from '../../constants';
import { deviceConfigProps } from './index.d';
 
export const getDeviceConfig = ({ width }: deviceConfigProps) => {
  if (width < 320) {
    return DEVICE_SIZE.XS;
  } else if (width >= 320 && width < 720) {
    return DEVICE_SIZE.SM;
  } else if (width >= 720 && width < 1024) {
    return DEVICE_SIZE.MD;
  }
  return DEVICE_SIZE.LG;
};