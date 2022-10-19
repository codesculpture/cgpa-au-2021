import type { Query, Result } from "../types/index.ts";
import { GRADE_MAP } from "../data.ts";

const CGPA = (query: Query): Result => {
  const SUBS = query.subs;

  if (!(SUBS)) return { error: "Dept is Not in The List", cgpa : 0 };
  let count_credit = 0;
  let sub_credit = 0;

  let pe = 0;
  for (const sub in query.values) {
    if (!(sub in SUBS)) return { error: "Subject Not Found " + sub, cgpa: 0 };
    //Skip the Arrear
    if (!(query.values[sub] in GRADE_MAP)) {
      return { error: "Grade Error For" + sub, cgpa: 0 };
    }

    if (sub.startsWith("PE") && SUBS["PE"]) {
      if (!(pe <= SUBS["PE"].n)) {
        return { error: "More Professional Electives Detected", cgpa: 0 };
      }
      pe++;
      count_credit += SUBS["PE"].c;
      sub_credit += SUBS["PE"].c * GRADE_MAP[query.values[sub]];
      continue;
    }

    count_credit += SUBS[sub] as number;
    sub_credit += SUBS[sub] as number * GRADE_MAP[query.values[sub]];
  }


  return { error: null, cgpa: sub_credit/count_credit };
};

export default CGPA;
