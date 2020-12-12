module.exports = `
  type Query {
    fights(
      id: Int
      fighter: String
      winner: String
      rounds: Int
      method: String
      details: String
      fotn: Boolean
    ): [Fight]!
    fighters(
      id: Int
      name: String
      nickname: String
      height: String
      weight_lbs: String
      reach: String
      stance: String
      dob: String
      wins: String
      losses: String
      no_contest: String
      record: String
      is_champ: Boolean
      slpm: Float
      str_acc: String
      sapm: Float
      str_def: String
      td_avg: Float
      td_def: String
      td_acc: String
      sub_avg: Float
    ): [Fighter]!
    divisions(
      id: Int
      division_name: String
      min_weight: Int
      max_weight: Int
    ): [Division]!
    events(
      id: Int
      name: String
      location: String
      date: Date
      ): [Event]!
  }
  `;
