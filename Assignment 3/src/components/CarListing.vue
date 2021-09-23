<template>
    <!-- Creates a div containing all elements for a vehicle -->
    <div class=CarImage>
        <!-- Creates a square shape, to server as a filler background for images should they not fill the space. -->
        <div class="GraySquare">
            <!-- Loads an image, using a value passed in from a parent component.-->
            <img :src="require('@/assets/' + imageURL)" />
        </div>
        <!-- Creates a rectangle containing Car Information. Car Information is passed in from parent Vue component.-->
        <div class="WhiteRectangle">
            <p>{{name}}</p>
            <p>{{price}}</p>
        </div>
    </div>
</template>

<script>
    // Exporting the CarListing component, containg the props used in the template.
    export default {
        name: "CarListing",
        props: {
            name: String,
            imageURL: String,
            price: String
        }
    };
</script>

<style scoped>
</style>