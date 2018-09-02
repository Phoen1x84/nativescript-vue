<template>
    <Page class="app">
        <ActionBar title="Make a Claim" class="action-bar">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/claims')"/>
        </ActionBar>
        <StackLayout> 
            <Image :src="imageSrc" class="preview-img" />
        </StackLayout>

        <FlexboxLayout flexDirection="column" justifyContent="center">
            <Button text="Take Picture" @tap="takePicture" />
        </FlexboxLayout>
    </Page>
</template>

<script>
import * as camera from 'nativescript-camera';
import { image } from 'ui/image';

export default {
  data() {
    return {
        imageSrc: null,
    };
  },
   methods: {
    takePicture() {
      const requestAccess = camera.requestPermissions();
      const isCameraAvailable = camera.isAvailable();
      if (requestAccess && isCameraAvailable) {
        camera
          .takePicture()
          .then(imageAsset => {
            console.log('Result is an image asset instance');
            var image = new Image();
            image.imageSrc = imageAsset;            
          })
          .catch(err => {
            console.log('Error -> ' + err.message);
          });
      } else {
          alert('no access to camera');
      }
    }
  }
};
</script>

<style lang="scss">
.preview-img {
    width: 200;
    height: 200;
}
</style>
