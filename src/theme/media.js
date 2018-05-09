import { css } from "styled-componets";

const sizes = {
  phone: 376,
  tablet: 768,
  desktop: 1028,
  giant: 1440
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
