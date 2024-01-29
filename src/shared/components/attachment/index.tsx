import React from 'react';
import useAttachment from './state';

import {Container, ButtonIcon, PopoverContainer} from './styles';
import {Modal, useMantineTheme, Image, Popover, Text} from '@mantine/core';
import {RiChatQuoteFill, RiImage2Fill, RiMusic2Line} from 'react-icons/ri';
import { FileProps } from 'shared/types';

export interface DisapprovalReasonProps {
  text?: string;
  audio?: FileProps;
  image?: FileProps;
}

interface Props {
  reason?: DisapprovalReasonProps;
}

const Attachment: React.FC<Props> = ({reason}) => {
  const {
    opened,
    openedModal,
    openedModalMusic,
    handleToogleModal,
    handleOpenPopover,
    handleClosePopover,
    handleOpenMusicModal,
    handleCloseMusicModal,
  } = useAttachment();
  const theme = useMantineTheme();

  return (
    <>
      <Container>
        {reason?.text && (
          <ButtonIcon onClick={handleOpenPopover}>
            <Popover
              opened={opened}
              onClose={handleClosePopover}
              target={<RiChatQuoteFill size={24} />}
              width={260}
              position="bottom"
              withArrow>
              <PopoverContainer>
                <Text size="sm">{reason?.text}</Text>
              </PopoverContainer>
            </Popover>
          </ButtonIcon>
        )}
        {reason?.image?.url && (
          <ButtonIcon onClick={handleToogleModal}>
            <RiImage2Fill size={24} />
          </ButtonIcon>
        )}
        {reason?.audio?.url && (
          <ButtonIcon onClick={handleOpenMusicModal}>
            <Popover
              opened={openedModalMusic}
              onClose={handleCloseMusicModal}
              target={<RiMusic2Line size={24} />}
              width={300}
              position="bottom"
              withArrow>
              <PopoverContainer>
                <audio controls={true} src={reason?.audio?.url} />
              </PopoverContainer>
            </Popover>
          </ButtonIcon>
        )}
      </Container>
      <Modal
        opened={openedModal}
        onClose={handleToogleModal}
        overlayColor={theme.colors.dark[9]}
        overlayOpacity={0.55}
        overlayBlur={3}>
        <Image width="100%" fit="contain" src={reason?.image?.url} />
      </Modal>
    </>
  );
};

export default Attachment;
