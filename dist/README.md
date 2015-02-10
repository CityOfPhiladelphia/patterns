# patterns

Phila.gov Pattern Library

## Using Phila.gov Patterns
You will need to include the following in the head of your project.

### The bare minimum
1. Latest version of the pattern CSS located at <code>/dist/css/patterns.css</code>
    - This includes a customized version of Foundation 5
2. Font Awesome

### Also recommended:
- <a href="http://ionicons.com/">ionicons</a> (for alerts)
- <a href="http://modernizr.com/">Modernizr</a> (for those sad, old browsers)

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
