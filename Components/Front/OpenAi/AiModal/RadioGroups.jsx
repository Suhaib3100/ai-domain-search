import React from "react";
import {
  RadioGroup,
  Radio,
  useRadio,
  VisuallyHidden,
  cn,
  Card,
} from "@nextui-org/react";

export const CustomRadio = (props) => {
  const {
    Component,
    children,
    isSelected,
    description,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    getControlProps,
  } = useRadio(props);

  return (
    <Card className="border-none">
      <Component
        {...getBaseProps()}
        className={cn(
          "group inline-flex items-center hover:opacity-70 active:opacity-50 justify-between flex-row-reverse tap-highlight-transparent",
          "max-w-[300px] cursor-pointer  rounded-l gap-4 p-4",
          "data-[selected=true]:border-primary"
        )}
      >
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <span {...getWrapperProps()}>
          <span {...getControlProps()} />
        </span>
        <div {...getLabelWrapperProps()}>
          {children && <span {...getLabelProps()}>{children}</span>}
          {description && (
            <span className="text-xs text-gray-500 opacity-70">
              {description}
            </span>
          )}
        </div>
      </Component>
    </Card>
  );
};

export default function RadioGroups({
  groupLabel,
  groupValue,
  setGroupValue,
  items,
}) {
  return (
    <RadioGroup
      label={groupLabel}
      value={groupValue}
      onValueChange={setGroupValue}
    >
      <div className="grid grid-cols-3 gap-2">
        {items?.map((x, i) => (
          <CustomRadio description={x?.description} value={x?.value} key={i}>
            {x?.itemName}
          </CustomRadio>
        ))}
      </div>
    </RadioGroup>
  );
}
