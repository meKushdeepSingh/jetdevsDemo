import React, {FC, useEffect} from 'react';
import {View, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {FavoriteUser, PrimaryHeader} from '../../components';
import {checkIsFav} from '../../core';
import {RootState} from '../../store';
import {colors, commonStyles} from '../../styles';

export const Favorite: FC = () => {
  /************ Hooks Functions ************/
  const {favoriteData} = useSelector((state: RootState) => ({
    favoriteData: state.favorite.favoriteData,
  }));

  return (
    <View style={{...commonStyles.mainView, backgroundColor: colors.white}}>
      <SafeAreaView style={{backgroundColor: colors.white}} />
      <PrimaryHeader />
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={favoriteData}
        keyExtractor={(item: any, index: number) => `${index}_random_user_key`}
        renderItem={({item, index}) => <FavoriteUser data={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingLeft: '5%',
    paddingBottom: '3%',
  },
});
