# patterns

Phila.gov Pattern Library

<h2>Using Phila.gov Patterns</h2>
You will need to include the following in the <code><head></code> of your project.
<ol>
  <li>Latest version of the pattern CSS</li>
  <li>Font Awesome <code> <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"></code></li>
</ol>

<h2>Dependences</h2>
<ul>
  <li><a href="http://fortawesome.github.io/Font-Awesome/">Font Awesome</li>
  <li><a href="http://ionicons.com/">ionicons</a> (for alerts)
  <li><a href="#">Modernizr</li>
</ul>

<h2>Local Setup</h2>
Phila.gov Patterns uses <a href="http://jekyllrb.com/">Jekyll</a> to generate pattern files.
<ol>
  <li>Install Jekyll <code>$ gem install jekyll</code>  
  <li>Clone this repository</li>
  <li>cd into the patterns directory</li>
  <li>Run: <code>$ jekyll serve --baseurl ''</code></li>
  <li>Navigate to <code>http://localhost:4000</code>
</ol>

<h2>Versioning</h2>

Phila.gov Patterns will be maintained under the Semantic Versioning guidelines as much as possible. Releases will be numbered with the following format:

<code><major>.<minor>.<patch></code>

<h3>Guidelines</h3>
<ul>
  <li>Breaking backward compatibility bumps the major (and resets the minor and patch)</li>
  <li>New patterns (without breaking backward compatibility) bumps the minor (and resets the patch)</li>
  <li>Bug fixes and misc changes bumps the patch</li>
</ul>

For more information on SemVer, please visit http://semver.org.
