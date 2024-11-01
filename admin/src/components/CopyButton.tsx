import React from 'react';
import { Button } from '@strapi/design-system';
import { Link } from '@strapi/icons';
import { useIntl } from 'react-intl';
import { getTranslation } from '../utils/getTranslation';
import { useNotification } from '@strapi/strapi/admin';

interface CopyButtonProps {
  url: string;
  isDraft: boolean;
}

const CopyButton = ({ url, isDraft }: CopyButtonProps) => {
  const { formatMessage } = useIntl();
  const { toggleNotification } = useNotification();

  const handleClick = async () => {
    await navigator.clipboard.writeText(url);

    toggleNotification({
      type: 'success',
      message: formatMessage({
        id: 'notification.success.link-copied',
        defaultMessage: 'Link copied to the clipboard',
      }),
    });
  };

  return (
    <Button
      onClick={handleClick}
      size="S"
      startIcon={<Link />}
      variant="secondary"
      fullWidth={true}
    >
      {formatMessage(
        isDraft
          ? {
              id: getTranslation('form.button.copy-link.draft'),
              defaultMessage: 'Copy preview link',
            }
          : {
              id: getTranslation('form.button.copy-link'),
              defaultMessage: 'Copy link',
            }
      )}
    </Button>
  );
};

export { CopyButton };
