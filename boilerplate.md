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
    * [foundation.min.js](http://foundation.zurb.com/sites/docs/javascript.html)
    * [Font Awesome](http://fortawesome.github.io/Font-Awesome/)
    * [Ionicons CSS](http://ionicons.com/) (optional, font files not included)
  * Standard header & footer markup
  * Empty div for your main content

##Full-width applications

Change the page wrapper from <code><div class="site" id="page"></code> to <code><div class="full" id="application"></code>

<button class="btn copy" title="Copy code to clipboard" data-clipboard-target=".highlight"><i class="fa fa-clipboard"></i></button>
{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{% if page.title %}{{ page.title }}{% else %}{{ site.title }}{% endif %} | phila.gov</title>
    <link rel='icon' type='image/x-icon' href="//cityofphiladelphia.github.io/patterns/images/favicon.ico">
    <meta name="description" content="">

    <link rel="stylesheet" href="<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">">

    <!--Ionicons are optional-->
    <link rel="stylesheet" href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">

    <!--pattern stylesheet includes foundation css -->
    <link rel="stylesheet" href="//cityofphiladelphia.github.io/patterns/dist/{{ site.version }}/css/patterns.css">

    <link rel="canonical" href="">

  </head>

  <body>
    <div class="site" id="page">

{{ site.patterns | where:"title" : "Header" }}
      <article data-swiftype-name="body" data-swiftype-type="text">
        <div class="row">
          <div class="large-24 columns">
            <!-- main content here-->
          </div>
        </div>
      </article>
    </div><!-- End #page -->
{{ site.patterns | where:"title" : "Footer" }}
  <script src="//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>

  <script src="//cdnjs.cloudflare.com/ajax/libs/foundation/6.1.2/foundation.min.js"></script>

    <script src="//cityofphiladelphia.github.io/patterns/dist/{{ site.version }}/js/patterns.min.js"></script>
  </body>
</html>

{% endhighlight %}
