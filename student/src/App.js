import { BrowserRouter, Link,Route,Routes } from "react-router-dom";
import AddStudent from "./AddStudent";
import ViewStudent from "./ViewStudent";
import UpdateStudent from "./UpdateStudent";
function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
              <Link className="navbar-brand" href="#">
                <img
                  src="https://i.pinimg.com/736x/7b/61/a5/7b61a52fedb643ae0121ccbb3ef87f65.jpg"
                  alt="Bootstrap"
                  className="rounded me-1"
                  width="30"
                  height="30"
                />
                Student Application
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/add"
                    >
                      Add Student
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/view"
                    >
                      View Student
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <Routes>
          <Route path="/add" element={<AddStudent />} />
          <Route path="/view" element={<ViewStudent />} />
          <Route
            path="/student/updateStudent/:std_id"
            element={<UpdateStudent />}
          />
          <Route path="*" element={<ViewStudent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
