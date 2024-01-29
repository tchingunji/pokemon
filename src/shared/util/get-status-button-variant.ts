import {VariantEnum} from 'shared/components/status-button';

export type ColorDataType = {
  color: VariantEnum;
  text: string;
};

export default function getStatusButtonVariant(
  statusText: string,
  colorData: ColorDataType[],
): VariantEnum {
  const variant = colorData.filter(
    (value) =>
      value.text.toLocaleLowerCase() === statusText.toLocaleLowerCase(),
  );

  if (variant.length) return variant[0].color;

  return 'info';
}
