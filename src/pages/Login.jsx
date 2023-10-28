import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { Logo, FormRow } from '../components'
const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>login</h4>
        <FormRow name="email" type="email" defaultValue="test@test.com" />
        <FormRow name="password" type="password" defaultValue="secret" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <button type="submit" className="btn btn-block">
          Explorer the app
        </button>
        <p>
         Not a member yet ?
          <Link to="/register" className="member-btn">
            register
          </Link>
        </p>
      </form>
    </Wrapper>
  )
}
export default Login
