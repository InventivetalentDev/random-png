## random-png
Simple library to generate random PNG images using [pngjs](https://www.npmjs.com/package/pngjs)

```
npm install --save random-png
yarn add random-png
```

```typescript
import { randomPNG } from "random-png";
import fs from "fs";

const buffer = randomPNG(64, 64);
fs.writeFileSync('random.png', buffer);
```