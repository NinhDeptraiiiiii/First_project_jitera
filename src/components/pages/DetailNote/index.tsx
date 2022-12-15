/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import Background from "@components/molecules/Background";
import Iconssafarichevronbackward from "@components/molecules/Iconssafarichevronbackward";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNoteService } from "@services/note";
import { useNavigateService } from "@services/navigate";
import { Page, Box, Text, Row, Col, Button, Toast } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type DetailNotePageProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
};
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Form1FormData {}
function DetailNotePage(props: DetailNotePageProps): JSX.Element {
  const noteService = useNoteService();
  const getApiNotesIdInstance = noteService.useGetApiNotesId();
  const getApiNotesIdResult = getApiNotesIdInstance.useQuery({ id: get(props, "query.NoteId") });
  const navigateService = useNavigateService();
  const validationForm1Schema = useMemo(() => yup.object().shape({}), []);
  const formForm1 = useForm<Form1FormData>({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    resolver: yupResolver(validationForm1Schema),
    shouldFocusError: true,
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const { errors: formForm1Errors } = formForm1.formState;

  const handleBox1 = async () => {
    try {
      const responseDeleteApiNotesId = await noteService.deleteApiNotesId.fetch({
        id: get(props, "query.NoteId"),
      });
      navigateService.goBack();
    } catch (e: unknown) {
      Toast.error("Delete Failed");
    }
  };
  const handleText1 = async () => {
    try {
      navigateService.goBack();
    } catch (e: unknown) {}
  };
  const handleDeleteNote = async (values?: Form1FormData) => {
    try {
      const responseDeleteApiNotesId = await noteService.deleteApiNotesId.fetch({
        id: get(props, "query.NoteId"),
      });
      navigateService.goBack();
    } catch (e: unknown) {
      Toast.error("Create Failed");
    }
  };
  return (
    <Page className={styles.page_container}>
      <Background className={styles.background_1} />
      <Box className={styles.box_1} onClick={handleBox1}>
        <Box className={styles.box_0}>
          <Box className={styles.box_2}>
            <Iconssafarichevronbackward className={styles.molecule_0} />
            <Text className={styles.text_1} textType={"Text"} onClick={handleText1}>
              Back
            </Text>
          </Box>
          <Box className={styles.box_3}>
            <Text className={styles.text_0} textType={"Text"}>
              Detail note
            </Text>
            <Box className={styles.box_6}>
              <Text className={styles.text_3} textType={"Text"}>
                {get(getApiNotesIdResult, "data.note.content")}
              </Text>
            </Box>
            <Row align={"top"} gutter={[30, 30]} justify={"start"} className={styles.row_1}>
              <Col md={Number(24)} xl={Number(24)} xs={Number(24)}>
                <Box className={styles.form_1}>
                  <Box className={styles.box_4} />
                  <Button
                    buttonType={"primary"}
                    className={styles.delete_note}
                    onClick={formForm1.handleSubmit(handleDeleteNote)}
                  >
                    Delete Note
                  </Button>
                </Box>
              </Col>
            </Row>
          </Box>
        </Box>
      </Box>
    </Page>
  );
}
export default DetailNotePage;
