import React from 'react';
import { Button } from '@strapi/design-system';
import { ExternalLink } from '@strapi/icons';
import { useIntl } from 'react-intl';
import { getTranslation } from '../utils/getTranslation';

interface PreviewButtonProps {
  url: string;
  isDraft: boolean;
}

const PreviewButton = ({ url, isDraft }: PreviewButtonProps) => {
  const { formatMessage } = useIntl();

  const handleClick = () => {
    if (!url) return;

    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      size="S"
      startIcon={<ExternalLink />}
      variant="secondary"
      fullWidth={true}
    >
      {formatMessage(
        isDraft
          ? {
              id: getTranslation('form.button.draft'),
              defaultMessage: 'Open draft preview',
            }
          : {
              id: getTranslation('form.button.published'),
              defaultMessage: 'Open live view',
            }
      )}
    </Button>
  );
};

export { PreviewButton };
