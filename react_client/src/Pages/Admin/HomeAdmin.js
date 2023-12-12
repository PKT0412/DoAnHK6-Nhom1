const HomeAdmin = () => {
  return (
    <>
      <div>
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
          {/* Navbar Brand*/}
          <a className="navbar-brand ps-3" href="index.html">
            Quản lý MTD Store
          </a>
          {/* Sidebar Toggle*/}
          <button
            className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
            id="sidebarToggle"
            href="/Admin"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Navbar Search*/}
          <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Search for..."
                aria-label="Search for..."
                aria-describedby="btnNavbarSearch"
              />
              <button
                className="btn btn-primary"
                id="btnNavbarSearch"
                type="button"
              >
                <i className="fas fa-search" />
              </button>
            </div>
          </form>         
        </nav>

        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <nav
              className="sb-sidenav accordion sb-sidenav-dark"
              id="sidenavAccordion"
            >
              <div className="sb-sidenav-menu">
                <div className="nav">
                  <div className="sb-sidenav-menu-heading">Hệ thống</div>
                  <a className="nav-link" href="/Admin">
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-home" />
                    </div>
                    Trang chủ
                  </a>
                 
                  <div className="sb-sidenav-menu-heading">
                    Hệ thống quản trị
                  </div>  
                  <a className="nav-link" href="/Admin/Brand">
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-table" />
                    </div>
                    Hãng điện thoại
                  </a>
                  <a className="nav-link" href="/Admin/Product">
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-table" />
                    </div>
                    Sản Phẩm
                  </a>                  
                  <a className="nav-link" href="tables.html">
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-table" />
                    </div>
                    Đơn hàng
                  </a>
                  <a className="nav-link" href="tables.html">
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-table" />
                    </div>
                    Khách hàng
                  </a>
                  <a className="nav-link" href="tables.html">
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-table" />
                    </div>
                    Khuyến mãi
                  </a>
                </div>
              </div>

              <div className="sb-sidenav-footer">
                <div className="small">Logged in as:</div>
                MTD Store
              </div>
            </nav>
          </div>

          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid px-4">
                <h1 className="mt-4">Bảng thống kê</h1>
                <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>
                <div className="row">
                  <div className="col-xl-3 col-md-6">
                    <div className="card bg-primary text-white mb-4">
                      <div className="card-body">Primary Card</div>
                      <div className="card-footer d-flex align-items-center justify-content-between">
                        View Details
                        <div className="small text-white">
                          <i className="fas fa-angle-right" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="card bg-warning text-white mb-4">
                      <div className="card-body">Warning Card</div>
                      <div className="card-footer d-flex align-items-center justify-content-between">
                        View Details
                        <div className="small text-white">
                          <i className="fas fa-angle-right" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="card bg-success text-white mb-4">
                      <div className="card-body">Success Card</div>
                      <div className="card-footer d-flex align-items-center justify-content-between">
                        View Details
                        <div className="small text-white">
                          <i className="fas fa-angle-right" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="card bg-danger text-white mb-4">
                      <div className="card-body">Danger Card</div>
                      <div className="card-footer d-flex align-items-center justify-content-between">
                        View Details
                        <div className="small text-white">
                          <i className="fas fa-angle-right" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               
                <div className="card mb-4">
                  <div className="card-header">
                    <i className="fas fa-table me-1" />
                    DataTable Example
                  </div>
                  <div className="card mb-8">
                    <table className="table table-light">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Position</th>
                          <th>Office</th>
                          <th>Age</th>
                          <th>Start date</th>
                          <th>Salary</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th>Name</th>
                          <th>Position</th>
                          <th>Office</th>
                          <th>Age</th>
                          <th>Start date</th>
                          <th>Salary</th>
                        </tr>
                      </tfoot>
                      <tbody>
                        <tr>
                          <td>Tiger Nixon</td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>61</td>
                          <td>2011/04/25</td>
                          <td>$320,800</td>
                        </tr>
                        <tr>
                          <td>Garrett Winters</td>
                          <td>Accountant</td>
                          <td>Tokyo</td>
                          <td>63</td>
                          <td>2011/07/25</td>
                          <td>$170,750</td>
                        </tr>
                        <tr>
                          <td>Ashton Cox</td>
                          <td>Junior Technical Author</td>
                          <td>San Francisco</td>
                          <td>66</td>
                          <td>2009/01/12</td>
                          <td>$86,000</td>
                        </tr>
                        <tr>
                          <td>Cedric Kelly</td>
                          <td>Senior Javascript Developer</td>
                          <td>Edinburgh</td>
                          <td>22</td>
                          <td>2012/03/29</td>
                          <td>$433,060</td>
                        </tr>
                        <tr>
                          <td>Airi Satou</td>
                          <td>Accountant</td>
                          <td>Tokyo</td>
                          <td>33</td>
                          <td>2008/11/28</td>
                          <td>$162,700</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </main>
            <footer className="py-4 bg-light mt-auto">
              <div className="container-fluid px-4">
                <div className="d-flex align-items-center justify-content-between small">
                  <div className="text-muted">
                    Copyright © Your Website 2021
                  </div>
                  <div></div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAdmin;
