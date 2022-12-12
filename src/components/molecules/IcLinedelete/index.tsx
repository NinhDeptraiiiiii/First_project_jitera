/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import Image from "next/future/image";
import assets from "@assets/index";
import { Box } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type IcLinedeleteMoleculeProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
  responsiveVisibility?: string[];
};
function IcLinedeleteMolecule(props: IcLinedeleteMoleculeProps): JSX.Element {
  return (
    <Box
      source={undefined}
      sourceType={"upload"}
      className={`${styles.page_container} ${get(props, "className")}`}
      responsiveVisibility={get(props, "responsiveVisibility")}
    >
      <Image src={assets("1670843089051png")} alt={""} className={styles.image27} />
    </Box>
  );
}
export default IcLinedeleteMolecule;
