<template>
    <!-- A div that contains the navigation bar, as well as whatever content for the page navigated to by a user.-->
    <div id="content">
        <Navigation/>
        <router-view></router-view>
    </div>
</template>

<script>
    // Importing Navigation Subcomponent
    import Navigation from "./components/Navigation.vue";

    // Exporting App Component, with its subcomponent.
    export default {
        name: "App",
        components: {
            Navigation,
        },
    };
</script>


<style>
</style>

