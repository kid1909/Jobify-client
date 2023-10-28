import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { Logo, FormRow } from '../components'

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>register</h4>
        <FormRow name="name" type="text" defaultValue="john" />
        <FormRow
          name="lastName"
          type="text"
          defaultValue="smith"
          labelText="Last Name"
        />
        <FormRow name="location" type="text" defaultValue="earth" />
        <FormRow name="email" type="email" defaultValue="test@test.com" />
        <FormRow name="password" type="password" defaultValue="secret" />

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member ?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  )
}
export default Register
