import {constants} from '../core';
import {dispatch, getStore} from '../store';
import {
  setLoadingMore,
  setRandomUsers,
  setRefreshing,
} from '../store/modules/homeSlice';
import {setLoading} from '../store/modules/loaderSlice';
import {get} from './request';

export const getRandomUsersApi = (
  payload: any,
  type?: 'refreshing' | 'load_more',
) => {
  dispatch(
    type == 'refreshing'
      ? setRefreshing(true)
      : type == 'load_more'
      ? setLoadingMore(true)
      : setLoading(true),
  );
  get('', payload)
    .then(res => {
      console.log('getRandomUsersApi API response', res);
      if (res?.status == constants.apiSuccess) {
        const {
          home: {randomUsers},
        } = getStore();
        dispatch(
          type == 'load_more'
            ? setRandomUsers([...randomUsers, ...res?.results])
            : setRandomUsers(res?.results),
        );
      }
      dispatch(
        type == 'refreshing'
          ? setRefreshing(false)
          : type == 'load_more'
          ? setLoadingMore(false)
          : setLoading(false),
      );
    })
    .catch(e => {
      dispatch(
        type == 'refreshing'
          ? setRefreshing(false)
          : type == 'load_more'
          ? setLoadingMore(false)
          : setLoading(false),
      );
      console.log('API ERROR', e);
    });
};
