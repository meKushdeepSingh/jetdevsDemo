import React, {FC} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {checkIsFav, constants, images, successToast} from '../core';
import {strings} from '../i18n';
import {setAsyncItem} from '../services';
import {dispatch, RootState} from '../store';
import {setFavoriteData} from '../store/modules/favoriteSlice';
import {colors, commonStyles} from '../styles';
import {
  FavoriteUserItemDataType,
  RandomUserProps,
} from '../types/componentsTypes';

export const RandomUser: FC<RandomUserProps> = ({data}) => {
  /*********** Hooks Functions ***********/
  const {favoriteData} = useSelector((state: RootState) => ({
    favoriteData: state.favorite.favoriteData,
  }));
  /*********** Main Functions ***********/
  const handleAddToFav = () => {
    const payload: FavoriteUserItemDataType = {
      name: `${data?.name?.first} ${data?.name?.last}`,
      profileImage: data?.picture?.medium,
      id: data?.login?.uuid,
    };
    const newArray = [...favoriteData, payload];
    dispatch(setFavoriteData(newArray));
    setAsyncItem(constants.asyncFavoriteUsers, newArray);
    successToast(strings.msgAddedToFav);
  };
  return (
    <View style={styles.itemWrapper}>
      <View style={styles.profileImageWrapper}>
        <Image
          style={styles.profileImage}
          source={{uri: data?.picture?.medium}}
        />
      </View>
      <View style={styles.rightSideWrapper}>
        <View style={{width: '80%'}}>
          <Text style={styles.nameText}>
            {`${data?.name?.first} ${data?.name?.last}`}
          </Text>
          <View style={{...commonStyles.horizontalViewStyles}}>
            <Image
              style={{
                ...commonStyles.verySmallIcon,
                tintColor: colors.locationPin,
              }}
              source={images.icLocPin}
            />
            <Text
              style={
                styles.locationText
              }>{`${data?.location?.city}, ${data?.location?.country}`}</Text>
          </View>
          <Text style={styles.locationText}>
            {strings.age}: {data?.dob?.age}
          </Text>
        </View>
        <TouchableOpacity onPress={handleAddToFav}>
          <Image
            style={{...commonStyles.largeIcon, tintColor: colors.primary}}
            source={
              checkIsFav(data?.login?.uuid)
                ? images.icFilledStar
                : images.icStar
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
    marginTop: 15,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: '3%',
    width: '97%',
    alignSelf: 'flex-end',
  },
  profileImage: {
    height: 55,
    width: 55,
    resizeMode: 'contain',
    borderRadius: 30,
  },
  profileImageWrapper: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    left: -15,
    backgroundColor: colors.white,
  },
  rightSideWrapper: {
    ...commonStyles.horizontalViewStyles,
    alignItems: 'flex-start',
  },
  nameText: {
    fontSize: 17,
    fontWeight: '600',
  },
  locationText: {
    color: colors.locationPin,
    marginLeft: '3%',
  },
});
