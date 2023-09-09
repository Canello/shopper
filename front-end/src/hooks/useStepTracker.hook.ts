import { useEffect } from "react";

interface IUseStepTracker {
    setStep: Function;
    validationInfo: ValidationInfo | null;
    file: File | null;
}

export const useStepTracker = ({
    setStep,
    validationInfo,
    file,
}: IUseStepTracker) => {
    const updateStep = () => {
        if (validationInfo) setStep(3);
        else if (file) setStep(2);
        else setStep(1);
    };

    useEffect(() => {
        updateStep();
    }, [validationInfo, file]);
};
