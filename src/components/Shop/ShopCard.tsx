import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { colors, typography } from '../../styles/globalStyles';
import { FontAwesome5 } from '@expo/vector-icons';
import { ShopItem } from '../../types/data';

interface Props {
  item: ShopItem;
}

enum ShopIcon {
  ICEBERG = 'ICEBERG',
  FIRE = 'FIRE',
  SUIT = 'SUIT',
  TRACKSUIT = 'TRACKSUIT',
  SUPERHERO = 'SUPERHERO',
  CONVERSATION = 'CONVERSATION',
  DATING = 'DATING',
}

const containerHeight = 160;

const ShopCard: React.FC<Props> = ({ item }) => {
  const { name, description, tokenCost, image } = item;

  const shopIcon = () => {
    switch (image) {
      case ShopIcon.ICEBERG:
        return require('../../../assets/icons/iceberg.png');
      case ShopIcon.FIRE:
        return require('../../../assets/icons/fire.png');
      case ShopIcon.SUIT:
        return require('../../../assets/icons/suit.png');
      case ShopIcon.TRACKSUIT:
        return require('../../../assets/icons/tracksuit.png');
      case ShopIcon.SUPERHERO:
        return require('../../../assets/icons/superhero.png');
      case ShopIcon.CONVERSATION:
        return require('../../../assets/icons/chatroom-outline.png');
      case ShopIcon.DATING:
        return require('../../../assets/icons/heart-outline.png');
      default:
        return require('../../../assets/icons/fire.png');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionIcon}>
        <Image style={{ width: 100, height: 100 }} resizeMode="contain" source={shopIcon()} />
      </View>
      <View style={styles.sectionDetails}>
        <Text style={styles.titleText}>{name}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
        <View style={styles.token}>
          <FontAwesome5 name="gem" size={18} color={colors.secondary.red} />
          <Text style={styles.tokenText}>{tokenCost}</Text>
        </View>
      </View>
    </View>
  );
};

export default ShopCard;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: containerHeight,
    borderWidth: 2,
    borderColor: colors.tints.gray,
    borderRadius: 10,
    marginVertical: 10,
    paddingTop: 10,
    paddingBottom: 14,
  },
  sectionIcon: {
    width: 140,
    paddingTop: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  sectionDetails: {
    flexShrink: 1,
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: 12,
  },
  titleText: {
    ...typography.fontSecondaryBold,
    color: colors.primary.black,
    marginBottom: 4,
  },
  descriptionText: {
    ...typography.fontSecondary,
    fontSize: 18,
    color: colors.primary.gray,
    flexShrink: 1,
    marginBottom: 8,
  },
  token: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  tokenText: {
    ...typography.fontPrimary,
    fontSize: 18,
    color: colors.secondary.red,
    marginLeft: 6,
    marginRight: 10,
    textAlignVertical: 'center',
  },
});
