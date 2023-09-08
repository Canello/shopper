interface ISpacerProps {
    x?: number;
    y?: number;
}

export const Spacer: React.FC<ISpacerProps> = ({ x = 0, y = 0 }) => (
    <div style={{ marginLeft: x, marginTop: y }} />
);
