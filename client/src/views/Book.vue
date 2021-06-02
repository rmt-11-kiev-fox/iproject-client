<template>
<div>
    <navBar/>
    
    <Footer/>
</div>
  
</template>

<script>
import navBar from '../components/Navbar'
import Footer from '../components/Footer'
export default {
    name: 'Book',
    components: {
        navBar,
        Footer
    }
}
</script>

<style>

</style>