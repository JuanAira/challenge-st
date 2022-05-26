import React, { useContext } from 'react';
import { ButtonProps } from './index.d';
import ThemeContext from '../../context/Theme/Context';
import { THEME_IMAGE_HAMBURGER } from '../../constants';
import { BackgroundImage, Image } from './styles';

export const Button = ({ onClick }: ButtonProps) => {
  const { theme: { themeName } } = useContext(ThemeContext);

  return (
    <BackgroundImage onClick={onClick}>
      <Image src={THEME_IMAGE_HAMBURGER[themeName].img} alt={THEME_IMAGE_HAMBURGER[themeName].alt} />
    </BackgroundImage>
  );
};
