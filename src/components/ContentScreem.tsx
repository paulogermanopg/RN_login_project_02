import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  Easing,
  Animated,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DefaultButton from '../components/DefaultButton';
import {
  heightPercentToDp as hp,
  widthPercentToDp as wp,
} from '../utils/sizeUtils';
import COLORS from '../utils/colorUtils';
import LinearGradient from 'react-native-linear-gradient';
import {mockData, mockInfo} from '../mocks';
import * as S from './styles';

interface ContentScreemProps {}

const ContentScreem = (props: ContentScreemProps) => {
  const {} = props;

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [infoClicked, setInfoClicked] = useState<boolean>(false);
  const [buttomPartFlex, setButtomPartFlex] = useState<any>(
    new Animated.Value(1),
  );
  const [leftPosition, setLeftPosition] = useState<any>(
    new Animated.Value(wp(100)),
  );

  const changeImage = () => {
    if (infoClicked) {
      setInfoClicked(false);
    } else {
      if (currentIndex <= 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
      doAnimation(leftPosition, wp(100), 0);
    }
  };

  const doAnimation = (arg: any, value: number, timer: number) => {
    Animated.timing(arg, {
      toValue: value,
      duration: timer,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start();
  };

  useEffect(() => {
    doAnimation(leftPosition, 0, 350);
  }, [currentIndex, leftPosition]);

  useEffect(() => {
    if (infoClicked) {
      doAnimation(buttomPartFlex, 5, 500);
    } else {
      doAnimation(buttomPartFlex, 1, 500);
    }
  }, [infoClicked, buttomPartFlex]);

  return (
    <S.Container>
      <Animated.View style={{flex: 2, left: leftPosition, zIndex: 2}}>
        <ImageBackground
          source={mockData[currentIndex].image}
          style={{flex: 2}}>
          <S.Arrow onPress={() => changeImage()}>
            <Icon
              name={'arrow-forward'}
              size={40}
              color={COLORS.WHITE}
              style={{transform: [{rotate: infoClicked ? '180deg' : '0deg'}]}}
            />
          </S.Arrow>

          <S.ImageText>{mockData[currentIndex].name}</S.ImageText>
        </ImageBackground>
      </Animated.View>

      <Animated.View style={{flex: buttomPartFlex}}>
        <LinearGradient
          colors={[COLORS.GRADIENT_1, COLORS.GRADIENT_2, COLORS.GRADIENT_3]}
          style={{flex: 1}}>
          {infoClicked ? (
            <S.InfoContent>
              <S.InfoContentTitle>
                <S.InfoTitleText>Pontos turísticos</S.InfoTitleText>
              </S.InfoContentTitle>

              <S.InfoContentBody>
                {mockInfo.map(data => (
                  <S.InfoButtomBody>
                    <S.InfoText>{data.local}</S.InfoText>

                    <S.BodyImage source={data.image} />

                    <S.CoverImage />

                    <S.InfoText>{data.area}</S.InfoText>
                  </S.InfoButtomBody>
                ))}
              </S.InfoContentBody>

              <DefaultButton
                text="Retornar"
                style={{alignSelf: 'center', marginVertical: hp(2)}}
                onPress={() => setInfoClicked(false)}
              />
            </S.InfoContent>
          ) : (
            <S.ContentDefault>
              <S.ContentDefaultDescription>
                <S.InfoTextTitle>Localidades Próximas</S.InfoTextTitle>

                <S.InfoTextDescription>
                  {mockData[currentIndex].description}
                </S.InfoTextDescription>
              </S.ContentDefaultDescription>

              <DefaultButton
                text="Mais informações"
                style={{alignSelf: 'center', marginVertical: hp(2)}}
                onPress={() => setInfoClicked(true)}
              />
            </S.ContentDefault>
          )}
        </LinearGradient>
      </Animated.View>
    </S.Container>
  );
};

export default ContentScreem;
