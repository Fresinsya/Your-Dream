import { Link } from "react-router-dom";
import FormRegister from "../components/Fragments/FormRegister"
import AuthLayout from "../components/layout/AuthLayout"

const RegisterPage = () => {
  return (
    <AuthLayout title="Register" type="register">
        <FormRegister />
    </AuthLayout>
  )
}

export default RegisterPage;