import {star} from '../assets/icons'


function popularProductCard({imgURL, name, price}) {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt="name" className="w-[280px] h-[280px]"/>
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating"  height={24} width={24}/>
      </div>
      <p className='font-monserrat text-xl leading-normal text-slate-gray'>(4.5)</p>
      <h3 className='text-2xl mt-2 font-semibold font-palanquin leading-normal'>{name}</h3>
      <p className='text-2xl mt-2 font-semibold font-monserrat text-coral-red leading-normal'>{price}</p>
    </div>
  )
}

export default popularProductCard
