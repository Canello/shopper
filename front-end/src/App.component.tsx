import { useState } from "react";
import { AppStyled, Main, Top } from "./App.styles";
import { Title } from "./components/Title/Title.component";
import { Spacer } from "./components/Spacer/Spacer.component";
import { ProgressTracker } from "./components/ProgressTracker/ProgressTracker.component";
import { Bottom } from "./components/Bottom/Bottom.component";
import { SuccessTip } from "./components/SuccessTip/SuccessTip.component";

function App() {
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [showSuccessTip, setShowSuccessTip] = useState<boolean>(false);
    const showTip = () => {
        setShowSuccessTip(true);
        setTimeout(() => setShowSuccessTip(false), 4000);
    };

    return (
        <AppStyled>
            <Main>
                <Top>
                    <Title />
                    <Spacer x={24} />
                    <ProgressTracker step={step} />
                </Top>
                <Spacer y={24} />
                <Bottom step={step} setStep={setStep} showTip={showTip} />
                <SuccessTip isShowing={showSuccessTip} />
            </Main>
        </AppStyled>
    );
}

export default App;
