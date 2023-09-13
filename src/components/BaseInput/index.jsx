import { TextField } from "@mui/material";
import propTypes from "prop-types";
function BaseInput(props) {
  const baseSx = {
    backgroundColor: "#2C2C2E",
    borderRadius: "15px",
  };

  const baseInputProps = {
    disableUnderline: true,
    style: {
      color: "#fff",
      borderRadius: "15px",
    },
    sx: {
      "&:hover": {
        color: "var(--label-color)",
        backgroundColor: "var(--hover-input)",
      },
    },
  };

  return (
    <TextField
      {...props}
      variant="filled"
      color="secondary"
      FormHelperTextProps={{
        style: {
          color: "var(--label-color)",
        },
      }}
      InputLabelProps={{
        style: {
          color: "var(--label-color)",
        },
      }}
      InputProps={
        props.InputProps ? { ...baseInputProps, ...props.InputProps } : baseInputProps
      }
      sx={props.sx ? { ...baseSx, ...props.sx } : baseSx}
    >
      {props.children}
    </TextField>
  );
}

BaseInput.propTypes = {
  sx: propTypes.object,
  endAdornment: propTypes.element,
  InputProps: propTypes.object,
  children: propTypes.node,
};

export default BaseInput;
