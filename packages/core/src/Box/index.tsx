import * as React from 'react';
import styled from '@emotion/styled';

import { allStyled, shouldForwardProp } from './shouldForwardProp';
import { BoxProps } from './BoxProps';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Box: React.FC<BoxProps> = styled('div', { shouldForwardProp })(allStyled);
Box.displayName = 'Box';
