import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Language } from '../types/language';
interface Props {
  countryCode: string;
  size: number;
}

const imagePath = '../../assets/flags/';
const LanguageFlag: React.FC<Props> = (props) => {
  const imageSource = () => {
    switch (props.countryCode) {
      case Language.DE:
        return require(`${imagePath}DE.png`);
      case Language.EN:
        return require(`${imagePath}EN.png`);
      case Language.ES:
        return require(`${imagePath}ES.png`);
      case Language.IT:
        return require(`${imagePath}IT.png`);
      case Language.NO:
        return require(`${imagePath}NO.png`);
      case Language.SE:
        return require(`${imagePath}SE.png`);
      case Language.TR:
        return require(`${imagePath}TR.png`);
      default:
        return require(`${imagePath}EN.png`);
    }
  };

  const imageSize = () => {
    /**
     * Width = size
     * Height = 2/3 of size
     * Border Radius = 10% of size
     */
    return { width: props.size, height: props.size - props.size / 3, borderRadius: props.size / 10 };
  };

  return <Image style={{ ...styles.image, ...imageSize() }} source={imageSource()} />;
};

export default LanguageFlag;

const styles = StyleSheet.create({
  image: {},
});
