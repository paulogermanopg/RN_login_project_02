import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Easing,
  TextInput,
  Animated,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DefaultButton from '../components/DefaultButton';
import {
  heightPercentToDp as hp,
  widthPercentToDp as wp,
} from '../utils/sizeUtils';
import COLORS from '../utils/colorUtils';
import IMAGES from '../images';
import LinearGradient from 'react-native-linear-gradient';

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

  const mockData = [
    {
      name: 'Árvores',
      image: IMAGES.nature_01,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in justo dictum, ultrices purus vel, dapibus ipsum. Vestibulum vel metus augue. Nam posuere arcu sed.',
    },
    {
      name: 'Campos',
      image: IMAGES.nature_02,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in justo dictum, ultrices purus vel, dapibus ipsum. Vestibulum vel metus augue. Nam posuere arcu sed.',
    },
    {
      name: 'Pontes',
      image: IMAGES.nature_03,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in justo dictum, ultrices purus vel, dapibus ipsum. Vestibulum vel metus augue. Nam posuere arcu sed.',
    },
  ];

  const mockInfo = [
    {
      local: 'Parques',
      area: '1100m²',
      image: IMAGES.subNature_01,
    },
    {
      local: 'Comércios',
      area: '4100m²',
      image: IMAGES.subNature_02,
    },
    {
      local: 'Ruas',
      area: '300m²',
      image: IMAGES.subNature_03,
    },
  ];

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
  }, [currentIndex]);

  useEffect(() => {
    if (infoClicked) {
      doAnimation(buttomPartFlex, 5, 500);
    } else {
      doAnimation(buttomPartFlex, 1, 500);
    }
  }, [infoClicked]);

  return (
    <View style={styles.container}>
      <Animated.View style={{flex: 2, left: leftPosition, zIndex: 2}}>
        <ImageBackground
          source={mockData[currentIndex].image}
          style={{flex: 2}}>
          <TouchableOpacity
            style={styles.ArrowButton}
            onPress={() => changeImage()}>
            <Icon
              name={'arrow-forward'}
              size={40}
              color={COLORS.WHITE}
              style={{transform: [{rotate: infoClicked ? '180deg' : '0deg'}]}}
            />
          </TouchableOpacity>

          <Text style={styles.textImage}>{mockData[currentIndex].name}</Text>
        </ImageBackground>
      </Animated.View>

      <Animated.View style={{flex: buttomPartFlex}}>
        <LinearGradient
          colors={[COLORS.GRADIENT_1, COLORS.GRADIENT_2, COLORS.GRADIENT_3]}
          style={{flex: 1}}>
          {infoClicked ? (
            <View
              style={{
                flex: 1,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                paddingVertical: hp(3),
              }}>
              <View
                style={{
                  backgroundColor: COLORS.RED_SOFT,
                  width: wp(60),
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: wp(1),
                  borderRadius: wp(2),
                }}>
                <Text
                  style={{color: COLORS.WHITE, fontFamily: 'Parkinsans-Bold'}}>
                  Pontos turísticos
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}>
                {mockInfo.map(data => (
                  <TouchableOpacity
                    style={{
                      margin: wp(5),
                      alignItems: 'center',
                      alignSelf: 'center',
                    }}>
                    <Text style={styles.defaultText}>{data.local}</Text>
                    <Image
                      source={data.image}
                      style={{
                        width: wp(26),
                        height: wp(26),
                        borderRadius: wp(4),
                      }}
                    />
                    <View
                      style={{
                        width: wp(26),
                        height: wp(26),
                        borderRadius: wp(4),
                        position: 'absolute',
                        backgroundColor: COLORS.GRAY_OPACITY,
                        marginTop: hp(2),
                      }}></View>
                    <Text style={styles.defaultText}>{data.area}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <DefaultButton
                text="Retornar"
                style={{alignSelf: 'center', marginVertical: hp(2)}}
                onPress={() => setInfoClicked(false)}
              />
            </View>
          ) : (
            <View style={{flex: 1}}>
              <View style={{marginTop: hp(3), marginHorizontal: wp(4)}}>
                <Text style={styles.textTitle}>Teste do texto aleatório</Text>

                <Text style={styles.textBody}>
                  {mockData[currentIndex].description}
                </Text>
              </View>

              <DefaultButton
                text="Mais informações"
                style={{alignSelf: 'center', marginVertical: hp(2)}}
                onPress={() => setInfoClicked(true)}
              />
            </View>
          )}
        </LinearGradient>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.GRADIENT_1,
  },
  ArrowButton: {
    backgroundColor: COLORS.RED_SOFT,
    width: wp(16),
    height: wp(16),
    alignSelf: 'flex-end',
    position: 'absolute',
    right: wp(10),
    bottom: hp(10),
    borderRadius: wp(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textImage: {
    fontFamily: 'Parkinsans-Light',
    fontSize: wp(13),
    position: 'absolute',
    bottom: -hp(3),
    color: COLORS.WHITE,
    zIndex: 1,
  },
  textTitle: {
    fontFamily: 'Parkinsans-Medium',
    color: COLORS.WHITE,
    letterSpacing: wp(0.2),
  },
  textBody: {
    fontFamily: 'Raleway-VariableFont_wght',
    color: COLORS.WHITE,
    letterSpacing: wp(0.1),
    marginVertical: hp(2),
  },
  defaultText: {
    color: COLORS.WHITE,
    fontFamily: 'Parkinsans-Regular',
  },
});

export default ContentScreem;
