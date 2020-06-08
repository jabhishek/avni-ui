const getColorProps = (variantColor: string) => {
  return {
    backgroundColor: variantColor,
  };
};

const defaultStyle = {
  p: '5px 20px',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '2px',
};

export const useStyles = (variantColor: string) => {
  const colorProps = getColorProps(variantColor);

  return { ...defaultStyle, ...colorProps };
};
