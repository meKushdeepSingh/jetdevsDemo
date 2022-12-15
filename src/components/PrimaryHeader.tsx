import React, {FC} from 'react';
import {View, Image} from 'react-native';
import {images} from '../core';
import {commonStyles} from '../styles';

export const PrimaryHeader: FC = () => {
  return (
    <View style={commonStyles.primaryHeaderStyles}>
      <Image
        style={commonStyles.primaryHeaderLogoStyles}
        source={images.icLogo}
      />
    </View>
  );
};
