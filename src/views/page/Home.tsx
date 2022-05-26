import React, { useContext } from 'react';
import Header from '../../components/layout/Header';
import ThemeContext from '../../context/Theme/Context';
import { GlobalStyle } from '../../styles/index';
import { Body } from './styles';

export const Home = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <>
      <GlobalStyle />
      <Header />
      <Body isDarkTheme={isDarkTheme} />
    </>
  );
}

export default Home;
