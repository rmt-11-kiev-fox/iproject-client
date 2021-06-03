<template>

  <div class="about">
    <NavBar />
<div class="container mt-4"> 
    <article>
      <h1><pre>Mission & Goals</pre></h1>
      <p>
        The mission of Charitable, a nonprofit charity watchdog and
        information service, is to maximize the effectiveness of every dollar
        contributed to charity by providing donors with the information they
        need to make more informed giving decisions.
      </p>
    </article>

    <article>
      <h1><pre>Goals</pre></h1>
      <p>
        To research and evaluate the efficiency, accountability and governance
        of nonprofit organizations; to educate the public about the importance
        of wise giving; to inform the public of wasteful or unethical practices
        of nonprofits and provide recognition to highly effective and ethical
        charities; to advise Charitable members and conduct special
        investigations and evaluations of nonprofits; to expand and re-define
        our programs periodically to meet the continuing challenge of keeping
        the contributor informed.
      </p>
    </article>
  </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
export default {
  name:'About',
  components:{
    NavBar
  }
}
</script>
