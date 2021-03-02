<template>
    <div class="wrapper">
        <HeaderComponent />
        <AuthForm />
        <FooterComponent />
    </div>
  
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent';
import AuthForm from '@/components/AuthForm';
import FooterComponent from '@/components/FooterComponent';

export default {
    components: {
        HeaderComponent,
        AuthForm,
        FooterComponent, 
    }
}
</script>
