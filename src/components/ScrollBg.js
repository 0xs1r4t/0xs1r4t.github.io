import styled from "styled-components/macro";
import Section1 from "./Section1";

const StyledBg = styled.main`
   width: 95vw;
   max-height: 95vh;
   background: var(--purple);
   border: 4px solid var(--blue);
   border-radius: 20px;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;

   overflow-x: hidden;
   overflow-y: auto;

   scrollbar-width: none;
   -ms-overflow-style: -ms-autohiding-scrollbar;

   ::-webkit-scrollbar {
      height: 0;
      width: 0;
   }
`;

const ScrollBg = () => {
   return (
      <StyledBg>
         <Section1 id="section1" />
      </StyledBg>
   );
};

export default ScrollBg;
