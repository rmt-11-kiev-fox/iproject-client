<template>
<div>
    <navBar/>
    <div class="container">
        <div class="row my-5">
            <div class="col-12 my-5">
                <div class="card my-5" style="width: 18rem;">
                    <div class="card-body shadow">
                        <h5 class="card-title">BOOK FORM</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
