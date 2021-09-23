<template>
    <div>
        <!-- Passes the information in data() to the ProfileInfo Component for all relevant values. Causes them to display using these values when their conditions are fufilled. -->
        <profile-info :username="user.username" @changeUsername="user.username = 'Dave'" :password="user.password" @changePassword="user.password = 'No'" :email="user.email" @changeEmail="user.email = 'person@example.com.au'" />
    </div>
</template>

<script>
    // Exporting Profile Component
    export default {
        name: 'Profile',
        data() {
            return {
                user: {
                    username: 'Matt',
                    password: 'Password',
                    email: 'email@dave.com'
                }
            }
        }
    };
</script>

<style scoped>
</style>