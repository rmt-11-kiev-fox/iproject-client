<template>
  <div :style="
          { backgroundImage: 'url(' + require('@/Picture/bookback.jpg') + ')' }
        "
        style="
      background-size: 2000px;
    ">
    <navBar />
    <div class="container" >
      <div class="row" >
        <div class="col-12" style="margin-top: 11rem; margin-bottom: 5rem">
          <div class="card mx-auto" style="width: 40rem">
            <div class="card-body shadow">
              <h5 class="card-title">BOOK FORM</h5>
              <form>
                <div class="form-group my-3">
                  <label for="exampleFormControlInput1">Email address</label>
                  <input
                    type="email"
                    class="form-control my-3"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="form-group my-3">
                  <label for="exampleFormControlInput1">Name</label>
                  <input
                    class="form-control my-3"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div class="form-group my-3">
                  <label for="exampleFormControlSelect1">People</label>
                  <select class="form-control my-3" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </select>
                </div>
                <div class="form-group my-3">
                  <label for="exampleFormControlTextarea1"
                    >Notes</label
                  >
                  <textarea
                    class="form-control my-3"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="e.g: Near Window, Smoking Area"
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
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
