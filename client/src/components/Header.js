import { useAuth } from "../contexts/authContext"

export default function Header(){

    const {user , logoutUser} = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand px-1 fs-3 fw-bold" href="/home">Quizlet</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-end px-3 " id="navbarSupportedContent">
    {user ? 
    <ul className="navbar-nav mr-auto gap-2">
    <li className="nav-item active">
      <a className="nav-link" href="#">Home</a>
    </li>

    <li className="nav-item active">
      <a className="nav-link" href="/profile">Profile</a>
    </li>

    <li className="nav-item">
      <a className="nav-link bg-danger btn" onClick={(e)=> logoutUser()}>Logout</a>
    </li>      
  </ul>
    :  
    <ul className="navbar-nav mr-auto gap-2">
      <li className="nav-item active">
        <a className="nav-link" >Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link bg-success btn" href="/login">Login</a>
      </li>      
    </ul>}
    
  </div>
</nav>
    )

}