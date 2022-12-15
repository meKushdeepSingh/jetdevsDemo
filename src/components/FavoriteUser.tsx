import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {constants, errorToast, images} from '../core';
import {strings} from '../i18n';
import {setAsyncItem} from '../services';
import {dispatch, RootState} from '../store';
import {setFavoriteData} from '../store/modules/favoriteSlice';
import {colors, commonStyles} from '../styles';
import {
  FavoriteUserItemDataType,
  FavoriteUserProps,
} from '../types/componentsTypes';

export const FavoriteUser: FC<FavoriteUserProps> = ({data}) => {
  /*********** Hooks Functions ***********/
  const {favoriteData} = useSelector((state: RootState) => ({
    favoriteData: state.favorite.favoriteData,
  }));
  /*********** Main Functions ***********/
  const handleRemoveToFav = () => {
    const newArray = favoriteData.filter(
      (item: FavoriteUserItemDataType) => item?.id !== data?.id,
    );
    dispatch(setFavoriteData(newArray));
    setAsyncItem(constants.asyncFavoriteUsers, newArray);
    errorToast(strings.msgRemoveFromFav);
  };
  return (
    <View style={styles.itemWrapper}>
      <Image style={styles.profileImage} source={{uri: data?.profileImage}} />
      <Text style={styles.nameText}>{data?.name}</Text>
      <TouchableOpacity onPress={handleRemoveToFav}>
        <Image
          style={{...commonStyles.mediumIcon, tintColor: colors.primary}}
          source={images.icFilledStar}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    ...commonStyles.horizontalViewStyles,
    width: '100%',
    paddingVertical: '3%',
    borderBottomWidth: 0.5,
    borderColor: colors.fieldBorder,
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 30,
    resizeMode: 'contain',
  },
  nameText: {
    width: '80%',
    paddingLeft: '3%',
    fontSize: 15,
  },
});
