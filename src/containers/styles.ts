import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../utils/colorUtils';
import {
    heightPercentToDp as hp,
    widthPercentToDp as wp,
  } from '../utils/sizeUtils';

export const Gradient = styled(LinearGradient)`
    flex: 1;
    justify-content: center;
`;

export const TopWelcome = styled.View`
    flex: 2;
    justify-content: flex-end;
    padding-top: ${hp(10)};
    padding-bottom: ${hp(10)};
    align-items: center;
`;

export const LogoTextStyle = styled.Text`
    color: ${COLORS.WHITE};
    font-size: ${wp(12)};
    letter-spacing: ${wp(4)};
    font-family: Raleway-Italic-VariableFont_wght;
`;

export const BodyLogin = styled.View`
    flex: 1;
    background-color: ${COLORS.WHITE};
    border-top-left-radius: ${wp(18)}px;
    width: ${wp(100)};
`;

export const TitleLogin = styled.Text`
    align-self: center;
    text-align: center;
    color: ${COLORS.BLACK};
    margin-vertical: ${hp(1)};
    font-size: ${wp(8)};
    letter-spacing: ${wp(0.5)};
    font-family: Raleway-VariableFont_wght;
`;

export const Input = styled.TextInput`
    border-radius: ${wp(8)}px;
    width: ${wp(70)};
    height: ${hp(6)};
    background-color: ${COLORS.GRADIENT_OPACITY};
    align-self: center;
    text-align: center;
    margin-top: ${hp(2)};
    margin-bottom: ${hp(2)};
    color: ${COLORS.BLACK};
    font-size: ${wp(6)};
    letter-spacing: ${wp(0.5)};
    font-family: Raleway-VariableFont_wght;
`;
