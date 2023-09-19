import { TextField } from "@mui/material";
import propTypes from "prop-types";
import { useFormContext } from "react-hook-form";
const BaseInput = ( (props) => {
  const { register } = useFormContext();

  const baseSx = {
    "& .MuiFilledInput-root": {
      backgroundColor: "var(--input-color)",
    },
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
      autoComplete="off"
      error={props.error}
      FormHelperTextProps={!props.error ?{
        style: {
          color: "var(--label-color)",
        },
      }:{}}
      InputLabelProps={!props.error ?{
        style: {
          color: "var(--label-color)",
        },
      }: {}}
      InputProps={
        props.InputProps
          ? { ...baseInputProps, ...props.InputProps }
          : baseInputProps
      }
      sx={props.sx ? { ...baseSx, ...props.sx } : baseSx}
      {...register(props.name)}
      defaultValue={props.defaultValue}
    >
      {props.children}
    </TextField>
  );
});

BaseInput.propTypes = {
  sx: propTypes.object,
  endAdornment: propTypes.element,
  InputProps: propTypes.object,
  children: propTypes.node,
  defaultValue: propTypes.string,
  name: propTypes.string,
  error: propTypes.bool,
};

export default BaseInput;
