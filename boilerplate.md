---
layout: post
title: Boilerplate
permalink: /boilerplate/
---

#Boilerplate

Use this template to get up and running fast!

{% highlight html %}
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{% if page.title %}{{ page.title }}{% else %}{{ site.title }}{% endif %} | phila.gov</title>
    <link rel='icon' type='image/x-icon' href="{{ "/images/favicon.ico" | prepend: site.baseurl }}">
    <meta name="description" content="{{ site.description }}">

    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <!--
        Ionicons link optional  
        <link rel="stylesheet" href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    -->
    <!--pattern stylesheet includes foundation css -->
    <link rel="stylesheet" href="//cityofphiladelphia.github.io/patterns/{{ site.version }}/css/patterns.css">

    <link rel="canonical" href="{{ page.url | replace:'index.html','' | prepend: site.baseurl | prepend: site.url }}">
    <link rel="alternate" type="application/rss+xml" title="{{ site.title }}" href="{{ "/feed.xml" | prepend: site.baseurl | prepend: site.url }}" />
  </head>

  <body>
    <div class="page" id="page">
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
        </article>
      </div>
    </div><!-- End #page -->
    <!-- Begin footer -->
    <footer class="site-footer" role="contentinfo">
      <section class="fat">
        <div class="row">
          <div class="large-8 columns">
            <h1>Government</h1>
            <nav>
              <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
              </ul>
            </nav>
          </div>
          <div class="large-16 columns">
            <h1>Browse alpha.phila.gov</h1>
            <nav>
              <ul class="columns-2">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
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
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
    <!-- End footer -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.1/js/foundation.min.js"></script>
    <script type='text/javascript' src='//cityofphiladelphia.github.io/patterns/{{ site.version }}/js/patterns.min.js'></script>
    <script>
      $(document).foundation();
    </script>
  </body>
</html>

{% endhighlight %}
