import React from 'react';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import PlaceOutlinedIcon from '@material-ui/icons/PlaceOutlined';
import StarIcon from '@material-ui/icons/Star';

import FlameIcon from '../src/assets/icons/flame.svg';
import { SvgIcon } from '../src/components/SvgIcon';

const iconList = {
  None: undefined,
  ArrowForwardIcon: <ArrowForwardIcon />,
  CropOriginalIcon: <CropOriginalIcon />,
  PlaceOutlinedIcon: <PlaceOutlinedIcon />,
  PhoneOutlinedIcon: <PhoneOutlinedIcon />,
  StarIcon: <StarIcon />,
  FlameIcon: (
    <SvgIcon>
      <FlameIcon />
    </SvgIcon>
  ),
};

const iconListLabels = Object.fromEntries(
  Object.keys(iconList).map((icon) => [
    icon,
    icon,
    // Improving the labels somehow did not work
    // .replace(/([A-Z]+)/g, ' $1')
    // .replace('Icon', '')
    // .replace(/^ /, '')
  ]),
);

export const iconControl = {
  options: Object.keys(iconList),
  mapping: iconList,
  control: {
    type: 'select',
    labels: iconListLabels,
  },
};
