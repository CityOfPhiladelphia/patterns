# patterns

[![Tested on BrowserStack](https://img.shields.io/badge/browserstack-tested-brightgreen.svg?logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACsUlEQVQokVWSTWwUZQCGn2%2B%2Bnd2d7XS7K1v6Q6WAaBoKklAMP0rcNBqWiMET0SskxEBAURLjBfZkPJAQWmOswkVjYnqiKiGALQ0NP0EIcjAg0gottNB26f7Odmfmm89TG31P7%2BF5bo%2FgP%2BvX%2FfKto31bmY3vV2O590VJIlKps5FS0Fv35roRkc06C6xYOLkvt3cyWTmh7wdve402411Jys0GNkWSUxXij%2Bw79S1N2brPTp9ZFJ9lM6%2FKfP5c%2BK7ZOvpGmsHMu9wImnjmgUWeDeavpNUQa25ZKpVq%2FST6wbc9QvccjExP3LhkPdJbxpdnOL%2FnEAMPKzy48gve%2BH2q7Wuo37Sdd2Kn2BW7wusPG%2F1k%2B4sZIzd9d1tYqS3lis2Tne8xWoHJn05g9h1jxa2LfLfKRI4McNPdyG03zMyyaqhWLB41dCT2EZ7Ci8bxUimCuVn0zUuIcBSzPs7fo2OI4Z%2BpuYrn8yEeWwGE1CaD%2BWLaB5Rw8P0SrzTGCSdSaOUz%2BWSSvq96cRNLWW1X0TrAV2CGRMQILWseMySYco78P0O8tDTB7sOf09KxFqvOZslrabr37aVD%2Fo4hBY1ljVCCkGyI9UgrciqWcGm6eoY%2F2iKs27iDzm9%2BoJzP4cZqTJcHmCg9oEv6rJyL4b0gnFD91uVn8zNTszhPU13FAoULP3K9awRpNwOK0swEQVBhveuTGXdJdLRRM4zLAsD5bd%2Bn8t7E8cJfTzF8eNwQ5l6zScmSWAhWFmq8XDVIrm9HJ%2BuqfhDtFgBa98va8OBJOZU74IxO4z93EF4AhsCImpitDcQ6W1ARs%2Br55odW99ffLyaH1sK99vEeUXOOaGe%2BQypFIDQh28IThhJCXvZ1%2BJiV7h35X6uL%2Fp9Z2y8WNiOj25BWp67NDaOMa18MHr%2BdzYpggfsXmkch023E8JUAAAAASUVORK5CYII%3D)](https://www.browserstack.com/)


Phila.gov Pattern Library

## Using Phila.gov Patterns
The patterns CSS includes a customized 24-column grid version of Foundation 6.1.2. Just add a few lines to `<head>`.

### The bare minimum
```
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
<link rel="stylesheet" href="//cityofphiladelphia.github.io/patterns/dist/1.1.3/css/patterns.css">
<script type="text/javascript" src="//cityofphiladelphia.github.io/patterns/dist/1.1.3/js/patterns.min.js"></script>
```

## Local Setup
Phila.gov Patterns uses <a href="http://jekyllrb.com/">Jekyll</a> to generate pattern files.

1. Install Jekyll <code>$ gem install jekyll</code>  
2. Clone this repository
3. cd into the patterns directory
4. <code>$ jekyll serve</code>
5. Navigate to <code>http://localhost:4000/patterns</code>
6. Run <code>$ grunt watch</code>


## Versioning

Phila.gov Patterns will be maintained under the Semantic Versioning guidelines as much as possible. Releases will be numbered with the following format:

{major}.{minor}.{patch}

### Guidelines

1. Breaking backward compatibility bumps the major (and resets the minor and patch)
2. New patterns (without breaking backward compatibility) bumps the minor (and resets the patch)
3. Bug fixes and misc changes bumps the patch


For more information on SemVer, please visit http://semver.org.

## New in 1.0
- Foundation 6!
- Added grunt-postcss to dev process.

### Upgrading to 1.0
There have been a number of markup changes in foundation 6, which developers will need to be aware of when updating to Patterns 1.0. Here is the list of elements to watch out for:
 - [Modal](http://cityofphiladelphia.github.io/patterns/#p-modal)
 - [Navigation (dropdowns)](http://cityofphiladelphia.github.io/patterns/#p-navigation)
 - [Tooltips](http://cityofphiladelphia.github.io/patterns/#p-tooltips)
 - [Breadcrumbs](http://cityofphiladelphia.github.io/patterns/#p-breadcrumbs)
 - [Tabs](http://cityofphiladelphia.github.io/patterns/#p-sub-navigation---vertical-tabs)
 - [Application Headers](http://cityofphiladelphia.github.io/patterns/#p-application-header)
 - [Equal-height divs](http://cityofphiladelphia.github.io/patterns/#p-content-block)


## Sites using the Phila.gov Pattern Portfolio

| Site                                                        | Version |
| ----------------------------------------------------------- |---------|
| [alpha.phila.gov](http://alpha.phila.gov)                   | 1.1.2  |
| [analytics.phila.gov](http://analytics.phila.gov/)          | 1.1.2  |
| [Bullet Voting](http://cityofphiladelphia.github.io/bullet-voting/) |  0.12.1 |
| [Crashboard: Service Monitor Status](http://cityofphiladelphia.github.io/crashboard/) | 0.12.6 |
| [Community Health Explorer](http://cityofphiladelphia.github.io/community-health-explorer/) | 0.12.5 |
| [Make a Payment](https://secure.phila.gov/PaymentCenter/AccountLookup/) | 0.1.1 |
| [Metadata Catalog](http://metadata.phila.gov/)              | 0.12.6 |
| [Open Budget](http://www.phila.gov/openbudget/)             | 0.1.1 |
| [Open Contract Data](http://cityofphiladelphia.github.io/contracts/) | 0.2.0 |
| [Phila.gov Patterns](http://cityofphiladelphia.github.io/patterns/)  | 1.1.2 |
| [Property](https://alpha.phila.gov/property/)               | 1.1.3 |
| ROWS | |
| Street Closures | |
| [Trashday](https://alpha.phila.gov/trashday/)               | 0.12.5 |
