//Object Destructuring

const vehicle = {
    brandName: "Maruti suzuki",
    carModel: "Maruti 800",
    yearOfManufacturing: 2009,
    owner: "Ramu",
};

// const brandName = vehicle.brandName;
// const carModel = vehicle.carModel;
// console.log(brandName);

let { brandName, carModel, ...restObjPro } = vehicle;
console.log(restObjPro); // { yearOfManufacturing: 2009, owner: 'Ramu' }