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
// import Animated from 'react-native-reanimated';
import {
  heightPercentToDp as hp,
  widthPercentToDp as wp,
} from '../utils/sizeUtils';
import COLORS from '../utils/colorUtils';
import IMAGES from '../images';

interface ContentScreemProps {}

const ContentScreem = (props: ContentScreemProps) => {
  const {} = props;

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [leftPosition, setLeftPosition] = useState<any>(new Animated.Value(wp(100)));

  const mockData = [
    {
      name: 'NATURE_01',
      image: IMAGES.nature_01,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in justo dictum, ultrices purus vel, dapibus ipsum. Vestibulum vel metus augue. Nam posuere arcu sed.',
    },
    {
      name: 'NATURE_02',
      image: IMAGES.nature_02,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in justo dictum, ultrices purus vel, dapibus ipsum. Vestibulum vel metus augue. Nam posuere arcu sed.',
    },
    {
      name: 'NATURE_03',
      image: IMAGES.nature_03,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in justo dictum, ultrices purus vel, dapibus ipsum. Vestibulum vel metus augue. Nam posuere arcu sed.',
    },
  ];

  const changeImage = () => {
    if (currentIndex <= 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
      Animated.timing(leftPosition, {
        toValue: 0,
        duration: 350,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start();
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <Animated.View style={{flex: 2, left: leftPosition}}>
        <ImageBackground
          source={mockData[currentIndex].image}
          style={{flex: 2}}>
          <TouchableOpacity
            style={styles.ArrowButton}
            onPress={() => changeImage()}>
            <Icon name={'arrow-forward'} size={40} color={COLORS.WHITE} />
          </TouchableOpacity>
        </ImageBackground>
      </Animated.View>

      <Animated.View style={{flex: 1}}></Animated.View>
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
});

export default ContentScreem;
