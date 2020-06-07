import * as React from 'react';
import styled from '@emotion/styled';
import { color, space } from 'styled-system';
import { BoxProps } from './BoxProps';

export const Box: React.FC<BoxProps> = styled.div`
  ${color},
  ${space}
`;
