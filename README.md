## <ins>Sentara React Avatar Edit | Setara Image Cropper</ins>

### About the component
This component can be used for picking image and it can be cropped.
Import the Component

```ts
import SentaraImageCropper from './SentaraImageCropper';
```

Call it when you click edit button.

```ts
<ProfileApp

    imageCrop={boolean}
    callCroppedImage={callBackCallCroppedImage}
    isDialogVisible={callBackIsDialogVisible}
    saveCropImage={callBackSaveCropImage} 
    width={number}
    height={number}
    shadingColor={string}
    backgroundColor={string}
    buttonName={string}
    modalTitle={string}
 />
```

### Sample Response

```
base64ImageString

```

  ### Properties
Property | Type | Description
--- | --- | ---
imageCrop | boolean | Hide or show the cropped image.
callCroppedImage | callback | called when user drag and drop event stop and returns cropped image in base64 string.
isDialogVisible | callback | called when user clicks on close icon button and closes the dialog box.
saveCropImage | callback | called and saves the cropped image.
width | number | width of the editor(optional).
height | number | height of the editor(optional).
shadingColor | string | shading color is the editor cropping color.
backgroundColor | string | background color of the image.
buttonName | string | name of the button.
modalTitle | string | title or header name of the modal box.

---

# <ins>Component Specifications</ins>
Following specifications are useful to the developer who are going to work in this component.

### Use Cases
- The component should return callback function containing response
- The component should accept the props mentioned above

### Interface for the props

```ts
interface {
      imageCrop: boolean;
      isDialogVisible: (response: boolean) => void;
      saveCropImage: (response: any) => void;
      callCroppedImage: (response: string) => void;
      width?:number;
      height?:number;
      shadingColor:string;
      backgroundColor:string;
      buttonName:string;
      modalTitle:string;
}
```

### Unit Test Cases
- Check is it rendering successfully.