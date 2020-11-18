# Fights

#### Base endpoint: http://localhost:3001/fights

### Use this endpoint to get information about any of the 5834 fights we have stored data for.

## Get All Fights

### To get all fights you can send a GET request to the endpoint, as shown below:

```sh
const fights = fetch('http://localhost:3001/fights')
  .then(resp => resp.status >= 400 ? Promise.reject() : resp.json())
  .catch(err => console.log('Oops!'));
```

## Warning!

### We have information for 5834 fights, so expect a large payload!

## Get One Fight

### To get information for a specific fight, you can send a GET request as shown below:

```sh
const fights = fetch('http://localhost:3001/fights/:id')
  .then(resp => resp.status >= 400 ? Promise.reject() : resp.json())
  .catch(err => console.log('Oops!'));
```

### The response might look something like this:

```sh
{
  id: 5,
  winner: "blue",
  method: "Women's Strawweight Bout",
  details: "28-29.28-29.28-29.",
  rounds: 3,
  round_end_time: "5:00",
  fotn: false,
  n_rounds: "3 Rnd (5-5-5)",
  b_kd: 0,
  b_sig_str_attempts: 170,
  b_sig_str_landed: 74,
  b_total_str_attempts: 234,
  b_total_str_landed: 133,
  b_td_attempts: 0,
  b_td_landed: 0,
  b_sub_att: 0,
  b_reversal: 0,
  b_ctrl: "0:19",
  r_kd: 0,
  r_sig_str_attempts: 96,
  r_sig_str_landed: 36,
  r_total_str_attempts: 149,
  r_total_str_landed: 84,
  r_td_attempts: 10,
  r_td_landed: 2,
  r_sub_att: 0,
  r_reversal: 0,
  r_ctrl: "6:46",
  b_kd_r1: 0,
  b_sig_str_attempts_r1: 36,
  b_sig_str_landed_r1: 19,
  b_total_str_attempts_r1: 70,
  b_total_str_landed_r1: 51,
  b_td_attempts_r1: 0,
  b_td_landed_r1: 0,
  b_sub_att_r1: 0,
  b_reversal_r1: 0,
  b_ctrl_r1: "0:00",
  r_kd_r1: 0,
  r_sig_str_attempts_r1: 26,
  r_sig_str_landed_r1: 10,
  r_total_str_attempts_r1: 72,
  r_total_str_landed_r1: 53,
  r_td_attempts_r1: 5,
  r_td_landed_r1: 2,
  r_sub_att_r1: 0,
  r_reversal_r1: 0,
  r_ctrl_r1: "4:06",
  b_kd_r2: 0,
  b_sig_str_attempts_r2: 78,
  b_sig_str_landed_r2: 26,
  b_total_str_attempts_r2: 80,
  b_total_str_landed_r2: 27,
  b_td_attempts_r2: 0,
  b_td_landed_r2: 0,
  b_sub_att_r2: 0,
  b_reversal_r2: 0,
  b_ctrl_r2: "0:00",
  r_kd_r2: 0,
  r_sig_str_attempts_r2: 43,
  r_sig_str_landed_r2: 17,
  r_total_str_attempts_r2: 44,
  r_total_str_landed_r2: 18,
  r_td_attempts_r2: 1,
  r_td_landed_r2: 0,
  r_sub_att_r2: 0,
  r_reversal_r2: 0,
  r_ctrl_r2: "0:07",
  b_kd_r3: 0,
  b_sig_str_attempts_r3: 56,
  b_sig_str_landed_r3: 29,
  b_total_str_attempts_r3: 84,
  b_total_str_landed_r3: 55,
  b_td_attempts_r3: 0,
  b_td_landed_r3: 0,
  b_sub_att_r3: 0,
  b_reversal_r3: 0,
  b_ctrl_r3: "0:19",
  r_kd_r3: 0,
  r_sig_str_attempts_r3: 27,
  r_sig_str_landed_r3: 9,
  r_total_str_attempts_r3: 33,
  r_total_str_landed_r3: 13,
  r_td_attempts_r3: 4,
  r_td_landed_r3: 0,
  r_sub_att_r3: 0,
  r_reversal_r3: 0,
  r_ctrl_r3: "2:33",
  b_kd_r4: null,
  b_sig_str_attempts_r4: null,
  b_sig_str_landed_r4: null,
  b_total_str_attempts_r4: null,
  b_total_str_landed_r4: null,
  b_td_attempts_r4: null,
  b_td_landed_r4: null,
  b_sub_att_r4: null,
  b_reversal_r4: null,
  b_ctrl_r4: null,
  r_kd_r4: null,
  r_sig_str_attempts_r4: null,
  r_sig_str_landed_r4: null,
  r_total_str_attempts_r4: null,
  r_total_str_landed_r4: null,
  r_td_attempts_r4: null,
  r_td_landed_r4: null,
  r_sub_att_r4: null,
  r_reversal_r4: null,
  r_ctrl_r4: null,
  b_kd_r5: null,
  b_sig_str_attempts_r5: null,
  b_sig_str_landed_r5: null,
  b_total_str_attempts_r5: null,
  b_total_str_landed_r5: null,
  b_td_attempts_r5: null,
  b_td_landed_r5: null,
  b_sub_att_r5: null,
  b_reversal_r5: null,
  b_ctrl_r5: null,
  r_kd_r5: null,
  r_sig_str_attempts_r5: null,
  r_sig_str_landed_r5: null,
  r_total_str_attempts_r5: null,
  r_total_str_landed_r5: null,
  r_td_attempts_r5: null,
  r_td_landed_r5: null,
  r_sub_att_r5: null,
  r_reversal_r5: null,
  r_ctrl_r5: null,
  divisionId: 1,
  eventId: 2,
  fighters: [
    {
      id: 1033,
      name: "Claudia Gadelha",
      nickname: "Claudinha",
      height: "5'4"",
      weight_lbs: "115",
      reach: "63"",
      stance: "Orthodox",
      dob: "Dec07,1988",
      wins: "18",
      losses: "5",
      no_contest: "0",
      record: "18-5-0",
      is_champ: false,
      slpm: "3.31",
      str_acc: "41%",
      sapm: "4.57",
      str_def: "57%",
      td_avg: "3.03",
      td_def: "58%",
      td_acc: "42%",
      sub_avg: "0.70",
      divisionId: 1,
      fighter_fights: {
        color: "red",
        fightId: 5,
        fighterId: 1033
      }
    },
    {
      id: 3520,
      name: "Yan Xiaonan",
      nickname: "",
      height: "5'5"",
      weight_lbs: "115",
      reach: "63"",
      stance: "Orthodox",
      dob: "Jun16,1989",
      wins: "13",
      losses: "1",
      no_contest: "0",
      record: "13-1-0",
      is_champ: false,
      slpm: "6.42",
      str_acc: "42%",
      sapm: "3.63",
      str_def: "63%",
      td_avg: "1.00",
      td_def: "75%",
      td_acc: "75%",
      sub_avg: "0.00",
      divisionId: 1,
      fighter_fights: {
        color: "blue",
        fightId: 5,
        fighterId: 3520
      }
    }
  ],
  event: {
    id: 2,
    name: "UFC Fight Night: Santos vs. Teixeira",
    location: "Las Vegas, Nevada, USA",
    date: "2020-11-07T00:00:00.000Z"
    },
    division: {
    id: 1,
    division_name: "women's strawweight",
    min_weight: 0,
    max_weight: 115
  }
}
```