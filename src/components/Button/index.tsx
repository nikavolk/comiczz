import { ButtonProps } from "../../common/types";
import "./button.style.scss";

export const Button = (props: ButtonProps): JSX.Element => {
  return <button {...props} />;
};
