import { render, fireEvent, waitFor } from "@testing-library/react";
import SentaraImageCropper from "../index";

jest.mock("react-avatar-edit", () => () => <div data-testid="avatarMock" />);

describe("SentaraImageCropper", () => {
  it("should render the modal when `imageCrop` prop is true", () => {
    const { getByTestId } = render(
      <SentaraImageCropper
        imageCrop={true}
        isDialogVisible={() => {}}
        saveCropImage={() => {}}
        callCroppedImage={() => {}}
        shadingColor="black"
        backgroundColor="white"
        buttonName="Save"
        modalTitle="Crop Image"
      />
    );

    const modalContainer = getByTestId("modalContainer");
    expect(modalContainer).toBeInTheDocument();
  });

  it("should hide the modal when `imageCrop` prop is false", () => {
    const { queryByTestId } = render(
      <SentaraImageCropper
        imageCrop={false}
        isDialogVisible={() => {}}
        saveCropImage={() => {}}
        callCroppedImage={() => {}}
        shadingColor="black"
        backgroundColor="white"
        buttonName="Save"
        modalTitle="Crop Image"
      />
    );

    const modalContainer = queryByTestId("modalContainer");
    expect(modalContainer).toBeNull();
  });

  it("should call `isDialogVisible` when the modal is closed", () => {
    const mockIsDialogVisible = jest.fn();
    const { getByLabelText } = render(
      <SentaraImageCropper
        imageCrop={true}
        isDialogVisible={mockIsDialogVisible}
        saveCropImage={() => {}}
        callCroppedImage={() => {}}
        shadingColor="black"
        backgroundColor="white"
        buttonName="Save"
        modalTitle="Crop Image"
      />
    );

    const closeButton = getByLabelText("Close");
    fireEvent.click(closeButton);

    expect(mockIsDialogVisible).toHaveBeenCalledWith(false);
  });

  it("should call `saveCropImage` when the 'Save' button is clicked", () => {
    const mockSaveCropImage = jest.fn();
    const { getByTestId } = render(
      <SentaraImageCropper
        imageCrop={true}
        isDialogVisible={() => {}}
        saveCropImage={mockSaveCropImage}
        callCroppedImage={() => {}}
        shadingColor="black"
        backgroundColor="white"
        buttonName="Save"
        modalTitle="Crop Image"
      />
    );

    const modalFooterButton = getByTestId("modalFooterButton");
    fireEvent.click(modalFooterButton);

    expect(mockSaveCropImage).toHaveBeenCalledWith(false);
  });

  it("should call `callCroppedImage` when the image is cropped", () => {
    const mockCallCroppedImage = jest.fn();
    const { getByTestId } = render(
      <SentaraImageCropper
        imageCrop={true}
        isDialogVisible={() => {}}
        saveCropImage={() => {}}
        callCroppedImage={mockCallCroppedImage}
        shadingColor="black"
        backgroundColor="white"
        buttonName="Save"
        modalTitle="Crop Image"
      />
    );

    const avatarComponent = getByTestId("avatarMock");
    fireEvent.click(avatarComponent);
    waitFor(() => {
      expect(mockCallCroppedImage).toHaveBeenCalled();
    });
  });
});

describe("Snapshot for SentaraImageCropper", () => {
  it("takes snapShot of the component", () => {
    const mockSaveCropImage = jest.fn();
    expect(
      <SentaraImageCropper
        imageCrop={true}
        isDialogVisible={() => {}}
        saveCropImage={mockSaveCropImage}
        callCroppedImage={() => {}}
        shadingColor="black"
        backgroundColor="white"
        buttonName="Save"
        modalTitle="Crop Image"
      />
    ).toMatchSnapshot();
  });
});
