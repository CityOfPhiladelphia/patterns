---
layout: page
title: Boilerplate
permalink: /boilerplate/
---

#Boilerplate

Use this template to get up and running fast! It includes:

  * Absolute paths to Phila.gov Pattern CSS and Javascript files
  * Absolute path to the phila.gov logo
  * CDN links to:
    * [jQuery](https://jquery.com/)
    * [Modernizr](http://modernizr.com/)
    * [foundation.min.js](http://foundation.zurb.com/docs/javascript.html)
    * [Font Awesome](http://fortawesome.github.io/Font-Awesome/)
    * [Ionicons CSS](http://ionicons.com/) (optional, font files not included)
  * Standard header & footer markup
  * Empty div for your main content

##Full-width applications

Change the page wrapper from <code><div class="site" id="page"></code> to <code><div class="full" id="application"></code>

{% highlight html %}
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{% if page.title %}{{ page.title }}{% else %}{{ site.title }}{% endif %} | phila.gov</title>
    <link rel='icon' type='image/x-icon' href="//cityofphiladelphia.github.io/patterns/images/favicon.ico">
    <meta name="description" content="">

    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <!--Ionicons are optional-->  
    <link rel="stylesheet" href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">

    <!--pattern stylesheet includes foundation css -->
    <link rel="stylesheet" href="//cityofphiladelphia.github.io/patterns/dist/{{ site.version }}/css/patterns.css">

    <link rel="canonical" href="">

    <script src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js"></script>
  </head>

  <body>
    <div class="site" id="page">
      <!-- Begin header -->
      <header class="site-header" role="banner">
        <div class="row">
          <div class="small-24 medium-12 columns">
            <a href="http://alpha.phila.gov"><img src="//cityofphiladelphia.github.io/patterns/images/city-of-philadelphia-logo.png" class="logo no-scale" alt="City of Philadelphia"></a>
          </div>
          <div class="small-24 medium-12 columns">
            <form class="search">
              <input type="text" placeholder="Search alpha.phila.gov"><input type="submit">
            </form>
          </div>
        </div>
      </header>
      <!-- End header -->
      <div class="row">
        <div class="small-24 columns">
          <div class="divider"></div>
        </div>
      </div>
      <div class="row">
        <div id="breadcrumbs" class="large-24 columns">
          <ul class="inline-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Grandparent</a></li>
            <li><a href="#">Parent</a></li>
            <li>Child</li>
          </ul>
        </div>
      </div>
      <article>
        <div class="row">
          <div class="large-24 columns">
            <!-- main content here-->
          </div>
        </div>
      </article>
    </div><!-- End #page -->
    <!-- Begin footer -->
    <footer class="site-footer" role="contentinfo">
      <section class="fat">
        <div class="row">
          <div class="large-8 columns">
            <h1>Government</h1>
            <nav>
              <ul>
                <li><a href="http://alpha.phila.gov">alpha.phila.gov</a></li>
                <li><a href="http://alpha.phila.gov/departments">Department Directory</a></li>
                <li><a href="http://www.phila.gov/mayor">Mayor's Office</a></li>
                <li><a href="http://iframe.publicstuff.com/#?client_id=242">Report an Issue / 311</a></li>
                <li><a href="http://cityofphiladelphia.wordpress.com/">News</a></li>
                <li><a href="http://www.phila.gov/phoneDir/">Phone Directory</a></li>
              </ul>
            </nav>
          </div>
          <div class="large-16 columns">
            <h1>Browse alpha.phila.gov</h1>
            <nav>
              <ul class="columns-2">
                <li><a href="http://alpha.phila.gov/browse/business">Business</a></li>
                <li><a href="http://alpha.phila.gov/browse/health">Health</a></li>
                <li><a href="http://alpha.phila.gov/browse/jobs-and-contracts">Jobs and Contracts</a></li>
                <li><a href="http://alpha.phila.gov/browse/legal">Legal</a></li>
                <li><a href="http://alpha.phila.gov/browse/payments-and-taxes">Payments and Taxes</a></li>
                <li><a href="http://alpha.phila.gov/browse/permits-licenses">Permits and Licenses</a></li>
                <li><a href="http://alpha.phila.gov/browse/property-housing">Property and Housing</a></li>
                <li><a href="http://alpha.phila.gov/browse/public-safety">Public Safety</a></li>
                <li><a href="http://alpha.phila.gov/browse/recreation">Recreation</a></li>
                <li><a href="http://alpha.phila.gov/browse/streets-and-utilities">Streets and Utilities</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <div class="row classic">
        <div class="large-6 columns">
          <a href="#">Feedback</a>
        </div>
        <div class="large-12 columns">
          <nav>
            <ul class="inline-list">
              <li><a href="http://alpha.phila.gov/terms-of-use">Terms of use</a></li>
              <li><a href="http://www.phila.gov/privacy/pdfs/FinalCityOpenRecords.pdf">Right to know (pdf)</a></li>
              <li><a href="http://alpha.phila.gov/privacypolicy">Privacy Policy</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
    <!-- End footer -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/foundation/5.5.1/js/foundation.min.js"></script>
    <script src="//cityofphiladelphia.github.io/patterns/dist/{{ site.version }}/js/patterns.min.js"></script>
    <script>
      $(document).foundation();
    </script>
  </body>
</html>

{% endhighlight %}
