import * as React from "react";
import { Spinner } from "@fluentui/react-components";

interface LoadingProps {
  label?: string;
}

/** @todo set strings etc (ie "Loading...") in a resource file / config */
/** Loading spinner component */
const Loading: React.FC<LoadingProps> = ({ label }) => (
  <Spinner size="small" labelPosition="below" label={label || "Loading..."} />
);

export default Loading;
