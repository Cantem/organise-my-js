import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { persistMiddleware } from "./middlewares/persist-middleware";

export const store = createStore(
  reducers,
  {
    cells: {
      loading: false,
      error: null,
      order: ["nbm", "ig3"],
      data: {
        nbm: {
          id: "nbm",
          type: "text",
          content:
            "# javascriptdocs\n\nThis is an interactive coding environment. You can write Javascript, see it executed and document using markdown.\n\n- click any text cell to edit it\n- the code in each cell is joined into one file. If you define one variable in cell#1, you can refer to it in any following cell\n- you can use the built-in `show` function to see any React Component, string, number or anything else.\n- you can add new cells (code or text) by hovering on the divider between cells.\n\nAll your changes get saved into a file you opened `javascriptdocs` with. For example, if you run `npx javascriptdocs serve test.js`, all of the text and code will be saved into the `test.js` file.",
        },
        ig3: {
          id: "ig3",
          type: "code",
          content:
            "import { useState } from 'react';\n\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n    <button onClick={() => setCount(count + 1)}>Click</button>\n    <h2>Count {count}</h2>\n    </div>\n  )\n}\n\nshow(<Counter/>)",
        },
      },
    },
    bundles: {},
  },
  applyMiddleware(persistMiddleware, thunk)
);
