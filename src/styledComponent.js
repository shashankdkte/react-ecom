import React from "react";
import styled from "styled-components";
const Text = styled.div`
  color: red;
  font-size: 28px;
  border: ${({ isActive }) =>
    isActive ? "1px solid black" : "1px solid pink"};
`;
function StyledComponent() {
  return (
    <div>
      <Text isActive={true}>I am a componenet</Text>
    </div>
  );
}

export default StyledComponent;
