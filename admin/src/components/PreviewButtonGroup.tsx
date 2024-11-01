import React from 'react';
import styled from 'styled-components';
import { Flex } from '@strapi/design-system';
import { IContentType } from '../hooks/useSettings';
import { PreviewButton } from './PreviewButton';
import { CopyButton } from './CopyButton';

const Wrapper = styled(Flex)`
  width: 100%;
  margin-top: 16px;
`;

interface PreviewButtonGroupProps {
  config: IContentType;
  document: Record<string, any>;
}

function replacePlaceholders(str: string, data: Record<string, any>) {
  return str.replace(/{(\w+)}/g, (match, key) => {
    return key in data ? data[key] : match;
  });
}

const PreviewButtonGroup = ({ config, document }: PreviewButtonGroupProps) => {
  const isPublished = document.status === 'published';

  const themeUrl = isPublished ? config.published.url : config.draft.url;
  const themeQuery = isPublished ? config.published.query : config.draft.query;

  const params = Object.fromEntries(
    Object.entries(themeQuery).map(([key, value]) => [key, replacePlaceholders(value, document)])
  );

  const url = `${themeUrl}?${new URLSearchParams(params)}`;

  return (
    <Wrapper direction="column" gap={2}>
      <PreviewButton url={url} isDraft={!isPublished} />
      <CopyButton url={url} isDraft={!isPublished} />
    </Wrapper>
  );
};

export { PreviewButtonGroup };
