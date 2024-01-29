import {useState} from 'react';

const useAttachment = () => {
  const [opened, setOpened] = useState(false);
  const [openedModal, setOpenedModal] = useState(false);
  const [openedModalMusic, setOpenedModalMusci] = useState(false);

  const handleOpenPopover = (e: any) => {
    e?.stopPropagation();
    setOpened((value) => !value);
  };

  const handleClosePopover = () => {
    setOpened(false);
  };

  const handleToogleModal = (e?: any) => {
    e?.stopPropagation();
    setOpenedModal((value) => !value);
  };

  const handleOpenMusicModal = () => {
    setOpenedModalMusci((value) => !value);
  };

  const handleCloseMusicModal = () => {
    setOpenedModalMusci(false);
  };

  return {
    opened,
    openedModal,
    openedModalMusic,
    handleOpenPopover,
    handleToogleModal,
    handleClosePopover,
    handleOpenMusicModal,
    handleCloseMusicModal,
  };
};

export default useAttachment;
