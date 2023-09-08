import React, { ChangeEventHandler } from "react";
import { Input, PrimaryLabel, SecondaryLabel } from "./FileInput.styles";

interface IFileInputProps {
    variant?: "primary" | "secondary";
    size?: "small" | "medium" | "large";
    onChange?: ChangeEventHandler;
}

const labels = {
    primary: PrimaryLabel,
    secondary: SecondaryLabel,
};

export const FileInput: React.FC<React.PropsWithChildren<IFileInputProps>> = ({
    children,
    variant = "primary",
    size = "medium",
    onChange,
    ...otherProps
}) => {
    const LabelComponent = labels[variant];
    return (
        <LabelComponent size={size} {...otherProps}>
            {children}
            <Input type="file" accept=".csv" onChange={onChange} />
        </LabelComponent>
    );
};
