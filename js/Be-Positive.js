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
   *
   */

  receive_patient : function (blood_inventory, patient) {
    var ptype = patient.blood_type;
    var isPos = ptype.indexOf('POS') > 0;
    var types = [ptype, BloodType.O_NEG];     // all recipients can receive O-; these 2 are the most used types;
    var negType = ptype.substr(0, ptype.indexOf('_')) + '_NEG';

    if (isPos) {
      types.splice(1, 0, BloodType.O_POS);    // positive recipient can receive O+ && +blood of their type;
      types.splice((blood_inventory[ptype] > blood_inventory[negType] ? 1 : 0), 0, negType);
    }
    if (ptype.indexOf('AB') === 0) {          // AB recipient can receive both types A & B;
      var temp = isPos ? [BloodType.A_NEG, BloodType.B_NEG, BloodType.A_POS, BloodType.B_POS] : [BloodType.A_NEG, BloodType.B_NEG];
      temp.concat(types);
      temp.sort(function (a, b) {
        return blood_inventory[a] > blood_inventory[b] ? 1 : (blood_inventory[a] < blood_inventory[b] ? -1 : 0);
      });
      return temp[temp.length - 1];
    } // else type is A, B, O;
    return blood_inventory[types[0]] > 0 ? types[0] : (blood_inventory[types[1]] > 0 ? types[1] :
                          (isPos ? (blood_inventory[types[2]] > 0 ? types[2] : types[3]) : false));
  }
};