import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../utils/colorUtils';
import {
    heightPercentToDp as hp,
    widthPercentToDp as wp,
  } from '../utils/sizeUtils';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    background-color: ${COLORS.GRADIENT_1};
`;

export const Arrow = styled.TouchableOpacity`
    background-color: ${COLORS.RED_SOFT};
    width: ${wp(16)}px;
    height: ${wp(16)}px;
    align-self: flex-end;
    position: absolute;
    right: ${wp(10)}px;
    bottom: ${hp(10)}px;
    border-radius: ${wp(8)}px;
    align-items: center;
    justify-content: center;
`;

export const InfoContent = styled.View`
    flex: 1;
    justify-content: space-evenly;
    align-items: center;
    padding-top: ${hp(3)}px;
    padding-bottom: ${hp(3)}px;
`;

export const InfoContentTitle = styled.View`
    background-color: ${COLORS.RED_SOFT};
    width: ${wp(60)}px;
    align-items: center;
    justify-content: center;
    padding: ${wp(1)}px;
    border-radius: ${wp(2)}px;
`;

export const InfoTitleText = styled.Text`
    color: ${COLORS.WHITE};
    font-family: Parkinsans-Bold;
`;

export const InfoContentBody = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const InfoButtomBody = styled.TouchableOpacity`
    margin: ${wp(5)}px;
    align-items: center;
    align-self: center;
`;

export const BodyImage = styled.Image`
    width: ${wp(26)}px;
    height: ${wp(26)}px;
    border-radius: ${wp(4)}px;
    margin-bottom: 5px;
    margin-top: 5px;
`;

export const CoverImage = styled.View`
    width: ${wp(26)}px;
    height: ${wp(26)}px;
    border-radius: ${wp(4)}px;
    position: absolute;
    background-color: ${COLORS.GRAY_OPACITY};
    margin-top: ${hp(2.6)}px;
`;

export const InfoText = styled.Text`
    color: ${COLORS.WHITE};
    font-family: Parkinsans-Regular;
`;

export const ContentDefault = styled.View`
    flex: 1;
`;

export const ContentDefaultDescription = styled.View`
    margin-top: ${hp(3)}px;
    margin-left: ${wp(4)}px;
    margin-right: ${wp(4)}px;
`;

export const InfoTextTitle = styled.Text`
    font-family: Parkinsans-Medium;
    color: ${COLORS.WHITE};
    letter-spacing: ${wp(0.2)}px;
`;

export const InfoTextDescription = styled.Text`
    font-family: Raleway-VariableFont_wght;
    color: ${COLORS.WHITE};
    letter-spacing: ${wp(0.1)}px;
    margin-top: ${hp(2)}px;
    margin-bottom: ${hp(2)}px;
`;

export const ImageText = styled.Text`
    font-family: Parkinsans-Light;
    font-size: ${wp(13)}px;
    position: absolute;
    bottom: ${-hp(3)}px;
    left: ${wp(3)}px;
    color: ${COLORS.WHITE};
    z-index: 1;
`;
