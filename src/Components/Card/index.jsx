const Card = () => {
    return (
        <div className='bg-white cursor-pointer w-56 h-60'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute'>Electronics</span>
                <img src="" alt="" />
                <div>+</div>
            </figure>
            <p>
                <span>Headphones</span>
                <span>$300</span>
            </p>
        </div>
    )
}

export default Card
