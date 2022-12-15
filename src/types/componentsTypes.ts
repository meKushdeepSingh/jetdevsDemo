import {KeyboardTypeOptions, TextStyle, ViewStyle} from 'react-native';

export type FieldNameTypes = 'email' | 'password';

export type FieldInputProps = {
  placeholder?: string;
  title?: string;
  titleStyles?: TextStyle;
  inputStyles?: TextStyle;
  multiline?: boolean;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
  error?: any;
  mode?: string;
  autoCapitalize?: 'characters' | 'none' | 'sentences' | 'words';
  control: any;
  rules?: any;
  name: FieldNameTypes;
  isRequired?: boolean;
  accessibilityLabel?: any;
  inputViewStyles?: ViewStyle;
};

export type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
  mainStyle?: ViewStyle;
  disabled?: boolean;
};

export type RandomUserProps = {
  data: any;
};

export type FavoriteUserProps = {
  data: FavoriteUserItemDataType;
};

export type FavoriteUserItemDataType = {
  name: string;
  profileImage: string;
  id: string;
};
