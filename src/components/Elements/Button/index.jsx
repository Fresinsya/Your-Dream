const Button = (props) => {
    const {children, classname = "bg-blue-600"} = props;
    return (
      <button
        className={`h-10 px-6 font-semibold rounded-xl ${classname} `}
        type="submit"
        onClick={() => console.log("Button Clicked")}
      > {children}
      </button>
    );
  }
export default Button;  