<template>
    <div class="contact">
        <!-- Title of the page -->
        <h1>Contact Us!</h1>

        <!-- Floats all items within to the right of screen. -->
        <contactright>
            <!-- Creates a paragraph. -->
            <p>
                Hi! Thanks for visiting the website. We hope you've been having a great
                time! If you'd like to leave some feedback, report an issue, or
                otherwise need to contact the people behind the site, our contact
                details are below. Happy Browsing!
            </p>
            <!-- Creates a line break which seperates the information from the paragraph. -->
            <hr />
            <!-- A Hyperlink which opens an email to the tframpton address, and lists the phone number-->
            <a href="mailto:tframpton@deakin.edu.au">Email: tframpton@deakin.edu.au</a>
            <p>Ph: +61-2-3456-7890</p>
        </contactright>
        
        <!-- Creates Placeholder for an Image. -->
        <contactleft>
            <img src="@/assets/istockphoto-666135210-170667a.jpg" />
        </contactleft>
    </div>
</template>

<script>
    // Exporting Contact Component
    export default {
        name: 'Contact',
    };
</script>

<style scoped>
</style>