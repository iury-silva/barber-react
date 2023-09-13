import { Select,InputLabel } from "@mui/material";
import propTypes from "prop-types";
function BaseSelect(props) {
  const baseSx = {
    backgroundColor: "#2C2C2E",
    borderRadius: "15px",
  };

  const BaseSelectProps = {
    style: {
      color: "#fff",
      borderRadius: "15px",
      filter: "drop-shadow(0px 4px 4px var(--secondary-color))",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderBottom: "none",
    },
    "& .MuiOutlinedInput-underline:before": {
      borderBottom: "none",
    },

  };

  return (
    <>
      <InputLabel
        htmlFor={props.id}
        variant="filled"
        sx={{
          color: "var(--label-color)",
          "&.MuiInputLabel-filled": {
            color: "var(--label-color)",
          },
        }}
      >
      {props.labelInput}
      </InputLabel>
      <Select
        {...props}
        variant="filled"
        color="secondary"
        inputProps={{
          style: {
            color: "var(--label-color)",
            backgroundColor: "#2C2C2E",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--label-color)",
            backgroundColor: "#2C2C2E",
          },
        }}
        SelectDisplayProps={
          props.InputProps
            ? { ...BaseSelectProps, ...props.InputProps }
            : BaseSelectProps
        }
        MenuProps={{
          variant: "selectedMenu",
        }}
        sx={props.sx ? { ...baseSx, ...props.sx } : baseSx}
      >
        {props.children}
      </Select>
    </>
  );
}

BaseSelect.propTypes = {
  sx: propTypes.object,
  endAdornment: propTypes.element,
  InputProps: propTypes.object,
  labelInput: propTypes.string,
  label: propTypes.string,
  id: propTypes.string,
  children: propTypes.element,
};

export default BaseSelect;
