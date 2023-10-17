const Label = (props) => {
    const { htmlFor, children} = props;
    return (
        <label
            htmlFor={htmlFor}
            className='block mb-2 text-sm text-slate-500'>
            
            {children}
        </label>
    )
}
export default Label;