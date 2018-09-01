<template>
    <Page actionBarHidden="true" class="app">        
        <FlexboxLayout class="form-container" flexDirection="column" justifyContent="center">
            <StackLayout class="form">
                <StackLayout>
                    <Label textWrap="true" text="Email" class="form__label" />
                    <TextField v-model="emailField" hint="Enter your email address here" class="form__input" />
                </StackLayout>
                <StackLayout>
                    <Label textWrap="true" text="Password" class="form__label" />
                    <TextField v-model="passwordField" hint="Enter your password here" class="form__input" />         
                </StackLayout>
                <Button text="Sign in" @tap="$router.push('/hello')" class="form__btn" />
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
.app {
  background: #80c9c7;
}
.form-container {
    height: 100%;
}

.form {
  margin: 0 34;

  &__label {
    color: #fff;
    font-size: 14;    
  }

  &__input {
    border-color: #fff;
    border-width: 0;
    border-bottom-width: 1;
    color: #fff;    
    font-size: 14;
    margin-bottom: 40;    
    placeholder-color: #ddd;
  }

  &__btn {
    border-radius: 20;
    background-color: #db1831;
    color: #fff;
    margin-bottom: 40;
    font-size: 14;
    padding: 14;    
  }
}
</style>

