import { signIn } from "next-auth/react";
import React, { ReactElement, ReactNode } from "react";

type ButtonProps = {
  children: string;
  onClick ?: () => void;
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      className="bg-green-600 w-20 h-10 rounded-sm text-white"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
