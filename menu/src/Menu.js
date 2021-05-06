function Menu({ data }) {
  return (
    <div className='menu-container'>
      {data.map((items) => {
        const { id, title, price, img, desc } = items
        return (
          <div className='menu' key={id}>
            <img src={img} alt={title} />
            <div className='details'>
              <div className='menu-detail'>
                <p className='name'>{title}</p>
                <p className='price'>${price}</p>
              </div>
              <hr />
              <p className='info'>{desc}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Menu
