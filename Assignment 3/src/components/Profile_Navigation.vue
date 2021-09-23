<template>
    <div>
        <!-- A button, used for its ability to have items appeared when hovered over -->
        <button class="circle">PFP</button>
        <!-- Creates a second list attached to the button, containing options exclusive to logged in users -->
        <ul class="dropdown-content">
            <!-- Links to pages using Vue's router capabilities. As Logout lacks Login capbility, currently return user to the Home Page.'  -->
            <li><router-link to="/profile" class="nav-link">Profile</router-link></li>
            <li><router-link to="/" class="nav-link">Logout</router-link></li>
        </ul>
    </div>
</template>

<script>
    // Exporting ProfileNavigation Component
    export default {
        name: "ProfileNavigation"
    };
</script>

<style scoped>
</style>