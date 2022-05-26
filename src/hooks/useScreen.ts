import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

import { SIZE_MOBILE } from '../constants';
import { getDeviceConfig } from '../utils/getDeviceConfig';

const useScreen = () => {
  const [brkPnt, setBrkPnt] = useState(() =>
    getDeviceConfig({ width: window.innerWidth }));

  useEffect(() => {
    const calcInnerWidth = throttle(function () {
      setBrkPnt(getDeviceConfig({ width: window.innerWidth }));
    }, 200);
    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);
  return SIZE_MOBILE.includes(String(brkPnt));
};
export default useScreen;
