import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../styles/globalStyles';
import { FontAwesome5 } from '@expo/vector-icons';
import { ShopItem } from '../../types/data';

interface Props {
  item: ShopItem;
}

const containerHeight = 160;

const ShopCard: React.FC<Props> = ({ item }) => {
  const { name, description, tokenCost, image } = item;

  return (
    <View style={styles.container}>
      <View style={styles.sectionIcon}>
        <Text>Icon</Text>
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
    // borderColor: 'lightgreen',
    // borderWidth: 2,
    width: 140,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  sectionDetails: {
    // borderColor: 'red',
    // borderWidth: 2,
    flexShrink: 1,
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: 12,
  },
  titleText: {
    fontFamily: 'NunitoBold',
    fontSize: 20,
    color: colors.primary.black,
    marginBottom: 4,
  },
  descriptionText: {
    flexShrink: 1,
    fontFamily: 'NunitoRegular',
    fontSize: 18,
    color: colors.primary.gray,
    marginBottom: 8,
  },
  token: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  tokenText: {
    fontFamily: 'BalooTamma2SemiBold',
    fontSize: 18,
    color: colors.secondary.red,
    marginLeft: 6,
    marginRight: 10,
    textAlignVertical: 'center',
  },
});
