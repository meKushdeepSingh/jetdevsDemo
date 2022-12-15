import React, {FC} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {colors, commonStyles} from '../styles';
import {PrimaryButtonProps} from '../types/componentsTypes';

export const PrimaryButton: FC<PrimaryButtonProps> = ({
  title,
  onPress,
  mainStyle,
  disabled,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{
        ...commonStyles.primaryButtonStyles,
        ...mainStyle,
        backgroundColor: disabled ? colors.disabledButton : colors.primary,
      }}
      onPress={onPress}>
      <Text style={commonStyles.primaryButtonLabelStyles}>{title}</Text>
    </TouchableOpacity>
  );
};
