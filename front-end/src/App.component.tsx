import { useState } from "react";
import { AppStyled, Main, Title, TitleContainer, Top } from "./App.styles";
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
        <AppStyled data-testid="AppStyled">
            <Main>
                <Top>
                    <TitleContainer>
                        <Title>Atualizar Preços</Title>
                    </TitleContainer>
                    <Spacer x={24} />
                    <ProgressTracker step={step} />
                </Top>
                <Spacer y={24} />
                <Bottom setStep={setStep} showTip={showTip} />
                <SuccessTip isShowing={showSuccessTip} />
            </Main>
        </AppStyled>
    );
}

export default App;
