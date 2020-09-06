import React, { ChangeEvent, CSSProperties } from "react";
// import { InputFile } from "semantic-ui-react-input-file";
// import { Button } from "semantic-ui-react";



// import { Modal, Image, Loader, Message } from "semantic-ui-react";
// import { userService } from "../../services/users.service";
// import { Context } from "../../utilities/useAuth";
// import { reducer, reducerImage } from "../../utilities/reducers";

// const inputUploadFile: CSSProperties = {
//   display: "none",
// };

// const buttonUploadFile: CSSProperties = {
//   margin: 8,
// };

// // component own props
// interface UploadFileOwnProps {}

// // component props
// interface UploadFileProps extends UploadFileOwnProps {}

// // component State
// interface UploadFileStateProps {}
// const ImageInput: React.FunctionComponent = () => {
//   const getFileFromInput = (file: File): Promise<any> => {
//     return new Promise(function (resolve, reject) {
//       const reader = new FileReader();
//       reader.onerror = reject;
//       reader.onload = function () {
//         resolve(reader.result);
//       };
//       reader.readAsBinaryString(file); // here the file can be read in different way Text, DataUrl, ArrayBuffer
//     });
//   };
//   const manageUploadedFile = (binary: String, file: File) => {
//     // do what you need with your file (fetch POST, ect ....)
//     console.log(`The file size is ${binary.length}`);
//     console.log(`The file name is ${file.name}`);
//   };
//   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//     event.persist();

//     console.log(event.target.files);
//     // Array.from().forEach((file) => {
//     //   getFileFromInput(file)
//     //     .then((binary) => {
//     //       manageUploadedFile(binary, file);
//     //     })
//     //     .catch(function (reason) {
//     //       console.log(`Error during upload ${reason}`);
//     //       event.target.value = ""; // to allow upload of same file if error occurs
//     //     });
//     // });
//     //console.log(e && e.target.files);
//   };
//   return (
//     <div>
//       <input
//         accept="image/*"
//         id="file"
//         multiple={true}
//         type="file"
//         onChange={(e) => handleFileChange(e)}
//       />
//       <label htmlFor="file">
//         <Button
//           component="span"
//           style={buttonUploadFile}
//           onClick={(e) => e.stopPropagation()}
//         >
//           Upload
//         </Button>
//       </label>
//     </div>
//   );
// };

// export default ImageInput;





// const ImageInput: React.FunctionComponent<{ profileImage: string | null }> = ({
//   profileImage,
// }) => {
//   const { contextState, setContext } = useContext(Context);

//   //   const [preview, setPreview] = useState<null | string>(null);
//   //   const [loading, setLoading] = useState(false);
//   //   const [file, setFile] = useState<null | File>(null);
//   const [
//     { success, error, message, file, preview, loading },
//     dispatch,
//   ] = useReducer(reducerImage, {
//     success: false,
//     error: "",
//     message: "",
//     file: null,
//     loading: false,
//     preview: null,
//   });
//   console.log({ success, error, message });

//   const uploadImage = () => {
//     // setLoading(true);
    
//     dispatch({ type: "request" });
//     const formData = new FormData();
//     file && formData.append("image", file);
//     formData.append("userId", contextState.user.id);
//     formData.append("type", "profile");

//     userService
//       .uloadImage(formData)
//       .then((res) => {
//         if (res.data.success) {
//           dispatch({
//             type: "success",
//             message: "Image Uploaded",
//           });
//         } else {
//           dispatch({ type: "failure", error: res.data.error });
//         }
//         // setLoading(false);//
//       })
//       .catch((err) => {
//         dispatch({ type: "failure", error: "Something went wrong" });

//       });
//   };
//   const handeImageChange = (event: ChangeEvent<HTMLInputElement>) => {
//     event.persist();
//     const pre = URL.createObjectURL(
//       event.target.files && event.target.files[0]
//     );
//     dispatch({
//         type: "preview", preview: pre, file: event.target.files?.[0] || null
//     })
//     // setFile(event.target.files?.[0] || null);
//     // setPreview(pre);
//   };
//   return (
//     <Modal.Content image>
//       <Image
//         wrapped
//         size="medium"
//         src={
//           preview
//             ? preview
//             : profileImage
//             ? profileImage
//             : "http://localhost:3010/users/matthew-7e89.png"
//         }
//         centered
//       />
//       <Modal.Description>
//         {success && message && (
//           <Message style={{textAlign: "center"}} positive>
//             <Message.Header>{message}</Message.Header>
//           </Message>
//         )}
//         {!success && error && (
//           <Message style={{textAlign: "center"}} negative>
//             <Message.Header>{error}</Message.Header>
//           </Message>
//         )}
//         <br />
//         <br />
//         <br />
//         <InputFile
//           input={{
//             id: "input-control-id",
//             onChange: (e) => handeImageChange(e),
//           }}
//         />
//         <br />
//         <br />
//         <br />
//         <Button
//           disabled={preview === null}
//           onClick={() => uploadImage()}
//           positive
//           labelPosition="right"
//           icon="checkmark"
//           content="Upload"
//           {...(loading && { loading: true })}
//         />
//       </Modal.Description>
//     </Modal.Content>
//   );
// };

// export default ImageInput;
