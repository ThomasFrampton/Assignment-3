<template>
    <!-- List the values received from the parent component, and change them when the buttons are clicked to the other defined values. -->
    <div id='profile-info'>
        {{username}}
        <button @click='changeUsername()'>Change Username</button>
        {{password}}
        <button @click='changePassword()'>Change Password</button>
        {{email}}
        <button @click='changeEmail()'>Change Email</button>
    </div>
</template>

<script>
     // Exporting ProfileInfo Component
    export default {
        name: 'ProfileInfo',
        props: {
            username: String, 
            password: String,
            email: String,
        },
        //Emit 'changeItem' for each respective item, causing the values to change as is defined in the parent component. 
        methods: {
            changeUsername() {
                this.$emit('changeUsername')
            },
            changePassword() {
                this.$emit('changePassword')
            },
            changeEmail() {
                this.$emit('changeEmail')
            }
        }
    }
</script>

<style scoped>
</style>