# patterns [DEPRECATED]
The City of Philadelphia has released new guidelines surrounding digtal standards that includes design, code, and content. Learn more at <a href="standards.phila.gov">http://standards.phila.gov/</a>.  

This repository will remain intact, but will no longer be updated.

## Local Setup
Phila.gov Patterns uses <a href="http://jekyllrb.com/">Jekyll</a> to generate pattern files. Jekyll requires the following dependencies:

- [Ruby](https://www.ruby-lang.org/en/downloads/)
- [RubyGems](https://rubygems.org/pages/download)
- [Nodejs & npm](https://nodejs.org/en/)

### Getting Started

1. Install Jekyll <code>$ gem install jekyll</code>
2. Install Pygments <code>$ gem install pygments.rb</code>
3. Clone this repository
4. cd into the patterns directory
5. Install additional dependencies <code>$ npm install</code>
6. Start the Jekyll development server <code>$ jekyll serve</code>
7. Navigate to <code>http://localhost:4000/patterns</code>

To watch your local files for changes and update the compressed code being used on the Jekyll site:

8. Open a second Terminal window
9. Navigate into the root of the patterns directory
10. Run <code>$ grunt watch</code>


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

| Site                                                        | Source | Version |
| ----------------------------------------------------------- | ---- |---------|
| [alpha.phila.gov](http://alpha.phila.gov)                   | repo | 1.2.1  |
| [analytics.phila.gov](http://analytics.phila.gov/)          | repo | 1.1.2  |
| [Bullet Voting](http://cityofphiladelphia.github.io/bullet-voting/) | repo |  0.12.1 |
| [Crashboard: Service Monitor Status](http://cityofphiladelphia.github.io/crashboard/) | repo | 1.4.0 |
| [Community Health Explorer](http://cityofphiladelphia.github.io/community-health-explorer/) | repo | 1.4.0 |
| [Jekyll Patterns Template](http://cityofphiladelphia.github.io/patterns-jekyll/) | repo | 1.4.0 |
| [Make a Payment](https://secure.phila.gov/PaymentCenter/AccountLookup/) | repo | 0.1.1 |
| [Metadata Catalog](http://metadata.phila.gov/)              | repo | 0.12.6 |
| [Open Budget](http://www.phila.gov/openbudget/)             | repo | 0.1.1 |
| [Open Contract Data](http://cityofphiladelphia.github.io/contracts/) | repo | 0.2.0 |
| [Phila.gov Patterns](http://cityofphiladelphia.github.io/patterns/)  | repo | 1.2.0 |
| [Property](https://alpha.phila.gov/property/)              | repo | 1.2.1 |
| [ROWS](https://phl.secure.force.com/ROWS/) | repo | 0.8.1 |
| Street Closures | repo | |
| [Trashday](https://alpha.phila.gov/trashday/)              | repo  | 0.12.5 |
