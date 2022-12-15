// These toast are used to show the message to replace alert message and for in app notification tray

import {showMessage} from 'react-native-flash-message';
import {strings} from '../i18n';

export const errorToast = (
  description?: string,
  msg?: string,
  position?: any,
) => {
  showMessage({
    message: msg ? msg : strings.msgError,
    description: description ?? strings.msgOOPS,
    type: 'danger',
    position: position ? position : 'top',
    icon: 'auto',
  });
};

export const successToast = (
  description: string,
  msg?: string,
  position?: any,
) => {
  showMessage({
    message: msg ? msg : strings.msgSuccess,
    description: description ? description : '',
    type: 'success',
    position: position ? position : 'top',
    icon: 'auto',
  });
};
