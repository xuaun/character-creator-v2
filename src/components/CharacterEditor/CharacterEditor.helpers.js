import {
  numBodies,
  numHeads,
  numFaces,
  numAccessories,
  skinColors,
  clothesColors,
} from "../../constants";
import { zeroPadNumber, range } from "../../utils";

const bodyLabels = [
  "A person wearing an open shirt, a t-shirt, trousers, and sneakers",
  "A person wearing a shirt with large black polka dots, trousers, and slip-on shoes",
  "A person wearing a button-up shirt, shorts, shoes, and a prosthetic left leg",
  "A person wearing a blazer, a top, trousers, and flats",
  "A person wearing a long-sleeve top, pants, and boots, pointing upwards",
  "A person standing with arms crossed, wearing a long-sleeve top, trousers, and sneakers",
  "A person in a wheelchair wearing a top, a cardigan, and pants, with one hand raised",
];
export const bodyOptions = range(numBodies).map((index) => {
  const labelText =
    bodyLabels[index] ?? bodyLabels[bodyLabels.length - 1];
  return {
    id: index,
    label: `Body ${index + 1} of ${numBodies} - ${labelText}.`,
    labelText,
    children: zeroPadNumber(index + 1),
  };
});

const headLabels = [
  "Short, curly black hair",
  "Long, wavy black hair",
  "Shaved hair",
  "High-top fade haircut",
  "Curly, blonde hair tied in a ponytail",
  "Short, dark hair",
  "A bald head, and white hair above the ears",
  "Short, dark bob haircut",
  "Straight, short black bob with bangs",
  "Short, blonde bob with bangs",
  "Curly, black hair tied in a high bun",
  "A shaved head with a bright pink flat-top or high-top fade",
];
export const headOptions = range(numHeads).map((index) => {
  const labelText =
    headLabels[index] ?? headLabels[headLabels.length - 1];
  return {
    id: index,
    label: `Head ${index + 1} of ${numHeads} - ${labelText}.`,
    labelText,
    children: zeroPadNumber(index + 1),
  };
});

const faceLabels = [
  "Looking forward with a relaxed and peaceful smile",
  "Expressing great joy, with a big laugh and eyes closed, showing tears of laughter",
  "Expressing love, with heart-shaped eyes like an emoji",
  "Looking surprised, with their mouth open and eyes wide",
  "Looking determined, with eyebrows slightly lowered and a closed-mouth smile",
  "Looking emotional, with wide, calm eyes and a gentle, closed-mouth smile",
  "Looking to the side with a questioning expression",
  "Looking intensely displeased, with furrowed brows and a severe frown",
  "Looking like a happy fantastical creature, with three prominent white eyes, and two sharp fangs protruding from the mouth",
];
export const faceOptions = range(numFaces).map((index) => {
  const labelText =
    faceLabels[index] ?? faceLabels[faceLabels.length - 1];
  return {
    id: index,
    label: `Face ${index + 1} of ${numFaces} - ${labelText}.`,
    labelText,
    children: zeroPadNumber(index + 1),
  };
});

const accessoryLabels = [
  "Without any accessories",
  "With small dark glasses",
  "With large dark glasses",
  "With small white glasses",
  "With sunglasses",
  "With eye patch",
];
export const accessoryOptions = range(numAccessories).map((index) => {
  const labelText =
    accessoryLabels[index] ??
    accessoryLabels[accessoryLabels.length - 1];
  return {
    id: index,
    label: `Accessory ${
      index + 1
    } of ${numAccessories} - ${labelText}.`,
    labelText,
    children: zeroPadNumber(index + 1),
  };
});

export const skinColorOptions = skinColors.map(
  ({ label, color }, index) => {
    return {
      id: color,
      label: `Skin Color ${index + 1} of ${
        skinColors.length
      } - ${label}.`,
      labelText: label,
      color,
      children: null,
    };
  }
);

export const clothesColorOptions = clothesColors.map(
  ({ label, color }, index) => {
    return {
      id: color,
      label: `Clothes Color ${index + 1} of ${
        clothesColors.length
      } - ${label}.`,
      labelText: label,
      color,
      children: null,
    };
  }
);
