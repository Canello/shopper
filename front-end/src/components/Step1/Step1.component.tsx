import React, { ChangeEventHandler } from "react";
import { Spacer } from "../Spacer/Spacer.component";
import {
    Description,
    Example,
    ExampleText,
    Form,
    Step1FileInput,
} from "./Step1.styles";

interface IStep1Props {
    onChangeFile: ChangeEventHandler;
}

export const Step1: React.FC<IStep1Props> = ({ onChangeFile }) => {
    return (
        <Form data-testid="Form">
            <Description>
                Faça upload de um arquivo CSV no seguinte formato:
            </Description>
            <Spacer y={24} />
            <Example>
                <ExampleText>
                    product_code,new_price
                    <br />
                    16,25.50
                    <br />
                    2,12.50
                    <br />
                    ...
                </ExampleText>
            </Example>
            <Spacer y={24} />
            <Step1FileInput variant="primary" onChange={onChangeFile}>
                Escolher arquivo
            </Step1FileInput>
        </Form>
    );
};
