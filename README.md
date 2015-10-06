# patterns

[![Tested on BrowserStack](https://img.shields.io/badge/browserstack-tested-brightgreen.svg?logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACsUlEQVQokVWSTWwUZQCGn2%2B%2Bnd2d7XS7K1v6Q6WAaBoKklAMP0rcNBqWiMET0SskxEBAURLjBfZkPJAQWmOswkVjYnqiKiGALQ0NP0EIcjAg0gottNB26f7Odmfmm89TG31P7%2BF5bo%2FgP%2BvX%2FfKto31bmY3vV2O590VJIlKps5FS0Fv35roRkc06C6xYOLkvt3cyWTmh7wdve402411Jys0GNkWSUxXij%2Bw79S1N2brPTp9ZFJ9lM6%2FKfP5c%2BK7ZOvpGmsHMu9wImnjmgUWeDeavpNUQa25ZKpVq%2FST6wbc9QvccjExP3LhkPdJbxpdnOL%2FnEAMPKzy48gve%2BH2q7Wuo37Sdd2Kn2BW7wusPG%2F1k%2B4sZIzd9d1tYqS3lis2Tne8xWoHJn05g9h1jxa2LfLfKRI4McNPdyG03zMyyaqhWLB41dCT2EZ7Ci8bxUimCuVn0zUuIcBSzPs7fo2OI4Z%2BpuYrn8yEeWwGE1CaD%2BWLaB5Rw8P0SrzTGCSdSaOUz%2BWSSvq96cRNLWW1X0TrAV2CGRMQILWseMySYco78P0O8tDTB7sOf09KxFqvOZslrabr37aVD%2Fo4hBY1ljVCCkGyI9UgrciqWcGm6eoY%2F2iKs27iDzm9%2BoJzP4cZqTJcHmCg9oEv6rJyL4b0gnFD91uVn8zNTszhPU13FAoULP3K9awRpNwOK0swEQVBhveuTGXdJdLRRM4zLAsD5bd%2Bn8t7E8cJfTzF8eNwQ5l6zScmSWAhWFmq8XDVIrm9HJ%2BuqfhDtFgBa98va8OBJOZU74IxO4z93EF4AhsCImpitDcQ6W1ARs%2Br55odW99ffLyaH1sK99vEeUXOOaGe%2BQypFIDQh28IThhJCXvZ1%2BJiV7h35X6uL%2Fp9Z2y8WNiOj25BWp67NDaOMa18MHr%2BdzYpggfsXmkch023E8JUAAAAASUVORK5CYII%3D)](https://www.browserstack.com/)


Phila.gov Pattern Library

## Using Phila.gov Patterns
The patterns CSS includes a customized 24-column grid version of Foundation 5.5.2. Just add a few lines to `<head>`. For a sticky footer, also include the patterns.min.js file.

### The bare minimum
```
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
<link rel="stylesheet" href="//cityofphiladelphia.github.io/patterns/dist/0.11.1/css/patterns.css">
<script type='text/javascript' src='//cityofphiladelphia.github.io/patterns/dist/0.11.1/js/patterns.min.js'></script>
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
