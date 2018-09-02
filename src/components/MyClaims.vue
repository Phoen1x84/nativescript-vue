<template>
    <Page actionBarHidden="true" class="app">
        <FlexboxLayout flexDirection="column" justifyContent="center">
            <Button text="Make a new claim" @tap="$router.push('/makeClaim')" class="form__btn" />
        </FlexboxLayout>
    </Page>
</template>

<script>
export default {
  data() {
    return {
      
    };
  }  
};
</script>

<style>

</style>

