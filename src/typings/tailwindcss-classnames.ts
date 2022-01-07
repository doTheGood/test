import classnamesLib from 'clsx';

import { PREFIX } from '../constants/tailwind.constants';

// eslint-disable-next-line no-restricted-imports
import * as Types from './tailwindcss-classnames.gen';

// TODO: Rename that file to tailwindcss-classnames.ts after
// tailwindcss-classnames will support utilities OR
// https://github.com/muhammadsammy/tailwindcss-classnames/issues/215 will be resolved

export type TAccessibility = Types.TAccessibility;
export type TBackgroundColor = Types.TBackgroundColor;
export type TBackgrounds = Types.TBackgrounds;
export type TBorderColor = Types.TBorderColor;
export type TBorders = Types.TBorders;
export type TEffects = Types.TEffects;
export type TFilters = Types.TFilters;
export type TFlexBox = Types.TFlexBox;
export type TGrid = Types.TGrid;
export type TInteractivity = Types.TInteractivity;
export type TLayout = Types.TLayout;
export type TSizing = Types.TSizing;
export type TSpacing = Types.TSpacing;
export type TSVG = Types.TSVG;
export type TTables = Types.TTables;
export type TTextColor = Types.TTextColor;
export type TTransforms = Types.TTransforms;
export type TTransitionsAndAnimations = Types.TTransitionsAndAnimations;

type TResponsiveVariants = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

type TTypographyCustomVariants = TResponsiveVariants;

type TTypographyCustom =
  | 'text-header-1'
  | 'text-header-2'
  | 'text-header-3'
  | 'text-header-4'
  | 'text-header-5'
  | 'text-header-6'
  | 'text-subtitle-1'
  | 'text-subtitle-2'
  | 'text-subtitle-3'
  | 'text-body-normal-16'
  | 'text-body-light-16'
  | 'text-body-bold-16'
  | 'text-body-extrabold-16'
  | 'text-body-normal-14'
  | 'text-body-light-14'
  | 'text-body-bold-14'
  | 'text-body-extrabold-14'
  | 'text-body-normal-12'
  | 'text-body-light-12'
  | 'text-body-bold-12'
  | 'text-caption'
  | 'text-caption-light'
  | 'text-caption-bold'
  | 'text-caption-extrabold'
  | 'text-tagline-small'
  | 'text-tagline-xsmall'
  | 'text-hyperlink-12'
  | 'text-hyperlink-14'
  | 'text-hyperlink-16'
  | 'text-button-14'
  | 'text-button-16'
  | 'text-button-18'
  | 'text-label-small'
  | 'text-label-large'
  | 'text-table-header';

export type TTypography =
  | Types.TTypography
  | `${typeof PREFIX}${TTypographyCustom}`;

type TGradientsCustom =
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'teal-indigo-purple';
type TGradientsCustomPrefixes = `${typeof PREFIX}bg`;

export type TPseudoClasses =
  | Types.TPseudoClasses
  | `${TTypographyCustomVariants}:${TTypographyCustom}`
  | `${TGradientsCustomPrefixes}-gradient-${TGradientsCustom}`;

export type TClasses =
  | Types.TClasses
  | TTypography
  | TPseudoClasses
  | `${typeof PREFIX}${TGradientsCustom}`;
export type TKey = TClasses | Types.TTailwindString;

export type TArg =
  | TClasses
  | null
  | undefined
  | { [key in TKey]?: boolean }
  | Types.TTailwindString;

export type TTailwind = (...args: TArg[]) => Types.TTailwindString;

export const classnames: TTailwind = classnamesLib as any;

export const tw = classnames;
