import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentToDp as hp,
  widthPercentToDp as wp,
} from '../utils/sizeUtils';
import COLORS from '../utils/colorUtils';

interface WelcomeProps {}

const Welcome = (props: WelcomeProps) => {
  const {} = props;
  return (
    <LinearGradient
      colors={[COLORS.GRADIENT_1, COLORS.GRADIENT_2, COLORS.GRADIENT_3]}
      style={styles.container}>
      <View style={styles.topWelcome}>
        <Text style={styles.logoTextStyle}>Login</Text>
        <Text style={styles.logoTextStyle}>Project</Text>
      </View>

      <View style={styles.buttomWelcome}>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.ORANGE,
          }}
          onPress={() => console.log('ok')}>
          <Text>Comece Agora</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topWelcome: {
    flex: 2,
    justifyContent: 'flex-end',
    paddingVertical: hp(10),
  },
  buttomWelcome: {
    flex: 1,
  },
  logoTextStyle: {
    color: COLORS.WHITE,
    fontSize: wp(12),
    letterSpacing: wp(4),
    fontFamily: 'Raleway-Italic-VariableFont_wght',
  },
});

export default Welcome;
