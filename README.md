# patterns

Phila.gov Pattern Library

## Using Phila.gov Patterns
The patterns CSS includes a customized 24-column grid version of Foundation 5.5.2. Just add a few lines to `<head>`. For a sticky footer, also include the patterns.min.js file.

### The bare minimum
```
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
<link rel="stylesheet" href="//cityofphiladelphia.github.io/patterns/dist/0.10.0/css/patterns.css">
<script type='text/javascript' src='//cityofphiladelphia.github.io/patterns/dist/0.10.0/js/patterns.min.js'></script>
```

### Also recommended
Ionicons are used in alerts and modernizr is included for sad, old browsers.
```
<link rel="stylesheet" href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
<script type='text/javascript' src='//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js?ver=2.8.3'></script>
```

## Local Setup
Phila.gov Patterns uses <a href="http://jekyllrb.com/">Jekyll</a> to generate pattern files.

1. Install Jekyll <code>$ gem install jekyll</code>  
2. Clone this repository
3. cd into the patterns directory
4. Run: <code>$ jekyll serve --baseurl ''</code>
5. Navigate to <code>http://localhost:4000</code>


## Versioning

Phila.gov Patterns will be maintained under the Semantic Versioning guidelines as much as possible. Releases will be numbered with the following format:

{major}.{minor}.{patch}

###Guidelines

1. Breaking backward compatibility bumps the major (and resets the minor and patch)
2. New patterns (without breaking backward compatibility) bumps the minor (and resets the patch)
3. Bug fixes and misc changes bumps the patch


For more information on SemVer, please visit http://semver.org.
