import { Level } from '../types/ui';
import { colors } from '../styles/globalStyles';

const getLevelColor = (level: number, isCompleted: boolean = false): string => {
  if (isCompleted) {
    return colors.tints.gold;
  }

  switch (level) {
    case 0:
      return colors.tints.gray;
    case 1:
      return colors.tints.lavenderDark;
    case 2:
      return colors.tints.blueDark;
    case 3:
      return colors.primary.green;
    case 4:
      return colors.secondary.red;
    case 5:
      return colors.secondary.orange;
    default:
      return colors.tints.gray;
  }
};

export { getLevelColor };
