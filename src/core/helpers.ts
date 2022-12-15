import {getStore} from '../store';
import {FavoriteUserItemDataType} from '../types/componentsTypes';

export const checkIsFav = (id: string) => {
  const {
    favorite: {favoriteData},
  } = getStore();
  const newArray = favoriteData.map(
    (item: FavoriteUserItemDataType) => item?.id,
  );
  return newArray.includes(id);
};
