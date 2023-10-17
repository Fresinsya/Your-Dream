import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin"
import AuthLayout from "../components/layout/AuthLayout"

const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
        <FormLogin />
    </AuthLayout>
  )
}

export default LoginPage;