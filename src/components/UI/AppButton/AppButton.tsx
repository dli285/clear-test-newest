import React from "react";
import { Button } from "./AppButton.style";

export interface IButtonProps {
  buttonLabel: string;
  isDisabled: boolean;
  isError?: boolean
  onClick?:  () => void;
}

export const AppButton = ({
  buttonLabel,
  isDisabled,
  onClick,
  ...props
}: IButtonProps) => {
  return (
    <Button className="AppButton" disabled={isDisabled} {...props} onClick={onClick}>
      {buttonLabel}
    </Button>
  );
};
