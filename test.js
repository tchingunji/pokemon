const inputs = [
  'plate',
  'model',
  'type',
  'canBeAttached',
  'active',
  'imageFile',
  'process',
  'management',
  'sectorManagement',
  'servicePackage',
  'requestOrigin',
  'usedOnTotIndicator',
  'serviceDetails',
  'serviceItems',
  'serviceDescription',
  'modal',
  'clientDirection',
  'clientExecutiveManagement',
  'clientSectorManagement',
  'city',
  'state',
  'contractNumber',
  'equipmentCode',
  'dangerousness',
  'monthlyWorkRegime',
  'dailyWorkRegime',
  'quantityOfMonthlyMobilizedDays',
  'quantityOfEventualVehicleDailies',
  'quantityOfMobilizedVehicles',
  'quantityOfKilometersDriven',
];

// console.log(
//   inputs.map((label) => {
//     const tag = label
//       .replace(/\.?([A-Z]+)/g, function (x, y) {
//         return '-' + y.toLowerCase();
//       })
//       .replace(/^_/, '');

//     return `<InlineInput label={translate('fleet:new-vehicle.${tag}')} placeholder={ translate('fleet:new-vehicle.${tag}') + translate('fleet:vehicles.placeholder') } />`;
//   }),
// );

console.log(
  inputs.map((label) =>
    label
      .replace(/\.?([A-Z]+)/g, function (x, y) {
        return '-' + y.toLowerCase();
      })
      .replace(/^_/, '') +
  ),
);
