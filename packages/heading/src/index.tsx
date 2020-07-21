import * as React from 'react';
import styled from '@emotion/styled';
import { useTheme, ITheme } from '@avni-ui/core';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const fontSizeMapping = {
  h1: 'l6',
  h2: 'l5',
  h3: 'l4',
  h4: 'l3',
  h5: 'l2',
  h6: 'l1',
};

export const Heading = ({
  tag = 'h1',
  children,
}: {
  tag: HeadingTag;
  children: React.ReactNode;
}) => {
  const theme: ITheme = useTheme();

  const fontSize = fontSizeMapping[tag];

  const StyledHeading = styled(tag)({
    fontSize: theme.fontSizes[fontSize],
    fontWeight: 500,
    lineHeight: 'normal',
    margin: '0.5em 0',
  });

  return <StyledHeading>{children}</StyledHeading>;
};
