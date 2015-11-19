<footer>
  <section class="container no-gutter">

    <div class="row">
      <div class="col-xs-6 col-sm-2">
        <ul>
          <li><span class="lead"><%= domain %></span></li>
          <li><a href="#/home" translate="home"></a></li>
          <li><a href="#/home/why" translate="why"></a></li>
          <li><a href="#/home/support" translate="support"></a></li>
          <li><a href="#/home/about" translate="about"></a></li>
          <li><a href="#/login" translate="login"></a></li>
          <li><a href="#/signup" translate="signup"></a></li>
        </ul>
      </div>

      <div class="col-xs-6 col-sm-2">
        <ul>
          <li><span class="lead" translate="languaje"></span></li>
          <li><a href="" translate="spanish" ng-click="vm.setLang('es-ES')"></a></li>
          <li><a href="" translate="english" ng-click="vm.setLang('en')"></a></li>
        </ul>
      </div>

      <div class="col-xs-6 col-sm-2">
        <ul>
          <li><span class="lead" translate="contact"></span></li>
          <li><a href="mailto:info@<%= domain %>.com">info@<%= domain %>.com</a></li>
          <li><a href="https://twitter.com/<%= domain %>" target="_blank">Twitter</a></li>
        </ul>
      </div>

      <div class="col-sm-5 col-sm-offset-1 col-xs-12">
        <p class="lead" translate="landing.footer.newsletter.title"></p>
        <newsletter-form></newsletter-form>
      </div>

    </div>

    <hr>

    <div class="col-sm-12">
      <p><span translate="copyright"></span> | <a href="#" translate="legalinfo"></a> | <a href="#/home/privacy" translate="privacy"></a></p>
    </div>

  </section>
</footer>
