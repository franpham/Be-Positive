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
  simulation_speed : 20000,

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
   */

  // since type O can be given to any recipient, assign it a key of 'ABCO'
  // since type AB can only be given to AB recipient, assign it a key of 'C'
  // map the blood bank to an array of objects containing blood_type : inventory pairs;
  receive_patient : function (blood_inventory, patient) {
    var ptype = patient.blood_type;                // ptype = patient's blood type regardless of +/- antigen;
    var inventory = Object.keys(blood_inventory).map( function(key) {
      var temp = key.indexOf('AB') === 0 ? ('C_' + (key.indexOf('POS') > 0 ? 'POS' : 'NEG')) :
                (key.indexOf('O') === 0 ? 'AB' + key : 'C' + key);    // to maximize type O, don't give to type 'C';
      return {type : temp, num : blood_inventory[key], name : key}
    });
    if (patient.blood_type.indexOf('NEG') > 0) {   // negative recipient cannot receive positive donor's blood so filter it out;
      inventory = inventory.filter( function(val) {return val.type.indexOf('NEG') > 0;} );
    }                                              // sort blood types according to number in stock;
    inventory.sort( function(a, b) {return a.num > b.num ? 1 : (a.num < b.num ? -1 : 0);} );
    ptype = ptype.indexOf('AB') === 0 ? 'C' : (ptype.indexOf('O_') === 0 ? 'O_' : ptype.substr(0, 1));
    for (var i = inventory.length - 1; i >= 0; i--) {         // MUST search for 'O_' since 'O' is in 'POS';
      // if the bank's blood has the patient's blood (ie: if patient's type is found in the name of inventory's blood), return it;
      if (inventory[i].type.indexOf(ptype) >= 0)
        return inventory[i].name;          // MUST return the original name!
    }
    return false;
  }
};