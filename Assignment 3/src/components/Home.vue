<template>
    <div class="Home">
        <!-- Title of the Page -->
        <h1>Used Car Website</h1>
        <!-- The listing of cars to be displayed on the page -->
        <CarListingList />
    </div>
</template>

<script>
    // Importing the CarListingList subcomponent.
    import CarListingList from "./CarListingList.vue";

    // Exporting Home Component, with its subcomponent.
    export default {
        name: "Home",
        components: {
            CarListingList
        },
    };
</script>

<style scoped>
</style>

