import propTypes from "prop-types";
import { LoadingButton } from "@mui/lab";
BaseButton.propTypes = {
  children: propTypes.node,
  text: propTypes.string,
};

export function BaseButton(props){
  return (
    <LoadingButton
      {...props}
      variant="contained"
      sx={{
        backgroundColor: "var(--primary-color)",
        boxShadow: "0 0 20px var(--secondary-color)",
        width: "60%",
        height: "40px",
        borderRadius: "10px",
        "&:hover": {
          backgroundColor: "var(--secondary-color)",
        },
        "&.MuiLoadingButton-root": {
          fontWeight: "bold",
          backgroundColor: "var(--primary-color)",
        },
        "& .MuiCircularProgress-root": {
          color: "white",
          fontSize: "20px",
          width: "20px",
        },
      }}
    >
      {props.text}
    </LoadingButton>
  );
}

export default BaseButton;


