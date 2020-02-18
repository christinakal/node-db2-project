exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries

      const cars = [
        { VIN: "2627", make: "Toyota", model: "ModelOne", mileage: "23883" },
        { VIN: "344", make: "BMW", model: "ModelTwo", mileage: "23883" },
        { VIN: "263427", make: "Fiat", model: "ModelThree", mileage: "23883" },
        { VIN: "423423", make: "Subaru", model: "Test", mileage: "23883" },
        { VIN: "7755", make: "Suzuki", model: "fastModel", mileage: "23883" },
        { VIN: "8955", make: "Toyota", model: "New", mileage: "23883" },
        { VIN: "24242", make: "Porche", model: "Fire", mileage: "23883" },
        { VIN: "565", make: "Tesla", model: "Electric", mileage: "23883" }
      ];
      return knex("cars").insert(cars);
    });
};
