const path = require("path")
const fs = require("fs")
fs.rmSync(path.join(__dirname,"flagsmith/react/flagsmith-core.d.ts"))
fs.renameSync(path.join(__dirname,"flagsmith/react/react/index.d.ts"), path.join(__dirname,"flagsmith/react/index.d.ts"))
fs.rmdirSync(path.join(__dirname,"flagsmith/react/react"))