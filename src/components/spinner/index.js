import React from "react";
import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
`

const SvgAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg)
  }
`;

const CircleAnimation = keyframes`
  0%,
  25% {
    stroke-dashoffset: 280;
    transform: rotate(0);
  }
  
  50%,
  75% {
    stroke-dashoffset: 75;
    transform: rotate(45deg);
  }
  
  100% {
    stroke-dashoffset: 280;
    transform: rotate(360deg);
  }
`;

const Svg = styled.svg`
  animation: 2s linear infinite ${SvgAnimation};
`

const Circle = styled.circle`
  fill: transparent;
  stroke: #2f3d4c;
  stroke-width: 10;
  stroke-dasharray: 283;
  stroke-linecap: round;
  transform-origin: 50% 50%;
  stroke-dashoffset: 75;
  animation: 2.4s ease-in-out infinite both ${CircleAnimation};
`

const Spinner = () => {
    return (
        <Wrapper>
            <Svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <Circle cx="50" cy="50" r="45"/>
            </Svg>
        </Wrapper>
    )
}

export default Spinner;