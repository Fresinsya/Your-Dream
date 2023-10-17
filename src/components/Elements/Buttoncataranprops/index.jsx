
const ButtonPro2 = (props) => {
    const {children = "props2", variant = "bg-blue-300"} = props;
    return (
      <button
        className={`h-10 px-6 font-semibold rounded-xl ${variant} `}
        type="submit"
        
      > {children}
      </button>
    );
  }
export default ButtonPro2;


