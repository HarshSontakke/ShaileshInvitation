import React from 'react';
import { getAsset } from '../assets/assets';

export function AssetImage({
  assetKey,
  src,
  alt = '',
  loading = 'lazy',
  className = '',
  ...props
}) {
  const imageSrc = src || getAsset(assetKey);

  return (
    <img
      src={imageSrc}
      alt={alt}
      loading={loading}
      className={className}
      {...props}
    />
  );
}

export function AssetDivider({ assetKey = 'divider1', className = '', ...props }) {
  return (
    <AssetImage
      assetKey={assetKey}
      alt="Divider"
      className={className}
      {...props}
    />
  );
}

export default AssetImage;
