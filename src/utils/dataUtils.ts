import { FriendItem } from '../types/data';

const sortListByExp = (arr: FriendItem[]) => {
  return arr.sort((a: FriendItem, b: FriendItem) => {
    return b.exp - a.exp;
  });
};

export { sortListByExp };
