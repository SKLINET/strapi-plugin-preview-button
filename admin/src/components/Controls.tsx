import React from 'react';
import {
  unstable_useContentManagerContext as useContentManagerContext,
  unstable_useDocument as useDocument,
} from '@strapi/strapi/admin';
import { useSettings } from '../hooks/useSettings';
import { PreviewButtonGroup } from './PreviewButtonGroup';

const Controls = () => {
  const context = useContentManagerContext();
  const entity = useDocument({
    documentId: context.id,
    model: context.model,
    collectionType: context.collectionType,
  });

  const settings = useSettings();

  console.log(settings);

  // Do not show when settings are loading
  if (!settings || !Array.isArray(settings.contentTypes)) return <></>;

  // Do not show when the plugin is not ready
  if (context.isLoading || context.isCreatingEntry) {
    return <></>;
  }

  const contentType = settings.contentTypes.find(
    (contentType) => contentType.uid === context.contentType?.uid
  );

  // Do not show when the plugin is not configured for the current content type
  if (!contentType) return <></>;

  // Do not show when the document is loading or not available
  if (!entity || entity.isLoading || !entity.document) return <></>;

  return <PreviewButtonGroup config={contentType} document={entity.document} />;
};

export default Controls;
