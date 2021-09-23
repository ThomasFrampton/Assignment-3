<template>
    <div class="search">
        <!-- Title of the page -->
        <h1>Used Car Search!</h1>
        <!-- Groups together all items used in the Dummy Search. -->
        <div class="Search" id="Search">
            <!-- Creates a fillable text box, with an additional side label -->
            <label for="carname">Car Model Name:</label>
            <input type="text" id="carname" v-model="searchValue"/>
            <br /><br />
            <!-- A v-for loop to list out all the item currently present in the filtered array, and their respective data. -->
            <car-listing v-for="item in filteredListing" :name="item.car_name" :imageURL="item.car_image" :price="item.car_price" v-bind:key="item.car_name">

            </car-listing>
        </div>
    </div>
</template>

<script>
    // Exporting Search Component
    export default {
        name: 'Search',
        data() {
            return {
                searchValue: '',
                  // Creates an array of cars and their information.
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
        },
        computed: {
            filteredListing() {
                let tempListing = this.listing

                // Processes the input by the user and returns relevent vehicles.
                if (this.searchValue != '' && this.searchValue) {
                    tempListing = tempListing.filter((item) => {
                        return item.car_name
                            .toUpperCase()
                            .includes(this.searchValue.toUpperCase())
                    })
                }
                // Sorts the listing into alphabetical order
                tempListing = tempListing.sort((a, b) => {
                    let fa = a.car_name.toLowerCase(), fb = b.car_name.toLowerCase()

                    if (fa < fb) {
                        return -1
                    }
                    if (fa > fb) {
                        return 1
                    }
                    return 0

                })
                return tempListing
            }
        }
    }
</script>

<style scoped>
</style>