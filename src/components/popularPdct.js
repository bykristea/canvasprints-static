const products = [
    {
      id: 1,
      name: 'Canvas Prints',
      href: '#',
      imageSrc: 'https://ucarecdn.com/76eb77d9-8588-4694-bd94-ea878d492152/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
      imageAlt: "canvas print",
    },
    {
        id: 2,
        name: 'Pillows',
        href: '#',
        imageSrc: 'https://ucarecdn.com/4931aa55-758a-487a-b0d8-14e3bb574388/-/format/auto/-/preview/3000x3000/-/quality/lighter/8.jpg',
        imageAlt: "Pillows",
      },
      {
        id: 3,
        name: 'Blankets',
        href: '#',
        imageSrc: 'https://ucarecdn.com/8642b0d6-f65e-4597-aaa2-c927235cbedf/-/format/auto/-/preview/3000x3000/-/quality/lighter/60x80.jpeg',
        imageAlt: "Blankets",
      },
      {
        id: 4,
        name: 'Wall Displays',
        href: '#',
        imageSrc: 'https://ucarecdn.com/b474b1a9-0dca-4b73-9f8e-e6fd6f1b23fc/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
        imageAlt: "Wall Displays",
      },
  ]
  
  export default function Popular() {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Best Sellers</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full  aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center lg:w-full lg:h-full"
                  />
                </div>
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-md text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  