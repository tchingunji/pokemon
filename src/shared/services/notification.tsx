import {showNotification} from '@mantine/notifications';
import {RiCheckFill, RiCloseFill, RiAlertFill} from 'react-icons/ri';

interface NotificationProps {
  title: string;
  message: string;
}

export enum errorType {
  REJECTED = 'rejected',
}

export const successNotification = (props: NotificationProps) =>
  showNotification({
    ...props,
    color: 'green',
    icon: <RiCheckFill />,
  });

export const errorNotification = (props: NotificationProps) =>
  showNotification({
    ...props,
    color: 'red',
    icon: <RiCloseFill />,
  });

export const warnNotification = (props: NotificationProps) =>
  showNotification({
    ...props,
    color: 'blue',
    icon: <RiAlertFill />,
  });

export const requestErrorNotification = (
  errorMessage: string,
  title: string,
  message: string,
) => {
  switch (errorMessage) {
    case errorType.REJECTED:
      errorNotification({
        title,
        message,
      });

      break;
  }
};
