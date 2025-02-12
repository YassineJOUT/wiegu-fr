import React, { ChangeEvent, useState, useContext } from "react";
import { InputFile } from "semantic-ui-react-input-file";
import { Modal, Image, Button, Message } from "semantic-ui-react";
import { userService } from "../../services/users.service";
import { Context } from "../../utilities/useAuth";
import { history } from "../../utilities/history";

const CoverImageInput: React.FunctionComponent<{ coverImage: string | null,handleUpload: Function }> = ({
    coverImage,
    handleUpload
}) => {
  const { contextState } = useContext(Context);

  const [preview, setPreview] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<null | File>(null);
  const [{ success, message, error }, setSuccess] = useState<{
    success: boolean;
    message: string | null;
    error: string | null;
  }>({
    success: false,
    message: "",
    error: "",
  });

  const uploadImage = () => {
    setLoading(true);
    const formData = new FormData();
    file && formData.append("image", file);
    formData.append("userId", contextState.user.id);
    formData.append("type", "cover");

    userService
      .uloadImage(formData)
      .then((res) => {
        if (res.data.success) {
            handleUpload(res.data.data.filename);
          setSuccess({
            success: true,
            message: "Image Uploaded",
            error: null,
          });
        } else {
          setSuccess({
            success: false,
            message: null,
            error: res.data.error,
          });
        }
        //
        history.push("/profile")
        setLoading(false);
      })
      .catch((err) => {
        setSuccess({
          success: false,
          message: null,
          error: "Something went wrong",
        });
        setLoading(false);
      });
  };
  const handeImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    const pre = URL.createObjectURL(
      event.target.files && event.target.files[0]
    );
    setFile(event.target.files?.[0] || null);
    setPreview(pre);
  };
  return (
    <Modal.Content image>
      <Image
        wrapped
        size="large"
        src={
          preview
            ? preview
            : coverImage
            ? coverImage
            : "./images/cover.png"
        }
        centered
      />
      <Modal.Description>
        <br />
        <br />
        <InputFile
          input={{
            id: "input-control-id",
            onChange: (e) => handeImageChange(e),
          }}
        />
        <br />
        <br />
        <Button
          disabled={preview === null}
          onClick={() => uploadImage()}
          positive
          labelPosition="right"
          icon="checkmark"
          content="Upload"
          {...(loading && { loading: true })}
        />
        <br />
        {success && message && (
          <Message style={{textAlign: "center"}} positive>
            <Message.Header>{message}</Message.Header>
          </Message>
        )}
        {!success && error && (
          <Message style={{textAlign: "center"}} negative>
            <Message.Header>{error}</Message.Header>
          </Message>
        )}
      </Modal.Description>
    </Modal.Content>
  );
};

export default CoverImageInput;
