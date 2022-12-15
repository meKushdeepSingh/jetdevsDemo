import React, {FC, useEffect, useState} from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';
import {PrimaryHeader, RandomUser} from '../../components';
import {constants} from '../../core';
import {getAsyncItem, getRandomUsersApi} from '../../services';
import {dispatch, RootState} from '../../store';
import {setFavoriteData} from '../../store/modules/favoriteSlice';
import {colors, commonStyles} from '../../styles';

export const Home: FC = () => {
  /************ Hooks Functions ************/
  const {randomUsers, isRefreshing, isLoadingMore} = useSelector(
    (state: RootState) => ({
      randomUsers: state.home.randomUsers,
      isRefreshing: state.home.isRefreshing,
      isLoadingMore: state.home.isLoadingMore,
    }),
  );

  const [randomUserApiParams, setRandomUserApiParams] = useState({
    results: 20,
    page: 1,
  });

  useEffect(() => {
    getFavData();
    getRandomUsersApi(randomUserApiParams);
  }, []);

  /************ Main Functions ************/

  const getFavData = async () => {
    let favData: any = await getAsyncItem(constants.asyncFavoriteUsers);
    if (favData) {
      dispatch(setFavoriteData(favData));
    }
  };

  const handleRefresh = () => {
    getRandomUsersApi(
      {
        ...randomUserApiParams,
        page: 1,
      },
      'refreshing',
    );
    setRandomUserApiParams({
      ...randomUserApiParams,
      page: 1,
    });
  };

  const handleLoadMore = () => {
    if (!isLoadingMore) {
      getRandomUsersApi(
        {
          ...randomUserApiParams,
          page: randomUserApiParams?.page + 1,
        },
        'load_more',
      );
      setRandomUserApiParams({
        ...randomUserApiParams,
        page: randomUserApiParams?.page + 1,
      });
    }
  };

  return (
    <View style={commonStyles.mainView}>
      <SafeAreaView style={{backgroundColor: colors.white}} />
      <PrimaryHeader />
      <FlatList
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
        contentContainerStyle={styles.contentContainerStyle}
        data={randomUsers}
        keyExtractor={(item: any, index: number) => `${index}_random_user_key`}
        renderItem={({item, index}) => <RandomUser data={item} />}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.2}
        ListFooterComponent={() =>
          isLoadingMore ? (
            <ActivityIndicator
              style={{marginTop: 20}}
              size={'large'}
              color={colors.primary}
            />
          ) : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: '5%',
    paddingBottom: '3%',
  },
});
