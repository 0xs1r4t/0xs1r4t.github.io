import styled from "styled-components/macro";

const StyledInfo = styled.div`
   width: 90%;
   & h1 {
      font-weight: 500;
      font-size: 6.5em;

      & span {
         font-style: italic;
      }
   }

   @media (max-width: 768px) {
      & h1 {
         font-size: 3em;
      }
   }
`;

const Info = () => {
   return (
      <StyledInfo>
         <h1>
            this is where i host all my <span>github projects</span>!
         </h1>
      </StyledInfo>
   );
};

export default Info;
