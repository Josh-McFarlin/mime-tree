const mimeMagicNums = [
  {
    type: "image/jpeg",
    magic: [0xff, 0xd8, 0xff],
    offset: 0,
  },
  {
    type: "image/png",
    magic: [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a],
    offset: 0,
  },
  {
    type: "image/gif",
    magic: [0x47, 0x49, 0x46],
    offset: 0,
  },
  {
    type: "image/webp",
    magic: [0x57, 0x45, 0x42, 0x50],
    offset: 8,
  },
  {
    type: "image/avif",
    magic: [0x66, 0x74, 0x79, 0x70, 0x61, 0x76, 0x69, 0x66],
    offset: 4,
  },
  {
    type: "image/avif",
    magic: [0x66, 0x74, 0x79, 0x70, 0x61, 0x76, 0x69, 0x73],
    offset: 4,
  },
  {
    type: "image/bmp",
    magic: [0x42, 0x4d],
    offset: 0,
  },
  {
    type: "image/tiff",
    magic: [0x49, 0x49, 0x2a, 0x00],
    offset: 0,
  },
  {
    type: "image/tiff",
    magic: [0x4d, 0x4d, 0x00, 0x2a],
    offset: 0,
  },
];

const deepSet = (obj, path, value) => {
  const a = [...path];
  let o = obj;
  while (a.length - 1) {
    const n = a.shift();
    if (!(n in o)) o[n] = {};
    o = o[n];
  }
  o[a[0]] = value;
};

const padStart = (arr, pad) =>
  pad === 0 ? arr : new Array(pad).fill(0).concat(arr);

const generateTree = () => {
  const tree = {};

  mimeMagicNums.forEach((type) => {
    deepSet(tree, padStart(type.magic, type.offset), type.type);
  });

  return tree;
};

const tree = generateTree();

export default tree;
