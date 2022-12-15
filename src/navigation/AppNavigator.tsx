import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {Home} from '../modules/home/Home';
import {Favorite} from '../modules/favorite/Favorite';
import {images, screenName} from '../core';
import {colors, commonStyles} from '../styles';
import {strings} from '../i18n';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  /******* Hooks Function *******/
  const {height, width} = useWindowDimensions();

  /******* Main Function *******/
  const renderTabItem = (data: {
    focused: boolean;
    activeTabImage: any;
    inactiveTabImage: any;
    tabLabel: string;
  }) => {
    return (
      <View
        style={{
          ...styles.tabItemWrapper,
          borderTopWidth: data?.focused ? 1 : 0,
          width: width / 2,
        }}>
        <Image
          style={{
            ...commonStyles.mediumIcon,
            tintColor: colors.primary,
          }}
          source={data?.focused ? data?.activeTabImage : data?.inactiveTabImage}
        />
        <Text
          numberOfLines={1}
          style={{
            fontSize: 9,
            color: colors.primary,
          }}>
          {data?.tabLabel}
        </Text>
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name={screenName.home}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabItem({
              focused,
              activeTabImage: images.icFilledHome,
              inactiveTabImage: images.icHome,
              tabLabel: strings.home,
            }),
        }}
        component={Home}
      />
      <Tab.Screen
        name={screenName.favorite}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabItem({
              focused,
              activeTabImage: images.icFilledStar,
              inactiveTabImage: images.icStar,
              tabLabel: strings.favorite,
            }),
        }}
        component={Favorite}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyles: {height: 65, padding: 0},
  tabItemWrapper: {
    alignItems: 'center',
    borderTopColor: colors.primary,
    height: '100%',
    justifyContent: 'center',
  },
});
