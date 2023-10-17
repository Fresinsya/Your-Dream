import CardProduct from '../components/Fragments/CardProduct'

const dates = [
    {
        id: 1,
        title: "Nike Air Max 270",
        price: '$129,99',
        image: './shoes-1.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deleniti animi omnis culpa est dolores repellendus. Voluptatum necessitatibus fugiat optio esse. Consequatur totam fuga est distinctio maxime cupiditate eveniet maiores.'
    },
    {
        id: 2,
        title: "Nike Air Max 279",
        price: '$139,99',
        image: './shoes-1.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
];

const ProductPage = () => {
    return (
        <div className='flex justify-center gap-3 '>
            {dates.map((data) => {
                return (
                    <CardProduct key={data.id}>
                        <CardProduct.Header title={data.image} />
                        <CardProduct.Body title={data.title}>
                            {data.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={data.price} />
                    </CardProduct>
                )
            })}
        </div>
    )
}

export default ProductPage;