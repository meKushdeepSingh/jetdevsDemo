import {strings} from '../i18n';

const validationRegex = {
  numeric: /^\d+$/,
  alphabetic: /^[a-zA-Z\s]+$/,
  mobile: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

export const validationSchema = {
  required: {
    required: {
      value: true,
      message: strings.valRequired,
    },
  },

  notRequired: {
    required: {
      value: false,
    },
  },

  email: {
    required: {
      value: true,
      message: strings.valRequired,
    },
    pattern: {
      value: validationRegex.email,
      message: strings.valEmail,
    },
  },
};
