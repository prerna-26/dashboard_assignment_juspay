const imageNames = [
  "Profile1", "Profile2", "Profile3", "Profile4", "Profile5",
  "Andi", "Drew", "Karay", "Kate", "Natali", "Orlando"
];

const RightBarImages = {};
imageNames.forEach(name => {
  RightBarImages[name] = require(`../attributes/images/${name}.png`);
});

export default RightBarImages;
