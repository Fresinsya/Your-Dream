import Button from '../Elements/Button'
import FormInput from '../Elements/Input'

const FormLogin = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value
        console.log(email)
        const password = event.target.password.value 
        console.log('Form Submitted');
    }
    return (
        <form onSubmit={handleSubmit}>
            <FormInput label='Email' name='email' type='email' placeholder="example@gmail.com" />
            <FormInput label='Password' name='password' type='password' placeholder="********" />
            <Button classname="bg-blue-600 text-white w-full">Login</Button>
        </form>
    )
}

export default FormLogin;