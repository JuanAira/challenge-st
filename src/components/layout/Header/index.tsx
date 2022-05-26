import React from 'react'
import { useContext, useState } from 'react';
import ThemeContext from '../../../context/Theme/Context';
import Switch from 'react-switch';
import useScreen from '../../../hooks/useScreen';
import { Button } from '../../../components/Button';
import { getContent } from './getContent';
import { THEME_IMAGE, UI } from '../../../constants';
import {
  Container,
  Title,
  SectionLinks,
  SectionTheme,
  Link,
  Icon,
  DescriptionTheme,
  DropdownContainer,
} from './styles';

export const Header = () => {
  const {
    theme: {
      themeName,
      backgroundColor,
      color,
      description,
    },
    isDarkTheme,
    toggleTheme,
  } = useContext(ThemeContext);
  const [dropdownLinks, setDropdownLinks] = useState<boolean>(false);
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(isDarkTheme ? true : false);
  const { links, title } = getContent();
  const isMobile = useScreen();

  const handleChangeThemeSwitch = (swicht: boolean) => {
    setIsSwitchOn(swicht);
    toggleTheme();
  };

  const renderAllLinks = () => {
    if (isMobile) { return <Button onClick={() => setDropdownLinks(!dropdownLinks)} />; }

    return (links.map(({ text }, key) => (
      <Link tabIndex={1} key={key} color={color}>
        {text}
      </Link>
    )));
  };

  return (
    <>
      <Container backgroundColor={backgroundColor} mobile={isMobile}>
        <Title color={color} data-testid="title">{title}</Title>

        <SectionLinks>{renderAllLinks()}</SectionLinks>

        <SectionTheme>
          <Icon src={THEME_IMAGE[themeName].img} alt={THEME_IMAGE[themeName].alt} />

          {!isMobile && (<DescriptionTheme color={color}>{description}</DescriptionTheme>)}

          <Switch
            checked={isSwitchOn}
            onChange={handleChangeThemeSwitch}
            offHandleColor={UI.COLORS['PURPLE-500']}
            onColor={UI.COLORS['PURPLE-500']}
            onHandleColor={UI.COLORS['PURPLE-100']}
            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
            height={14}
            width={36}
            id="switch"
          />
        </SectionTheme>
      </Container>

      {dropdownLinks && isMobile && (
        <DropdownContainer backgroundColor={backgroundColor}>
          {links.map((link, key) => (<Link key={key} color={color}>{link.text}</Link>))}
        </DropdownContainer>
      )}
    </>
  );
};

export default Header;
