import React, {useState, useEffect} from 'react';
import {Controller} from 'react-hook-form';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {images} from '../core';
import {colors, commonStyles} from '../styles';
import {FieldInputProps} from '../types/componentsTypes';

const FieldInput: React.FC<FieldInputProps> = ({
  placeholder,
  title,
  multiline,
  keyboardType,
  maxLength,
  error,
  mode,
  autoCapitalize,
  control,
  rules,
  name,
  isRequired,
  accessibilityLabel,
  titleStyles,
  inputStyles,
  inputViewStyles,
}) => {
  /****** Destructured Props ******/

  /****** Hooks Functions ******/
  const [hidePassword, setHidePassword] = useState(mode == 'password');
  const [isFocused, setIsFocused] = useState(false);

  /****** Main Functions ******/

  return (
    <View style={commonStyles.fieldWrapperStyles}>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <View
            accessible={true}
            accessibilityLabel={
              accessibilityLabel ? accessibilityLabel(value) : undefined
            }
            style={[
              commonStyles.fieldInputWrapperStyles,
              {
                height: multiline ? 100 : 40,
                alignItems: multiline ? 'flex-start' : 'center',
                paddingVertical: multiline ? '2%' : 0,
                borderColor: isFocused ? colors.primary : colors.fieldBorder,
              },
              inputViewStyles,
            ]}>
            <Image
              style={{
                ...styles.icon,
                tintColor: isFocused ? colors.primary : colors.formIcons,
              }}
              source={name == 'email' ? images.icMail : images.icLock}
            />
            <TextInput
              onFocus={() => setIsFocused(true)}
              autoCapitalize={autoCapitalize}
              maxLength={maxLength}
              keyboardType={keyboardType ?? 'default'}
              multiline={multiline}
              maxFontSizeMultiplier={2}
              style={[
                styles.valueStyle,
                {
                  height: multiline ? 90 : 'auto',
                  textAlignVertical: multiline ? 'top' : 'auto',
                },

                inputStyles,
              ]}
              value={value}
              placeholder={placeholder}
              placeholderTextColor={colors.placeholder}
              onChangeText={onChange}
              onBlur={() => {
                setIsFocused(false);
                onBlur();
              }}
              secureTextEntry={hidePassword}
            />
            {mode == 'password' && (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setHidePassword(!hidePassword)}>
                <Image
                  style={{
                    ...styles.icon,
                    tintColor: isFocused ? colors.primary : colors.formIcons,
                  }}
                  source={hidePassword ? images.icOpenEye : images.icCloseEye}
                />
              </TouchableOpacity>
            )}
          </View>
        )}
        rules={rules ?? null}
        name={name}
        defaultValue=""
      />

      {error && (
        <Text
          numberOfLines={2}
          style={{
            ...commonStyles.errorTextStyle,
          }}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default FieldInput;

const styles = StyleSheet.create({
  valueStyle: {
    padding: 0,
    width: '88%',
    paddingHorizontal: '5%',
  },
  icon: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },
});
