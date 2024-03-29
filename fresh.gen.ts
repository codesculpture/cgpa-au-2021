// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/api/createRecord.ts";
import * as $1 from "./routes/index.tsx";
import * as $$0 from "./islands/Main.tsx";
import * as $$1 from "./islands/RecordCard.tsx";
import * as $$2 from "./islands/SemCard.tsx";

const manifest = {
  routes: {
    "./routes/api/createRecord.ts": $0,
    "./routes/index.tsx": $1,
  },
  islands: {
    "./islands/Main.tsx": $$0,
    "./islands/RecordCard.tsx": $$1,
    "./islands/SemCard.tsx": $$2,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
