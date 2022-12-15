/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import Background from "@components/molecules/Background";
import Iconssafarichevronbackward from "@components/molecules/Iconssafarichevronbackward";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigateService } from "@services/navigate";
import { useNoteService } from "@services/note";
import { useAuthenticationService } from "@services/authentication";
import { Page, Box, Text, Row, Col, Input, Button, Toast } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type CreateNotePageProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
};
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Form1FormData {
  content_input: string;
}
function CreateNotePage(props: CreateNotePageProps): JSX.Element {
  const navigateService = useNavigateService();
  const noteService = useNoteService();
  const authenticationService = useAuthenticationService();
  const authenticatedDataValue = authenticationService.useAuthenticatedData("authenticatedData");
  const validationForm1Schema = useMemo(
    () =>
      yup.object().shape({
        content_input: yup.string().required("content_input is a required field"),
      }),
    []
  );
  const formForm1 = useForm<Form1FormData>({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    resolver: yupResolver(validationForm1Schema),
    shouldFocusError: true,
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const { errors: formForm1Errors } = formForm1.formState;

  const handleText5 = async () => {
    try {
      navigateService.goBack();
    } catch (e: unknown) {}
  };
  const handleForm1Button = async (values?: Form1FormData) => {
    try {
      const responsePostApiNotes = await noteService.postApiNotes.fetch({
        notes: {
          content: get(values, "content_input", ""),
          user_id: get(authenticatedDataValue, "id"),
        },
      });
      navigateService.goBack();
    } catch (e: unknown) {
      Toast.error("Create Failed");
    }
  };
  return (
    <Page className={styles.page_container}>
      <Background className={styles.background1} />
      <Box className={styles.container8}>
        <Box className={styles.wrapper8}>
          <Box className={styles.info_header5}>
            <Iconssafarichevronbackward className={styles.iconssafarichevronbackward1} />
            <Text className={styles.text5} textType={"Text"} onClick={handleText5}>
              Back
            </Text>
          </Box>
          <Box className={styles.card8}>
            <Text className={styles.text7} textType={"Text"}>
              Create note
            </Text>
            <Row align={"top"} gutter={[30, 30]} justify={"start"} className={styles.row_1}>
              <Col md={Number(24)} xl={Number(24)} xs={Number(24)}>
                <Box className={styles.form_1}>
                  <Box className={styles.input_2_container}>
                    <Box className={styles.input_2_inner}>
                      <Text className={styles.input_2_label} textType={"Text"}>
                        Content
                      </Text>
                      <Text className={styles.input_2_required} textType={"Text"}>
                        *
                      </Text>
                    </Box>
                    <Controller
                      control={formForm1.control}
                      render={({
                        field: { onChange, onBlur, value },
                        fieldState: { isTouched, error },
                      }: any) => {
                        return (
                          <Input
                            inputStyle={styles.content_input_input}
                            placeholder={"Enter your note!"}
                            className={styles.content_input}
                            onChange={onChange}
                            value={value}
                          />
                        );
                      }}
                      name="content_input"
                    />
                    <Box className={styles.input_2_error_message_container}>
                      <Text className={styles.input_2_error_message_text} textType={"Text"}>
                        {get(formForm1Errors, "content_input.message")}
                      </Text>
                    </Box>
                  </Box>
                  <Button
                    buttonType={"primary"}
                    className={styles.form_1_button}
                    onClick={formForm1.handleSubmit(handleForm1Button)}
                  >
                    Create
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
export default CreateNotePage;
