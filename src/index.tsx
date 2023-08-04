// The component is for Image cropper
import React from "react";
import { Button, Modal } from "react-bootstrap";
import Avatar from "react-avatar-edit";
import "./ImageCropper.css";

// Interface
interface SentaraimageCropper {
  imageCrop: boolean;
  isDialogVisible: (response: boolean) => void;
  saveCropImage: (response: any) => void;
  callCroppedImage: (response: string) => void;
  width?: number;
  height?: number;
  shadingColor: string;
  backgroundColor: string;
  buttonName: string;
  modalTitle: string;
}

const SentaraImageCropper: React.FC<SentaraimageCropper> = ({
  imageCrop,
  isDialogVisible,
  saveCropImage,
  callCroppedImage,
  ...props
}) => {
  const onCrop = (view: any) => {
    callCroppedImage(view);
  };

  const saveCrop = () => {
    saveCropImage(false);
  };

  return (
    <Modal
      data-testid="modalContainer"
      className="modal-container"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={imageCrop}
      onHide={() => isDialogVisible(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.modalTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body data-testid="avatarComponent">
        <Avatar
          width={props.width ? props.width : 468}
          height={props.height ? props.height : 250}
          onCrop={onCrop}
          shadingColor={props.shadingColor}
          backgroundColor={props.backgroundColor}
        />
      </Modal.Body>
      <Modal.Footer className={"modal-footerButton-container"}>
        <Button
          data-testid="modalFooterButton"
          className={"modal-footerButton"}
          onClick={saveCrop}
        >
          {props.buttonName}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SentaraImageCropper;
