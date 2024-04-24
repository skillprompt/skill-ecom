import React, { Ref } from "react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { TextInput, TextInputProps } from "flowbite-react";

type InputProps = TextInputProps;

const customInputTheme: CustomFlowbiteTheme["textInput"] = {
  field: {
    rightIcon: {
      //   base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
      //   svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
      base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
      svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
    },
    input: {
      sizes: {
        lg: "text-xl",
      },
      colors: {
        primary:
          "bg-inputColor text-gray_100 text-xl  border-2 border-bluish_purple",
      },
    },
  },
};
const InputRef = (
  props: InputProps,
  ref: Ref<HTMLInputElement> | undefined
) => {
  return <TextInput ref={ref} {...props} theme={customInputTheme} />;
};

export const Input = React.forwardRef(InputRef);
