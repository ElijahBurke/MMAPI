const queries = {
  'Query: fights(...): [Fight]!': `
  fights(
    id: Int
    fighter: String
    winner: String
    rounds: Int
    method: String
    details: String
    fotn: Boolean
    ): [Fight]!
  `,
  'Query: fighters(...): [Fighter]!': `
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
      `,
  'Query: divisions(...): [Division]!': `
      divisions(
        id: Int
        division_name: String
        min_weight: Int
        max_weight: Int
        ): [Division]!
      `,
  'Query: events(...): [Event]!': `
      events(
        id: Int
        name: String
        location: String
        date: Date
        ): [Event]!
      `,
};

const schemas = {
  'Type: Division': `
    id: Int!
    division_name: String!
    min_weight: Int!
    max_weight: Int!
    fighters: [Fighter]!
    fights: [Fight]!
    champ: Fighter!
    `,
  'Type: Event': `
      id: Int!
      name: String!
      location: String!
      date: Date!
      fights: [Fight]!
      potn: [Fighter]
      fotn: [Fight]
      `,
  'Type: Fight': `
    id: Int!
    event: Event!
    division: Division
    blue_fighter: Fighter!
    red_fighter: Fighter!
    winner: String!
    method: String!
    details: String!
    rounds: Int!
    round_end_time: String!
    fotn: Boolean!
    n_rounds: String!
    r_kd: Int!
    r_sig_str_attempts: Int!
    r_sig_str_landed: Int!
    r_total_str_attempts: Int!
    r_total_str_landed: Int!
    r_td_attempts: Int!
    r_td_landed: Int!
    r_sub_att: Int!
    r_reversal: Int!
    r_ctrl: String!
    b_kd: Int!
    b_sig_str_attempts: Int!
    b_sig_str_landed: Int!
    b_total_str_attempts: Int!
    b_total_str_landed: Int!
    b_td_attempts: Int!
    b_td_landed: Int!
    b_sub_att: Int!
    b_reversal: Int!
    b_ctrl: String!
    r_kd_r1: Int!
    r_sig_str_attempts_r1: Int!
    r_sig_str_landed_r1: Int!
    r_total_str_attempts_r1: Int!
    r_total_str_landed_r1: Int!
    r_td_attempts_r1: Int!
    r_td_landed_r1: Int!
    r_sub_att_r1: Int!
    r_reversal_r1: Int!
    r_ctrl_r1: String!
    b_kd_r1: Int!
    b_sig_str_attempts_r1: Int!
    b_sig_str_landed_r1: Int!
    b_total_str_attempts_r1: Int!
    b_total_str_landed_r1: Int!
    b_td_attempts_r1: Int!
    b_td_landed_r1: Int!
    b_sub_att_r1: Int!
    b_reversal_r1: Int!
    b_ctrl_r1: String!
    r_kd_r2: Int
    r_sig_str_attempts_r2: Int
    r_sig_str_landed_r2: Int
    r_total_str_attempts_r2: Int
    r_total_str_landed_r2: Int
    r_td_attempts_r2: Int
    r_td_landed_r2: Int
    r_sub_att_r2: Int
    r_reversal_r2: Int
    r_ctrl_r2: String
    b_kd_r2: Int
    b_sig_str_attempts_r2: Int
    b_sig_str_landed_r2: Int
    b_total_str_attempts_r2: Int
    b_total_str_landed_r2: Int
    b_td_attempts_r2: Int
    b_td_landed_r2: Int
    b_sub_att_r2: Int
    b_reversal_r2: Int
    b_ctrl_r2: String
    r_kd_r3: Int
    r_sig_str_attempts_r3: Int
    r_sig_str_landed_r3: Int
    r_total_str_attempts_r3: Int
    r_total_str_landed_r3: Int
    r_td_attempts_r3: Int
    r_td_landed_r3: Int
    r_sub_att_r3: Int
    r_reversal_r3: Int
    r_ctrl_r3: String
    b_kd_r3: Int
    b_sig_str_attempts_r3: Int
    b_sig_str_landed_r3: Int
    b_total_str_attempts_r3: Int
    b_total_str_landed_r3: Int
    b_td_attempts_r3: Int
    b_td_landed_r3: Int
    b_sub_att_r3: Int
    b_reversal_r3: Int
    b_ctrl_r3: String
    r_kd_r4: Int
    r_sig_str_attempts_r4: Int
    r_sig_str_landed_r4: Int
    r_total_str_attempts_r4: Int
    r_total_str_landed_r4: Int
    r_td_attempts_r4: Int
    r_td_landed_r4: Int
    r_sub_att_r4: Int
    r_reversal_r4: Int
    r_ctrl_r4: String
    b_kd_r4: Int
    b_sig_str_attempts_r4: Int
    b_sig_str_landed_r4: Int
    b_total_str_attempts_r4: Int
    b_total_str_landed_r4: Int
    b_td_attempts_r4: Int
    b_td_landed_r4: Int
    b_sub_att_r4: Int
    b_reversal_r4: Int
    b_ctrl_r4: String
    r_kd_r5: Int
    r_sig_str_attempts_r5: Int
    r_sig_str_landed_r5: Int
    r_total_str_attempts_r5: Int
    r_total_str_landed_r5: Int
    r_td_attempts_r5: Int
    r_td_landed_r5: Int
    r_sub_att_r5: Int
    r_reversal_r5: Int
    r_ctrl_r5: String
    b_kd_r5: Int
    b_sig_str_attempts_r5: Int
    b_sig_str_landed_r5: Int
    b_total_str_attempts_r5: Int
    b_total_str_landed_r5: Int
    b_td_attempts_r5: Int
    b_td_landed_r5: Int
    b_sub_att_r5: Int
    b_reversal_r5: Int
    b_ctrl_r5: String
      `,
  'Type: Fighter': `
    id: Int!
    division: Division
    potn: [Event]
    name: String!
    nickname: String
    height: String
    weight_lbs: String
    reach: String
    stance: String
    dob: String
    wins: String!
    losses: String!
    no_contest: String!
    record: String!
    is_champ: Boolean!
    slpm: Float
    str_acc: String
    sapm: Float
    str_def: String
    td_avg: Float
    td_def: String
    td_acc: String
    sub_avg: Float
    fights: [Fight]
  `,
};

export default { queries, schemas };
