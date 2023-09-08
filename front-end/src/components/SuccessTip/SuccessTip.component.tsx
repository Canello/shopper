import React from "react";
import { SuccessTipStyled, Text } from "./SuccessTip.styles";

interface ISuccessTipProps {
    isShowing: boolean;
}

export const SuccessTip: React.FC<ISuccessTipProps> = ({ isShowing }) => {
    return (
        <SuccessTipStyled $isShowing={isShowing}>
            <Text>Preços atualizados com sucesso!</Text>
        </SuccessTipStyled>
    );
};
