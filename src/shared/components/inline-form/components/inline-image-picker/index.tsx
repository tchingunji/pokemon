import {forwardRef, ForwardRefRenderFunction, useState} from 'react';
import {ImFilePicture} from 'react-icons/im';
import {Group, Text} from '@mantine/core';
import {
  PreviewImage,
  Container,
  Label,
  ImageHolder,
  Input,
  Thumbnail,
  DropzoneModal,
  PreviewModal,
} from './styles';
import {Dropzone as MantineDropzone} from '@mantine/dropzone';
import {Control, useController} from 'react-hook-form';
import EditIconButton from 'shared/components/edit-icon-button';

interface Props {
  label: string;
  name: string;
  control: Control<any>;
  size: 'full' | 'half';
  disabled?: boolean;
}
const InlineImagePicker: ForwardRefRenderFunction<any, Props> = (
  {label, name, control, size, disabled},
  ref,
) => {
  const {field} = useController({control, name});
  const [file, setFile] = useState<string | File>(field.value);
  const [isShowingDropZone, showDropzone] = useState(false);
  const [isShowingPreview, showPreview] = useState(false);

  const onDrop = (files: File[]) => {
    const file = files[0];

    showDropzone(false);
    setFile(file);
    field.onChange(file);
  };

  const dropzoneChildren = () => {
    return (
      <Group
        position="center"
        spacing="xl"
        style={{minHeight: 220, pointerEvents: 'none'}}>
        <Group align="center" spacing="sm">
          <ImFilePicture size={36} color="gray" />
          <Text size="xl" color="dimmed" inline>
            Arreste e solte arquivos aqui ou clique para selecionar
          </Text>
        </Group>
      </Group>
    );
  };

  return (
    <>
      <Container {...{size, ref, disabled}}>
        <Label>{label}</Label>
        {!file && (
          <Input
            disabled={disabled}
            onClick={() => !disabled && showDropzone(true)}
            {...{opened: isShowingDropZone}}>
            Selecionar arquivo
          </Input>
        )}
        {file && (
          <ImageHolder>
            <Thumbnail
              src={typeof file === 'string' ? file : URL.createObjectURL(file)}
              onClick={() => showPreview(true)}
            />
            <EditIconButton onClick={() => showDropzone(true)} />
          </ImageHolder>
        )}
      </Container>
      <DropzoneModal
        {...{opened: isShowingDropZone}}
        onClose={() => showDropzone(false)}>
        <MantineDropzone {...{onDrop}}>{dropzoneChildren}</MantineDropzone>
      </DropzoneModal>
      {file && (
        <PreviewModal
          {...{opened: isShowingPreview}}
          onClose={() => showPreview(false)}>
          <PreviewImage
            src={typeof file === 'string' ? file : URL.createObjectURL(file)}
          />
        </PreviewModal>
      )}
    </>
  );
};

export default forwardRef(InlineImagePicker);
