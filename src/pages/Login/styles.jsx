import { Tabs, styled, Paper } from "@mui/material";

export const CustomTabs = styled(Tabs)`
  background-color: #2c2c2e;
  border-radius: 10px;
  margin-left: 20px;
  margin-right: 20px;

  & .MuiTabs-indicator {
    background-color: var(--secondary-color);
    border-radius: 10px;
    height: 75%;
    transition: all 0.5s ease-in-out;
  }

  & .MuiTab-root {
    color: var(--label-color);
    font-weight: bold;
    margin-right: 10px;
    z-index: 1;
  }

  & .Mui-selected {
    color: white;
    transition: all 0.5s ease-in-out;
  }

  & .MuiTab-textColorInherit {
    color: white;
  }
`;

export const CustomPaper = styled(Paper)`
  width: 400px;
  max-height: 700px;
  min-height: 500px;
  border-radius: 15px;
  background-color: var(--black-color);
  box-shadow: 0 0 30px var(--secondary-color);
`;
