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

              <li class="dropdown" ng-class="{active: vm.isActive('account')}">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  <span>{{vm.username}}</span>
                  <svg class="icon-arrow-down-small">
                    <use xlink:href="/images/icons.svg#icon-arrow-down-small"></use>
                  </svg>
                </a>
                <ul class="dropdown-menu">
                  <li><a href="#/account" data-toggle="collapse" data-target=".navbar-collapse.in" translate="account"></a></li>
                  <li><a href ng-click="vm.logout()" data-toggle="collapse" data-target=".navbar-collapse.in" translate="logout"></a></li>
                </ul>
              </li>

            </ul>
          </div>
        </div>

      </div>

    </div>
  </nav>
</header>
