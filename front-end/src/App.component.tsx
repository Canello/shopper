import { useState } from "react";
import { Table } from "./components/Table/Table.component";
import { Form } from "./components/Form/Form.component";
import { AppStyled, Main, Top } from "./App.styles";
import { Title } from "./components/Title/Title.component";
import { Spacer } from "./components/Spacer/Spacer.component";
import { ProgressTracker } from "./components/ProgressTracker/ProgressTracker.component";
import { Bottom } from "./components/Bottom/Bottom.component";

function App() {
    return (
        <AppStyled>
            <Main>
                <Top>
                    <Title />
                    <Spacer x={24} />
                    <ProgressTracker step={1} />
                </Top>
                <Spacer y={24} />
                <Bottom />
            </Main>
        </AppStyled>
    );
}

export default App;
