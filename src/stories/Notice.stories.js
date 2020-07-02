import { Button } from 'components/button/Button';
import { Notice as DefaultNotice } from 'components/notice/Notice';
import { Input } from 'components/input/Input';
import React from 'react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Notice',
  component: DefaultNotice
};

export const Alert = () => (
  <DefaultNotice
    header='Alert'
    show={ true }
    variant='alt-icons'
  >
    Alert styled notice.
  </DefaultNotice>
);

export const Confirm = () => (
  <DefaultNotice
    header='Confirm'
    show={ true }
    variant='alt-icons'
  >
    Confirm styled notice.
    <article>
      <Button>Okay</Button>
      <Button>Cancel</Button>
    </article>
  </DefaultNotice>
);

export const Prompt = () => (
  <DefaultNotice
    header='Prompt'
    show={ true }
    variant='alt-icons'
  >
    Prompt styled notice.
    <article>
      <Input type='text' placeholder='Type here' />
      <Button>Okay</Button>
      <Button>Cancel</Button>
    </article>
  </DefaultNotice>
);