<template>
    <!-- Defines a div to contain the vehicle listed by the system. -->
    <div id="CarList">
        <!-- Using a v-for loop, create a car listing for all the information in the array defined in data(). -->
        <car-listing v-for="item in listing" :name = "item.car_name" :imageURL = "item.car_image" :price = "item.car_price" v-bind:key="item.id">

            </car-listing>
    </div>
</template>

<script>
    // Exporting the CarListing List component. Contains an array of 
    export default {
        name: "CarListingList",
        data() {
            return {
                // Defines an array containing the data for each car listing.
                listing: [
                    { id: "0", car_name: "White Car", car_image: "Volvo-XC40-white-scaled.jpg", car_price: "$21,000" },
                    { id: "1", car_name: "Red Car", car_image: "performance-sports-car-kia-stinger.jpg", car_price: "$32,000" },
                    { id: "2", car_name: "White Sports Car", car_image: "2021_chevrolet_corvette_stingray_angularfront.jpg", car_price: "$58,000" },
                    { id: "3", car_name: "Kachow", car_image: "71bDAaP8NYL._AC_SL1500_.jpg", car_price: "Priceless" },
                    { id: "4", car_name: "Blue Car", car_image: "2018-11-27-15-44-25.jpg", car_price: "$27,000" },
                    { id: "5", car_name: "Black Car", car_image: "99300DE1-F956-44FF-B766-AB2FA96819C6_307613_3.jpeg", car_price: "$29,000" },
                    { id: "6", car_name: "Yellow Car", car_image: "vw (2).jpg", car_price: "$45,000" },
                    { id: "7", car_name: "Kachigga", car_image: "71iiXZZQxcL.jpg", car_price: "Worthless" }
                ]
            }
        }
    }
</script>

<style scoped>
</style>