// @flow
import { ICONS } from '../constants';

const getIcon = (name: string) => {
  let icon;

  switch (name) {
    case 'codepen':
      icon = ICONS.CODEPEN;
      break;
    case 'github':
      icon = ICONS.GITHUB;
      break;
    case 'linkedin':
      icon = ICONS.LINKEDIN;
      break;
    case 'facebook':
      icon = ICONS.TELEGRAM;
      break;
    case 'email':
      icon = ICONS.EMAIL;
      break;
    case 'stackoverflow':
      icon = ICONS.STACKOVERFLOW;
      break;
    default:
      icon = {};
      break;
  }

  return icon;
};

export default getIcon;
