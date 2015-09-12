BloodType = {

  AB_POS : "AB_POS",
  AB_NEG : "AB_NEG",
  A_POS  : "A_POS",
  A_NEG  : "A_NEG",
  B_POS  : "B_POS",
  B_NEG  : "B_NEG",
  O_POS  : "O_POS",
  O_NEG  : "O_NEG"

};

BloodTransfusionRules = {

  /**
   * Set the simulation speed.
   * @type {Number} : Valid values between 1 and 200
   */
  simulation_speed : 200,

  /**
   * returns BloodType, or false to give no BloodType
   *
   * @name receive_patient
   * @param {Bank} blood_inventory
   * @param {Patient} patient
   * @returns {BloodType or false}
   *
   * Patient properties {
   *   gender : String, (MALE,FEMALE)
   *   blood_type : String (BloodType)
   * }
   *
   * Bank properties {
   *   AB_POS : Integer,
   *   AB_NEG : Integer,
   *   A_POS  : Integer,
   *   A_NEG  : Integer,
   *   B_POS  : Integer,
   *   B_NEG  : Integer,
   *   O_POS  : Integer,
   *   O_NEG  : Integer
   * }
   *
   */
    // var isPos = patient.blood_type.indexOf('POS') > 0;   // if patient's type is 'O', AB is not checked since type '0' is at 1st index;
    // var types = [patient.blood_type, (isPos ? BloodType.O_POS : BloodType.O_NEG), (isPos ? BloodType.AB_POS : BloodType.AB_NEG)];
    // return blood_inventory[types[0]] > 0 ? types[0] : (blood_inventory[types[1]] > 0 ? types[1] : types[2]);

  receive_patient : function (blood_inventory, patient) {
      var isPos = patient.blood_type.indexOf('POS') > 0;
      if (patient.blood_type.indexOf('O_') === 0) {     // most restrictive recipient is if patient is type O;
        return !isPos || (blood_inventory[BloodType.O_NEG] > blood_inventory[BloodType.O_POS]) ? BloodType.O_NEG : BloodType.O_POS;
      }
      var inventory = Object.keys(blood_inventory).map(function (key){ return {type : key, num : blood_inventory[key]} });
      if (!isPos) {           // negative recipient cannot receive positive donor's blood;
        inventory = inventory.filter(function(val){ return val.type.indexOf('NEG') > 0; });
      }
      if (patient.blood_type.indexOf('AB') === -1) {        // type A & type B cannot receive type AB blood;
        inventory = inventory.filter(function (val){
                              return patient.blood_type.indexOf('A_') === 0 ? val.type.indexOf('B_') === -1 : val.type.indexOf('A_') === -1;
                    });
      }
      inventory.sort(function (a, b) {    // sort compatible blood in order of max inventory;
        return a.num > b.num ? 1 : (a.num < b.num ? -1 : 0);
      });
      return inventory[0].type;
  }
};