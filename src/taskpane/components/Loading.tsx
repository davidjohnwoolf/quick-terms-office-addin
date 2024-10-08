import * as React from "react";
import { makeStyles, Spinner, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  loading: {
    paddingTop: tokens.spacingHorizontalS,
    paddingBottom: tokens.spacingHorizontalS,
  },
});

interface LoadingProps {
  label?: string;
}

/** @todo set strings etc (ie "Loading...") in a resource file / config */
/** Loading spinner component */
const Loading: React.FC<LoadingProps> = ({ label }) => {
  const styles = useStyles();

  return (
    <section className={styles.loading}>
      <Spinner size="small" labelPosition="below" label={label || "Loading..."} />
    </section>
  );
};

export default Loading;
