import styled, { keyframes } from "styled-components/macro";
import StarSvg from "../assets/svg/star.svg";
import EyesSvg from "../assets/svg/eyes.svg";
import ArrowSvg from "../assets/svg/arrow.svg";

const SpinStar = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledStar = styled.span`
   & .star {
      width: 275px;
   }

   & .eyes {
      position: relative;
      right: 175px;
      bottom: 75px;
      height: 100px;
      padding: 0;
      margin: 0;
   }

   @media (max-width: 768px) {
      padding: 1em;
   }

   @media (max-width: 507px) {
      padding: 1em;

      & img {
         position: fixed;
         inset: 0 0 0 0;
      }
   }

   @media (prefers-reduced-motion: no-preference) {
      & .star {
         animation: ${SpinStar} infinite 20s linear;
      }
   }
`;

export const Star = () => {
   return (
      <StyledStar>
         <img src={StarSvg} alt="star" className="star" />
         <img src={EyesSvg} alt="eyes" className="eyes" />
      </StyledStar>
   );
};

const SvgStyles = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   pointer-events: none;
   width: 95%;

   @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
   }
`;

const StyledArrow = styled.span`
   & img {
      height: 75px;
   }
`;

export const Arrow = () => {
   return (
      <StyledArrow>
         <img src={ArrowSvg} alt="arrow" />
      </StyledArrow>
   );
};

const Svgs = () => {
   return (
      <SvgStyles>
         <Star />
         <Arrow />
      </SvgStyles>
   );
};

export default Svgs;
