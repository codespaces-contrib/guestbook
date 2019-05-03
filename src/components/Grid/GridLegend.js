import Emoji from "../Emoji";
import React from "react";

import styled from "styled-components";

function GridLegend({ bonusCells = "Bonus" }) {
    return (
        <Container>
            <LegendItem><BonusSquare /> = Bonus Cell (<Emoji type="shirt" />)</LegendItem>
            <LegendItem><SpecialSquare /> = Special Cell (<Emoji type="hat" />)</LegendItem>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0.8em;
`;

const ColorSquare = styled.div`
    border-style: solid;
    border-width: 4px;
    height: 20px;
    margin-right: 5px;
    width: 20px;
`;

const BonusSquare = ColorSquare.extend`
    border-color: ${({ theme: { bonusColor }}) => bonusColor};
`;

const SpecialSquare = ColorSquare.extend`
    border-color: ${({ theme: { specialColor }}) => specialColor};
`;

const LegendItem = styled.div`
    align-items: center;
    display: flex;
    font-size: 0.8em;
    margin-left: 10px;
    vertical-align: middle;
`;

export default GridLegend;