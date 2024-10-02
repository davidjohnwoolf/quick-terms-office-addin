import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import DefinitionsProvider from "./components/DefinitionsProvider";

/* global document, Office, module, require, HTMLElement */

const rootElement: HTMLElement | null = document.getElementById("container");
const root = rootElement ? createRoot(rootElement) : undefined;

/* Render application after Office initializes */
Office.onReady(() => {
  root?.render(
    <FluentProvider theme={webLightTheme}>
      <DefinitionsProvider>
        <App />
      </DefinitionsProvider>
    </FluentProvider>
  );
});

if ((module as any).hot) {
  (module as any).hot.accept("./components/DefinitionsProvider", () => {
    const NextApp = require("./components/DefinitionsProvider").default;
    root?.render(NextApp);
  });
}
