import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const styles = {
  resourceCard: css({
    marginTop: tokens.spacingXs,
    marginBottom: tokens.spacingXs,
    '&&:hover': {
      borderColor: tokens.colorPrimary,
      cursor: 'pointer',
    },
  }),
  resourceCardHeader: css({
    borderBottom: `1px solid ${tokens.gray200}`,
  }),
  badge: css({
    padding: `${tokens.spacingXs} ${tokens.spacingM}`,
  }),
};
