import { Level, League } from '../types/ui';
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

const getLeagueColor = (league: string): string => {
  switch (league) {
    case League.BRONZE:
      return colors.leagues.bronze;
    case League.SILVER:
      return colors.leagues.silver;
    case League.GOLD:
      return colors.leagues.gold;
    case League.SAPPHIRE:
      return colors.leagues.sapphire;
    case League.RUBY:
      return colors.leagues.ruby;
    case League.EMERALD:
      return colors.leagues.emerald;
    case League.AMETHYST:
      return colors.leagues.amethyst;
    case League.OBSIDIAN:
      return colors.leagues.obsidian;
    case League.PEARL:
      return colors.leagues.pearl;
    case League.DIAMOND:
      return colors.leagues.diamond;
    default:
      return colors.primary.gray;
  }
};

export { getLevelColor, getLeagueColor };
