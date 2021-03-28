import styled from "styled-components/macro";
import StarSvg from "../assets/svg/cute.svg";
import ArrowSvg from "../assets/svg/arrow.svg";

const StyledStar = styled.span`
   & img {
      width: 275px;
   }

   @media (max-width: 768px) {
      padding: 1em;
   }
`;

const StyledArrow = styled.span`
   & img {
      height: 75px;
   }

   @media (max-width: 768px) {
      padding: 1em;
   }
`;

const SvgStyles = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   width: 95%;

   @media (max-width: 768px) {
      flex-direction: column;
   }
`;

export const Star = () => {
   return (
      <StyledStar>
         <img src={StarSvg} alt="star with eyes" />
      </StyledStar>
   );
};

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
