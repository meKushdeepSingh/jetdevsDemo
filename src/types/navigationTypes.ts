export type navigation = {
  navigate: Function;
  dispatch: Function;
  addListener: Function;
  goBack: Function;
  isFocused: Function;
  replace: Function;
};

export type CommonNavigationProps = {
  navigation?: navigation;
  route?: any;
};
