import React, {FC} from 'react';
import {View, ActivityIndicator, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';
import {strings} from '../i18n';
import {RootState} from '../store';
import {colors} from '../styles';

export const Loader: FC = () => {
  /*********** Hooks Functions **********/
  const {isLoading} = useSelector((state: RootState) => ({
    isLoading: state.loader?.isLoading,
  }));
  return (
    <Modal isVisible={isLoading} style={styles.modalStyles}>
      <View style={styles.loaderWrapper}>
        <ActivityIndicator size={'large'} color={colors.primary} />
        <Text style={styles.loaderText}>{strings.loading}</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalStyles: {},
  loaderWrapper: {
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 5,
    alignSelf: 'center',
  },
  loaderText: {
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: '2%',
  },
});
