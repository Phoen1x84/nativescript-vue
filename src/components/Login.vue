<template>
    <Page actionBarHidden="true" class="app">        
        <FlexboxLayout class="form-container" flexDirection="column" justifyContent="center">                      
            <StackLayout class="form">
              <FlexboxLayout flexDirection="column" justifyContent="center" alignItems="center">
                <image class="form__logo" src="~/images/covea-insurance-logo.gif" stretch="none" />
              </FlexboxLayout>
                <StackLayout>
                    <Label textWrap="true" text="Email" class="form__label" />
                    <TextField v-model="emailField" hint="Enter your email address here" class="form__input" />
                </StackLayout>
                <StackLayout>
                    <Label textWrap="true" text="Password" class="form__label" />
                    <TextField v-model="passwordField" hint="Enter your password here" class="form__input" />         
                </StackLayout>
                <Button text="Sign in" @tap="$router.push('/claims')" class="form__btn" />
            </StackLayout>
        </FlexboxLayout>        
    </Page>
</template>

<script>
export default {
  data() {
    return {
      emailField: '',
      passwordField: ''
    };
  }
};
</script>

<style lang="scss">
.form-container {
  height: 100%;
}

.form {
  margin: 0 34;

  &__logo {
    margin: 20 0;
  }

  &__label {
    color: #616266;
    font-size: 14;
  }

  &__input {
    border-color: #616266;
    border-width: 0;
    border-bottom-width: 1;
    color: #616266;
    font-size: 14;
    margin-bottom: 20;
    placeholder-color: #ccc;
  }

  &__btn {
    border-radius: 6;
    background-color: #db1831;
    color: #fff;
    margin-bottom: 20;
    font-size: 14;
    padding: 5;
  }
}
</style>

