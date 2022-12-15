import React, {FC} from 'react';
import {View} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import {Loader} from './components';
import MainNavigator from './navigation/MainNavigator';
import store from './store';
import {commonStyles} from './styles';

const App: FC = () => {
  return (
    <Provider store={store}>
      <View style={commonStyles.mainView}>
        <MainNavigator />
        <FlashMessage duration={4000} color={'#ffffff'} />
        <Loader />
      </View>
    </Provider>
  );
};

export default App;
