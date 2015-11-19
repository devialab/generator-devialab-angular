<header>
  <nav class="navbar navbar-inverse navbar-fixed-top bg-inverse">
    <div class="container">

      <div class="row no-gutter">

        <div class="col-xs-4 col-sm-3 col-md-3">
          <a class="navbar-brand" href="#/" data-toggle="collapse" data-target=".navbar-collapse.in">
            <img src="/images/logo2x.png" class="img-responsive" width="176" height="53" alt="iQapla">
            <span class="visuallyhidden"><%= domain %></span>
          </a>
        </div>

        <!-- Only XS view -->
        <div class="col-xs-8">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only" translate="header.navigation.toggle"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
        </div>

        <div class="col-xs-12 col-sm-9 col-md-9">
          <div class="collapse navbar-collapse" id="navbar">
            <ul class="nav navbar-nav navbar-right">
              <li class="nav-item" ng-class="{active: vm.isActive('home/why')}">
                <a href="#/home/why" data-toggle="collapse" data-target=".navbar-collapse.in">
                  <span translate="why"></span>
                </a>
              </li>
              <li class="nav-item" ng-class="{active: vm.isActive('home/support')}">
                <a href="#/home/support" data-toggle="collapse" data-target=".navbar-collapse.in">
                  <span translate="support"></span>
                </a>
              </li>
              <li class="nav-item" ng-class="{active: vm.isActive('home/about')}">
                <a href="#/home/about" data-toggle="collapse" data-target=".navbar-collapse.in">
                  <span translate="about"></span>
                </a>
              </li>
              <li class="dropdown dropdown-primary hidden-xs">
                <a href="#" class="dropdown-toggle with-arrow" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  <span translate="login"></span>
                </a>
                <div class="dropdown-menu dropdown-lg dropdown-form">
                  <login-form></login-form>
                </div>
              </li>
              <li class="vertical-divider hidden-xs"></li>
              <li class="dropdown dropdown-primary hidden-xs">
                <a href="#" class="dropdown-toggle with-arrow" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" translate="signup"></a>
                <div class="dropdown-menu dropdown-lg dropdown-form">
                  <signup-form></signup-form>
                </div>
              </li>
              <li class="divider visible-xs-block"></li>
              <li class="visible-xs-block"><a href="#/login" translate="login"></a></li>
              <li class="visible-xs-block"><a href="#/signup" translate="signup"></a></li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  </nav>
</header>
