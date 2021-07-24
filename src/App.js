import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  return (
    <div class="container-fluid">
      <div class="container text-center py-5">
        <h1 class="display-4">Pricing</h1>
      </div>

      <div class="container text-center">
        <div class="row row-cols-1 row-cols-md-3">
          <div class="col mb-4">
            <div class="card shadow-sm">
              <div class="card-header">
                  <h4>Free</h4>
              </div>
              <div class="card-body">
        
                  <h1 class="my-0 font-weight-normal">₹0 <small class="text-muted">/month</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                      <li>Single User</li>
                      <li>5 GB Storage</li>
                      <li>Unlimited Public Projects</li>
                      <li>Community Access</li>
                      <li class="text-muted">Unlimited Private Projects</li>
                      <li class="text-muted">Dedicated Phone Supports</li>
                      <li class="text-muted">Free Subdomain</li>
                      <li class="text-muted">Monthly Status Reports</li>
                    </ul>
                    <button class="btn btn-primary btn-lg btn-block">Sign Up</button>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card shadow-lg">
              <div class="card-header">
                  <h4>Plus</h4>
              </div>
              <div class="card-body">
        
                  <h1 class="my-0 font-weight-normal">₹249 <small class="text-muted">/month</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                      <li>Single User</li>
                      <li>500 GB Storage</li>
                      <li>Unlimited Public Projects</li>
                      <li>Community Access</li>
                      <li>Unlimited Private Projects</li>
                      <li>Dedicated Phone Supports</li>
                      <li class="text-muted">Free Subdomain</li>
                      <li class="text-muted">Monthly Status Reports</li>
                    </ul>
                    <button class="btn btn-primary btn-lg btn-block">Sign Up</button>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card shadow-sm">
              <div class="card-header">
                  <h4>Pro</h4>
              </div>
              <div class="card-body">
        
                  <h1 class="my-0 font-weight-normal">₹499 <small class="text-muted">/month</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                      <li>Single User</li>
                      <li>1 TB Storage</li>
                      <li>Unlimited Public Projects</li>
                      <li>Community Access</li>
                      <li>Unlimited Private Projects</li>
                      <li>Dedicated Phone Supports</li>
                      <li>Free Subdomain</li>
                      <li>Monthly Status Reports</li>
                    </ul>
                    <button class="btn btn-primary btn-lg btn-block">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
