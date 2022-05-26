import * as React from 'react';
import { DEVICE_SIZE } from '../../../constants';

import { getDeviceConfig } from '..';

describe('getDeviceConfig', () => {
  it('should return XS', () => {
    expect(getDeviceConfig({ width: 200 })).toBe(DEVICE_SIZE.XS);
  });

  it('should return SM', () => {
    expect(getDeviceConfig({ width: 325 })).toBe(DEVICE_SIZE.SM);
  });

  it('should return MD', () => {
    expect(getDeviceConfig({ width: 940 })).toBe(DEVICE_SIZE.MD);
  });

  it('should return LG', () => {
    expect(getDeviceConfig({ width: 1024 })).toBe(DEVICE_SIZE.LG);
  });
});