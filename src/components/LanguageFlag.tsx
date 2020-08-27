import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

interface Props {
  countryCode: string;
  size: number;
}

enum Language {
  DE = 'DE',
  EN = 'EN',
  ES = 'ES',
  IT = 'IT',
  NO = 'NO',
  SE = 'SE',
  TR = 'TR',
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
    return { width: props.size, height: props.size };
  };

  return <Image style={{ ...styles.image, ...imageSize() }} source={imageSource()} />;
};

export default LanguageFlag;

const styles = StyleSheet.create({
  image: {
    borderRadius: 14,
  },
});
