<template>
<section class="form-section">
    <div class="form-block">
        <form class="form-wrapper" @submit.prevent="onSubmit">
            <h1 class="title">Create an account</h1>
            <p class="description">Before the beginning of exciting learning adventure</p>
            <label class="label" for="email">Your email</label>
            <a-input v-model="email"/>
            <label class="label" for="password">Your password</label>
            <a-input-password v-model="password"/>
            <label class="label" for="password">Confirm password</label>
            <a-input-password v-model="confirmPassword"/>
            <a-checkbox class="checkbox" @change="onChange">
                <span class="checkbox-text">
                    I accept Privacy Policy, Terms of Service and Subscription Terms
                </span>
            </a-checkbox>
            <button class="submit-btn" type="submit">Sign Up</button>
            <Loader v-if="loading" />
        </form>
        <div class="picture">
            <img class="cards-img" src="../assets/Cards.png" alt="cards"/>
        </div>
    </div>
</section>
</template>

<script>
import Loader from '@/assets/Loader'
export default {
    data() {
        return {
            email: "",
            password: "",
            confirmPassword: "",
            isAccepted: false,
            loading: false,
        }
    },
    
    methods: {
        onSubmit() {

            const authData = {
                email: this.email,
                password: this.password,
                confirmPassword: this.confirmPassword,
                isAccepted: this.isAccepted,
            }

            this.loading = true

          fetch('http://localhost:3000/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(authData)
                
            }).then(data => (data).json())
                .then(json => {
                    this.loading = false
                    this.$notify({
                        group: 'foo',
                        type: json.status < 400 ? 'success' : 'warn',
                        text: json.message,
                    });
                 }
                )
                .catch(e => console.log(e))

        },

        onChange(e){
            const { checked } = e.target
            this.isAccepted = checked
        }
    },

    components: {
     Loader,
    }
}
</script>

<style scoped>
   
    .form-section {
        padding: 119px 0 101px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .form-block {
        width: 713px;
        display: flex;
        justify-content: space-between;
    }
    .form-wrapper {
        margin: 0 auto;
        width: 324px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .label {
        color: #9E9E9E;
        margin-top: 20px;
    }
    .cards-img {
        width: 314px;
    }
    .title {
        font-size: 30px;
        font-weight: 700;
        margin: 0;
    }
    .description {
        font-size: 20px;
        font-weight: 400;
        color: #9E9E9E;
        text-align: start;
        line-height: 23px;
    }
    .checkbox {
        margin-top: 10px;
    }
    .checkbox-text {
        color:#9E9E9E;
        font-size: 10px;
        font-weight: 400;
    }
    .submit-btn {
        width: 244px;
        background-color: #00B1FF;
        color: #fff;
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 700;
        border: none;
        border-radius: 20px;
        padding: 6px 0;
        cursor: pointer;
        margin: 80px 0 0 233px;
        box-shadow: 0px 7px 8px -5px rgba(0, 194, 255, 0.25);
    }
    .submit-btn:focus {
        outline: none;
    }
    .submit-btn:hover {
        transform: scale(1.1);
    }
     .submit-btn:active {
        transform: translateY(2px)
    }
</style>