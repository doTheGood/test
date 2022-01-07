import React from 'react';

import { tw } from '../../typings/tailwindcss-classnames';

export interface AvatarProps {
  imageUrl?: string;
  nameInitials: string;
  alt?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  imageUrl,
  nameInitials,
  alt,
}) => {
  const imageAvatarCN = tw('tag-w-9', 'tag-h-9', 'tag-rounded-full');
  const initialsAvatarCN = tw(
    'tag-w-9',
    'tag-h-9',
    'tag-flex',
    'tag-items-center',
    'tag-justify-center',
    'tag-rounded-full',
    'tag-text-black',
    'tag-bg-grey-50',
    'tag-font-normal',
    'tag-cursor-default',
  );

  return (
    <>
      {imageUrl ? (
        <img alt={alt ?? 'Avatar'} src={imageUrl} className={imageAvatarCN} />
      ) : (
        <div className={initialsAvatarCN}>
          <span>{nameInitials}</span>
        </div>
      )}
    </>
  );
};
