<template>
    <div>
        <!-- Defines a list, which encompasses each element in the navigation bar -->
        <ul class="topnav">
            <!-- A list of items, each pointing to their respective page using Vue's router functionality -->
            <li><router-link to="/" class="nav-link">Home</router-link></li>
            <li><router-link to="/search" class="nav-link">Search</router-link></li>
            <li><router-link to="/contact" class="nav-link">Contact Us</router-link></li>

            <!-- Align's items to the right of screen -->
            <right>
                <!-- Creates an additional item in the list, containing the ProfileNavigation Vue file-->
                <li class="Profilemenu">
                    <ProfileNavigation />
                </li>

            </right>
            <!-- Some welcome text, aligned to the right of screen beside the profile nav.-->
            <righttext>Welcome! </righttext>
        </ul>
    </div>
</template>

<script>
    // Importing the ProfileNavigation sub-component
    import ProfileNavigation from "./Profile_Navigation.vue";

    // Exporting Navigation Component, including its subcomponent
    export default {
        name: "Navigation",
        components: {
            ProfileNavigation
        },
    };
</script>