import Button from "../Elements/Button"

const CardProduct = (props) => {
    const {children } = props;
    return (
        <div className='w-full max-w-sm bg-gray-600 border-gray-200 rounded-lg shadow flex flex-col justify-between'>
            {children}
        </div>
    )
};

const Header = (props) => {
    const {title} = props;
    return (
        <a href="#">
            <img
                src={title}
                alt="product"
                className='p-8 rounded-t-lg'
            />
        </a>
    )
};

const Body = (props) => {
    const {title, children} = props;
    return (
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className='text-xl font-semibold text-white'>
                    {title}
                </h5>
                <p className="text-m text-white">
                    {children}
                </p>
            </a>
        </div>
    )
};

const Footer = (props) => {
    const {price} = props;
    return (
        <div className="flex justify-between items-center px-5 pb-5">
            <span className="text-white font-bold text-xl">{price}</span>
            <Button clasname="bg-blue-600">Add To Cart</Button>
        </div>
    )
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;