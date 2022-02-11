const products = [
    {
      id: 1,
      name: '8x8 Canvas Print',
      href: '#',
      imageSrc: 'https://ucarecdn.com/c4926435-fb05-456c-94a2-e55040f93f1e/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
      imageAlt: "8x8 canvas print",
    },
    {
        id: 2,
        name: '12x18 Landscape Canvas Print',
        href: '#',
        imageSrc: 'https://ucarecdn.com/f070328f-6977-46b7-b2e8-bea10edc8b38/-/format/auto/-/preview/480x480/-/quality/lighter/',
        imageAlt: "12x18 Landscape canvas print",
      },
      {
        id: 3,
        name: '11x14 Landscape Canvas Print',
        href: '#',
        imageSrc: 'https://ucarecdn.com/d57db2a9-3f39-4f26-9659-dd593d5cdf29/-/format/auto/-/preview/480x480/-/quality/lighter/',
        imageAlt: "11x14 Landscape canvas print",
      },
      {
        id: 4,
        name: '24x18 Portrait Canvas Print',
        href: '#',
        imageSrc: 'https://ucarecdn.com/cbbbc61c-db95-4d3b-9389-e98984c08cfb/-/format/auto/-/preview/480x480/-/quality/lighter/',
        imageAlt: "24x18 Portrait canvas print",
      },
  ]
  
  export default function Related() {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80  aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-scale-down lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
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
  