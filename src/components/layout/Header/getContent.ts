interface Props {
  title: string,
  logo: { 
    text: string, 
  };
  links: {
    text: string,
  }[];
}

export const getContent = (): Props => {
  return {
    title: 'Test',
    logo: {
      text: 'Logo',
    },
    links: [
      {
        text: 'Link 1',
      },
      {
        text: 'Link 2',
      },
      {
        text: 'Link 3',
      },
      {
        text: 'Link 4',
      }
    ],
  }
}
