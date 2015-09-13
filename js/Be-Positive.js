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
   patient = A
   blood = C = AB
   AB.indexOf(patient.blood) === true
   *
   */

  // since type O can be given to any recipient, assign it a key of 'ABOC'
  // since type AB can only be given to AB recipient, assign it a key of 'C'
  // map the blood bank to an array of objects containing blood_type : inventory pairs;
  receive_patient : function (blood_inventory, patient) {
    var isPos = ptype.indexOf('POS') > 0;
    var inventory = Object.keys(blood_inventory).map(function (key){
                    var temp = key.indexOf('AB') === 0 ? 'C' : (key.indexOf('O') ? 'ABOC' : key);
                    return {type : temp, num : blood_inventory[key]}
    });
    if (!isPos) {           // negative recipient cannot receive positive donor's blood so filter it out;
      inventory = inventory.filter(function(val){ return val.type.indexOf('NEG') > 0; });
    }
    inventory.sort(function (a, b) {    // sort blood types in order of max inventory;
      return a.num > b.num ? 1 : (a.num < b.num ? -1 : 0);
    });
    var ptype = patient.blood_type.substr(0, patient.blood_type.indexOf('_'));  // get the patient's type regardless of +/- antigen;
    for (var i = inventory.length - 1; i >= 0; i--) {
      // if the bank's blood has the patient's blood (aka: if patient's type is found in the name of inventory blood), return it;
      if (inventory[i].type.indexOf(ptype) >= 0)
        return inventory[i].type;
    }
    return false;
  }
};