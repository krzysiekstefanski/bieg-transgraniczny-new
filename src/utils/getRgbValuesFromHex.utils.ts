export const getRgbValuesFromHex = (hex: string): number[] => {
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    let splittedHexColor: string[] = hex.substring(1).split('');
    if (splittedHexColor.length === 3) {
      splittedHexColor = [
        splittedHexColor[0], splittedHexColor[0],
        splittedHexColor[1], splittedHexColor[1],
        splittedHexColor[2], splittedHexColor[2]
      ];
    }

    const colorAsHexNumber: number = `0x${splittedHexColor.join('')}` as unknown as number;

    return [
      (colorAsHexNumber >> 16) & 255,
      (colorAsHexNumber >> 8) & 255,
      colorAsHexNumber & 255
    ];
  }
  throw new Error('Bad Hex');
};
