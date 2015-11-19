<!doctype html>
<html class="no-js">

<head>

  <title><%= appName %></title>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

  <!-- Standard html meta tags -->
  <meta name="author" content="<%= appName %>">
  <meta name="description" content="<%= description %>">
  <meta name="keywords" content="<%= tags %>">
  <meta name="application-name" content="<%= appName %>">
  <meta name="copyright" content="<%= appName %>">

  <!-- Dublin core -->
  <meta name="DCTERMS.rightsHolder" content="<%= appName %>">
  <meta name="DCTERMS.Title" content="corejs boilerplate">
  <meta name="DCTERMS.Creator" content="<%= appName %>">
  <meta name="DCTERMS.Subject" content="<%= tags %>">
  <meta name="DCTERMS.Description" content="<%= description %>">
  <meta name="DCTERMS.Publisher" content="<%= appName %>">
  <meta name="DCTERMS.Language" content="en">

  <!-- Schema.org markup for Google+ -->
  <meta itemprop="name" content="<%= appName %>">
  <meta itemprop="description" content="<%= description %>">
  <meta itemprop="url" content="http://www.<%= appName %>.com/">
  <meta itemprop="image" content="images/icons/android-icon-192x192.png">
  <meta itemprop="author" content="<%= appName %>">
  <meta itemprop="datePublished" content="28-10-2015">
  <meta itemprop="operatingSystems" content="Windows, Linux, Mac OS">
  <meta itemprop="applicationCategory" content="<%= tags %>">
  <meta itemprop="softwareVersion" content="0.0.1">
  <meta itemprop="browserRequirements" content="HTML5, Google Chrome, JavaScript">

  <!-- Twitter Card data -->
  <meta name="twitter:card" content="images/icons/android-icon-192x192.png">
  <meta name="twitter:site" content="@<%= appName %>">
  <meta name="twitter:creator" content="@<%= appName %>">
  <meta name="twitter:title" content="<%= appName %>">
  <meta name="twitter:description" content="<%= description %>">
  <!-- La imagen debe ser de menos de 1Mb, y como mínimo de 280x150 en el ejemplo de twitter usan una de 480 x 270 (para la summary card with large image)-->
  <meta name="twitter:image:src" content="images/landing/bg-top.jpg">

  <!-- Open Graph data -->
  <meta property="og:title" content="<%= appName %>">
  <meta property="og:type" content="website">
  <meta property="og:url" content="http://www.<%= appName %>.com/">
  <!-- La imagen debe estar a 1200 x 630 -->
  <!-- <meta property="og:image" content="img/common/img_1200x630.png"> -->
  <meta property="og:description" content="<%= description %>">
  <meta property="og:site_name" content="<%= appName %>">

  <!-- Icons -->
  <link rel="apple-touch-icon" sizes="57x57" href="images/icons/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="images/icons/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="images/icons/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="images/icons/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="images/icons/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="images/icons/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="images/icons/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="images/icons/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="images/icons/apple-icon-180x180.png">
  <link rel="shortcut icon" type="image/png" sizes="192x192" href="images/icons/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="images/icons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="images/icons/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="images/icons/favicon-16x16.png">
  <link rel="manifest" href="images/icons/manifest.json">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
  <meta name="theme-color" content="#ffffff">

  <link rel="prefetch" href="json/lang/es-ES.json" />


  <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
  <!-- build:css(.) styles/vendor.css -->
  <!-- bower:css -->
  <!-- endbower -->
  <!-- endbuild -->
  <!-- build:css(.tmp) styles/main.css -->
  <link rel="stylesheet" type="text/css" href="styles/main.css" />
  <!-- endbuild -->

</head>

<body ng-app="app">
  <!--[if lt IE 10]>
    <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->

  <!-- Add your site or application content here -->

  <main ui-view></main>

  <!-- build:js(.) scripts/vendor.js -->
  <!-- bower:js -->
  <!-- endbower -->
  <script src="vendor/ie10-viewport-bug-workaround.js"></script>
  <!-- endbuild -->

  <!-- build:js({.,.tmp,app}) scripts/scripts.js -->
  <script src="app.const.js"></script>
  <script src="app.defaultLang.js"></script>
  <!-- include: "type": "js", "files": ["*.js", "modules/**/*.module.js"] -->
  <!-- include: "type": "js", "files": ["modules/**/*.js", "!modules/**/*.module.js"] -->
  <!-- endbuild -->
</body>

</html>
