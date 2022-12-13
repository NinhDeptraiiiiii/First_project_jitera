/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import DefaultHeader from "@components/molecules/DefaultHeader";
import DefaultFooter from "@components/molecules/DefaultFooter";
import { Page, Box } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type DetailNotePageProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
};
function DetailNotePage(props: DetailNotePageProps): JSX.Element {
  return (
    <Page className={styles.page_container}>
      <DefaultHeader className={styles.defaultheader_1} />
      <Box className={styles.content_box_0} />
      <DefaultFooter className={styles.defaultfooter_1} />
    </Page>
  );
}
export default DetailNotePage;
