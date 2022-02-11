import { useState } from 'react'
import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/solid'
import {  MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline'

const product = {
  name: 'Cabinet and frames, anonymous, 1705 - 1775 Canvas Print',
  price: '$140',
  rating: 4,
  images: [
    {
        id: 1,
        name: 'Grey Couch on white wall',
        src: 'https://cdn.shopify.com/s/files/1/0257/4522/7828/products/RP-P-2015-39_landscape-1.jpg?v=1630092514',
        alt: 'Grey couch on white wall',
      },
    {
      id: 2,
      name: 'Shiplap View',
      src: 'https://cdn.shopify.com/s/files/1/0257/4522/7828/products/RP-P-2015-39_landscape-2.jpg?v=1630092514',
      alt: 'Picture on shiplap.',
    },
    {
        id: 3,
        name: 'Blue Couch',
        src: 'https://cdn.shopify.com/s/files/1/0257/4522/7828/products/RP-P-2015-39_landscape-3.jpg?v=1630092514',
        alt: 'Picture over blue coach, neutral wall.',
      },
    // More images...
  ],
  sizes: [
    { id: '11x14', name: '11x14',bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    { id: '12x18', name: '12x18', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    { id: '18x22', name: '18x22', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    { id: '18x24', name: '18x24', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    { id: '24x36', name: '24x36', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },

  ],
  description: `
    <p>In the middle a cupboard with drawers and seed ornaments. Left and right seed ornaments and details of geornamented crowns of mirror frames. Publisher number 100.</p>
  `,
  details: [
    {
      name: 'Features',
      items: [
        '🇺🇸 100% Made In America',
        '✈️ Next Day Shipping Available',
        '💰 100% Money Back Guarantee',
        '🚚 Free Shipping on Orders over $150 ',
        '💳 Several Payment Options',
      ],
      featured: [
        { name: 'Usage Rights', href: 'https://www.rijksmuseum.nl/en/research/conduct-research/data/policy' },
      ],
    },
   
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Product() {
  const [selectedColor, setSelectedColor] = useState(product.sizes[0])

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image gallery */}
          <Tab.Group as="div" className="items-center flex flex-col-reverse">
            {/* Image selector */}
            <div className=" mt-6 w-3/4 max-w-2xl mx-auto sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-3 gap-6">
                {product.images.map((image) => (
                  <Tab
                    key={image.id}
                    className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                  >
                    {({ selected }) => (
                      <>
                        <span className="sr-only">{image.name}</span>
                        <span className="absolute inset-0 rounded-md overflow-hidden">
                          <img src={image.src} alt="" className="w-full  object-center object-cover" />
                        </span>
                        <span
                          className={classNames(
                            selected ? 'ring-pink' : 'ring-transparent',
                            'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels className=" w-3/4 aspect-w-4/5 aspect-h-1">
              {product.images.map((image) => (
                <Tab.Panel key={image.id}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-center object-cover sm:rounded-lg"
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">{product.price}</p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.rating > rating ? 'text-pink' : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{product.rating} out of 5 stars</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                className="text-base text-gray-700 space-y-6"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <form className="mt-6 ">
              {/* sizes */}
              <div>
                <h3 className="text-sm text-gray-600">Size</h3>

                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2 ">
                  <RadioGroup.Label className="sr-only" >Choose a size</RadioGroup.Label>
                  <div className="flex items-center justify-between ">
                    {product.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        className={({ active, checked }) =>
                          classNames(
                            size.selectedColor,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            '-m-0.5 relative p-0.5  flex items-center justify-center cursor-pointer focus:outline-none'
                          )
                        }
                      >
                        <RadioGroup.Label as="h2" >
                          {size.name}
                        </RadioGroup.Label>
                      
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div className="mt-10 flex space-x-10  sm:flex-col1">
                <button
                  type="submit"
                  className="max-w-xs flex-1 bg-pink border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-darkPink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-pink sm:w-full"
                >
                  Add to bag
                </button>

                <button
                  type="submit"
                  className=" max-w-xs flex-1 bg-pink border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-darkPink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-pink sm:w-full"
                >
                  Create Your Own
                </button>
              </div>
            </form>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="border-t divide-y divide-gray-200">
                {product.details.map((detail) => (
                  <div key={detail.name}>
                    
                      <>
                        <h3>
                        
                            <span
                              className=" text-darkPink text-sm font-medium"
                            >
                              {detail.name}
                            </span>
                        
                        </h3>
                        <div className="pb-6 prose prose-sm">
                          <ul >
                            {detail.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                         <a href={'https://www.rijksmuseum.nl/en/research/conduct-research/data/policy'} className="text-darkPink  hover:text-gray-800">
                                                      Usage Rights
                                                    </a>
                        </div>
                      </>
                    
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
