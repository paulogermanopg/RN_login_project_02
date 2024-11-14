import React from 'react';
import {Text, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {
  heightPercentToDp as hp,
  widthPercentToDp as wp,
} from '../utils/sizeUtils';
import COLORS from '../utils/colorUtils';

interface WelcomeButtonProps {
    text: string;
    onPress?: () => void;
    style?: ViewStyle;
}

const WelcomeButton = (props: WelcomeButtonProps) => {
  const {onPress, text, style} = props;
  return (
    <TouchableOpacity
      style={[styles.welcomeButton, style]}
      onPress={onPress}>
      <Text style={styles.welcomeButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  welcomeButton: {
    backgroundColor: COLORS.RED_SOFT,
    height: hp(5),
    width: wp(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(5),
    shadowColor: COLORS.GRAY,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  welcomeButtonText: {
    color: COLORS.WHITE,
    fontFamily: 'Raleway-VariableFont_wght',
    letterSpacing: wp(0.5),
  },
});

export default WelcomeButton;
