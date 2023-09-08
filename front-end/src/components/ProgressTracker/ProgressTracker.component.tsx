import React from "react";
import { ProgressDot, ProgressTrackerStyled } from "./ProgressTracker.styles";
import { Spacer } from "../Spacer/Spacer.component";

interface IProgressTrackerProps {
    step: 1 | 2 | 3;
}

export const ProgressTracker: React.FC<IProgressTrackerProps> = ({ step }) => {
    return (
        <ProgressTrackerStyled>
            <ProgressDot $isActive={true} />
            <Spacer x={12} />
            <ProgressDot $isActive={true} />
            <Spacer x={12} />
            <ProgressDot $isActive={true} />
        </ProgressTrackerStyled>
    );
};
