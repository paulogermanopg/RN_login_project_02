import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import {
  heightPercentToDp as hp,
} from '../utils/sizeUtils';
import COLORS from '../utils/colorUtils';
import WelcomeButton from '../components/DefaultButton';
import {useNavigation} from '@react-navigation/native';
import * as S from './styles';

interface WelcomeProps {}

const Welcome = (props: WelcomeProps) => {
  const {} = props;
  const navigtion = useNavigation();

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
  }, [startClicked, buttonFlex]);

  return (
    <S.Gradient
      colors={[COLORS.GRADIENT_1, COLORS.GRADIENT_2, COLORS.GRADIENT_3]}>
      <S.TopWelcome>
        <S.LogoTextStyle>Login</S.LogoTextStyle>

        <S.LogoTextStyle>Project</S.LogoTextStyle>
      </S.TopWelcome>

      <Animated.View style={[styles.buttomWelcome, {flex: buttonFlex}]}>
        {startClicked ? (
          <S.BodyLogin>
            <S.TitleLogin>LOGIN</S.TitleLogin>

            <S.Input
              placeholder="E-mail"
              keyboardType="email-address"
              placeholderTextColor={COLORS.WHITE}
            />

            <S.Input
              placeholder="Senha"
              secureTextEntry
              placeholderTextColor={COLORS.WHITE}
            />
            <WelcomeButton
              text="Login"
              onPress={() => navigtion.navigate('ContentScreem')}
              style={styles.styleAux}
            />
          </S.BodyLogin>
        ) : (
          <WelcomeButton
            text="Comece Agora"
            onPress={() => setStartClicked(true)}
            style={styles.styleAux}
          />
        )}
      </Animated.View>
    </S.Gradient>
  );
};

const styles = StyleSheet.create({
  buttomWelcome: {
    alignSelf: 'center',
  },
  styleAux: {
    alignSelf: 'center',
    marginVertical: hp(2),
  },
});

export default Welcome;
