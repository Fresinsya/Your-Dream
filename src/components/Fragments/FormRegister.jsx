import Button from '../Elements/Button'
import FormInput from '../Elements/Input'

const FormRegister = () => {
    return (
        <form action="">
            <FormInput label='Name' name='name' type='text' placeholder="entry your name in here ..." />
            <FormInput label='Email' name='email' type='email' placeholder="example@gmail.com" />
            <FormInput label='Password' name='password' type='password' placeholder="********" />
            <FormInput label='Confirm Password' name='confirmPassword' type='password' placeholder="********" />
            <Button classname="bg-blue-600 text-white w-full">Login</Button>
        </form>
    )
}

export default FormRegister;