import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentToDp as hp,
  widthPercentToDp as wp,
} from '../utils/sizeUtils';
import COLORS from '../utils/colorUtils';
import WelcomeButton from '../components/WelcomeButton';

interface WelcomeProps {}

const Welcome = (props: WelcomeProps) => {
  const {} = props;

  const [startClicked, setStartClicked] = useState<boolean>(false);
  const [buttonFlex, setButtonFlex] = useState<any>(new Animated.Value(1));

  useEffect(() => {
    if (startClicked) {
      Animated.timing(buttonFlex, {
        toValue: 8,
        duration: 250,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start();
    } else {
      Animated.timing(buttonFlex, {
        toValue: 1,
        duration: 250,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start();
    }
  }, [startClicked]);

  return (
    <LinearGradient
      colors={[COLORS.GRADIENT_1, COLORS.GRADIENT_2, COLORS.GRADIENT_3]}
      style={styles.container}>
      <View style={styles.topWelcome}>
        <Text style={styles.logoTextStyle}>Login</Text>
        <Text style={styles.logoTextStyle}>Project</Text>
      </View>

      <Animated.View style={[styles.buttomWelcome, {flex: buttonFlex}]}>
        {startClicked ? (
          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.WHITE,
              borderTopLeftRadius: wp(18),
              width: wp(100),
            }}>
            <Text style={styles.titleLogin}>LOGIN</Text>

            <TextInput
              style={styles.inputStyle}
              placeholder="E-mail"
              keyboardType="email-address"
              placeholderTextColor={COLORS.WHITE}
            />

            <TextInput
              style={styles.inputStyle}
              placeholder="Senha"
              secureTextEntry
              placeholderTextColor={COLORS.WHITE}
            />
            <WelcomeButton
              text="Login"
              onPress={() => setStartClicked(false)}
              style={styles.styleAux}
            />
          </View>
        ) : (
          <WelcomeButton
            text="Comece Agora"
            onPress={() => setStartClicked(true)}
            style={styles.styleAux}
          />
        )}
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  topWelcome: {
    flex: 2,
    justifyContent: 'flex-end',
    paddingVertical: hp(10),
    alignItems: 'center',
  },
  buttomWelcome: {
    alignSelf: 'center',
  },
  logoTextStyle: {
    color: COLORS.WHITE,
    fontSize: wp(12),
    letterSpacing: wp(4),
    fontFamily: 'Raleway-Italic-VariableFont_wght',
  },
  styleAux: {
    alignSelf: 'center',
    marginVertical: hp(2),
  },
  titleLogin: {
    alignSelf: 'center',
    textAlign: 'center',
    color: COLORS.BLACK,
    marginVertical: hp(1),
    fontSize: wp(8),
    letterSpacing: wp(0.5),
    fontFamily: 'Raleway-VariableFont_wght',
  },
  inputStyle: {
    borderRadius: wp(8),
    width: wp(70),
    height: hp(6),
    backgroundColor: COLORS.GRADIENT_OPACITY,
    alignSelf: 'center',
    textAlign: 'center',
    marginVertical: hp(2),
    color: COLORS.BLACK,
    fontSize: wp(6),
    letterSpacing: wp(0.5),
    fontFamily: 'Raleway-VariableFont_wght',
  },
});

export default Welcome;
