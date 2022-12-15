import React, {FC} from 'react';
import {useForm, useWatch} from 'react-hook-form';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {FieldInput, PrimaryButton} from '../../components';
import {
  constants,
  errorToast,
  images,
  screenName,
  successToast,
} from '../../core';
import {validationSchema} from '../../core/validations';
import {strings} from '../../i18n';
import {setAsyncItem} from '../../services';
import {dispatch} from '../../store';
import {setProfileData} from '../../store/modules/authSlice';
import {colors, commonStyles} from '../../styles';
import {LoginForm} from '../../types/formTypes';
import {CommonNavigationProps} from '../../types/navigationTypes';

const Login: FC<CommonNavigationProps> = ({navigation}) => {
  /************* Hooks Functions *************/
  const {
    handleSubmit,
    formState: {errors},
    control,
    getValues,
    watch,
  } = useForm<LoginForm>({
    mode: 'all',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: false,
  });

  /************* Main Functions *************/

  const loginValidation = (formValues: LoginForm) => {
    if (formValues?.email != 'reactnative@jetdevs.com') {
      errorToast(strings.msgWrongEmail);
      return false;
    } else if (formValues?.password != 'jetdevs@123') {
      errorToast(strings.msgWrongPassword);
      return false;
    } else {
      return true;
    }
  };

  const onSubmit = async (formValues: any) => {
    console.log('formValues', formValues);
    if (loginValidation(formValues)) {
      dispatch(setProfileData(formValues));
      setAsyncItem(constants.asyncUserToken, formValues);
      successToast(strings.msgLoginSuccess);
    }
  };
  return (
    <View
      style={{
        ...commonStyles.mainView,
        justifyContent: 'center',
      }}>
      <SafeAreaView />
      <View style={styles.formWrapper}>
        <View style={styles.logoWrapper}>
          <Image style={styles.logoIcon} source={images.icLogo} />
        </View>
        <Text style={styles.heading}>{strings.login}</Text>

        <FieldInput
          control={control}
          name="email"
          error={errors.email?.message}
          placeholder={strings.email}
          rules={validationSchema.email}
          autoCapitalize="none"
        />

        <FieldInput
          control={control}
          name="password"
          error={errors?.password?.message}
          placeholder={strings.password}
          mode="password"
          rules={validationSchema.required}
        />

        <PrimaryButton
          disabled={
            watch('password') == undefined ||
            watch('email') == undefined ||
            watch('email') == '' ||
            watch('password') == ''
          }
          title={strings.login}
          onPress={handleSubmit(onSubmit)}
          mainStyle={{marginTop: '25%'}}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  formWrapper: {
    width: '92%',
    height: '75%',
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: '5%',
    paddingVertical: '3%',
    position: 'relative',
  },
  logoWrapper: {
    height: 90,
    width: 90,
    backgroundColor: colors.white,
    borderRadius: 50,
    position: 'absolute',
    top: -35,
    alignSelf: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoIcon: {
    height: 65,
    width: 65,
    resizeMode: 'contain',
  },
  heading: {
    fontWeight: '600',
    fontSize: 18,
    alignSelf: 'center',
    marginTop: '23%',
    color: colors.textDarkGrey,
    marginBottom: '20%',
  },
});
