// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';

type Sizes = 'large' | 'regular' | 'small' | 'xsmall' | 'xxsmall';

type VerticalSpaceProps = {
  alignCenter?: boolean;
  size?: Sizes;
};
type HorizontalSpaceProps = {
  justifyBetween?: boolean;
  justifyEnd?: boolean;
  size?: Sizes;
};
type Props = {
  children?: React.ReactNode;
  horizontal?: boolean;
  size?: Sizes;
} & VerticalSpaceProps &
  HorizontalSpaceProps;

const spacing = {
  large: '3rem',
  regular: '1.5rem',
  small: '1rem',
  xsmall: '0.5rem',
  xxsmall: '0.25rem',
};

const getSpacing = (size?: Sizes) => {
  const spacingSize = size || 'regular';

  return spacing[spacingSize];
};

const VerticalSpace = styled.div<VerticalSpaceProps>`
  & > * {
    margin-top: 0;
    margin-bottom: 0;
    &:not(:first-child) {
      margin-top: ${({ size }) => getSpacing(size)};
    }
  }

  ${(props) =>
    props.alignCenter &&
    css`
      align-items: center;
    `}
`;

const HorizontalSpace = styled.div<HorizontalSpaceProps>`
  display: flex;
  ${(props) =>
    props.justifyEnd &&
    css`
      justify-content: flex-end;
    `}
  ${(props) =>
    props.justifyBetween &&
    css`
      justify-content: space-between;
    `}
  & > * {
    margin-left: 0;
    margin-right: 0;
    &:not(:first-child) {
      margin-left: ${({ size }) => getSpacing(size)};
    }
  }
`;

export const Space = (props: Props) => {
  if (props.horizontal) {
    return <HorizontalSpace {...props} />;
  }
  return <VerticalSpace {...props} />;
};
