import styled from 'styled-components';
import { UI } from '../../../../constants';

export const Container = styled.header<{ backgroundColor: string, mobile: boolean }>`
  height: ${UI.SIZE['GRID-72']};
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding:  ${(props) => props.mobile ? UI.SIZE['GRID-4'] : UI.SIZE['GRID-20']};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.4s ease-in;
`;

export const Title = styled.h1<{ color: string }>`
  color: ${({ color }) => color};
`;

export const SectionLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SectionTheme = styled.div`
  display: flex;
  align-items: center;
`;

export const DescriptionTheme = styled.p<{ color: string }>`
  color: ${({ color }) => color};
  margin: ${UI.SIZE['GRID-16']};
`;

export const DropdownContainer = styled.div<{ backgroundColor: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  align-items: center;
  transition: all 0.4s ease-in;

  & a:nth-child(1){
    margin-top: ${UI.SIZE['GRID-8']};
  }

  & a:nth-child(n){
    height: ${UI.SIZE['GRID-48']};
  }
`;

export const Link = styled.a<{ color: string }>`
  margin: 0 ${UI.SIZE['GRID-12']};
  color: ${({ color }) => color};
  cursor: pointer;
  transition: 0.4s;
  font-size: ${UI.FONT['SIZE-20']};

  &:hover:after {
    content: '';
    display: block;
    width: ${UI.SIZE['GRID-12']};
    border-bottom: 1px solid;
    margin: 0 auto;
  }
`;

export const Icon = styled.img`
  width: ${UI.SIZE['GRID-24']};
  height:${UI.SIZE['GRID-24']};
`;




