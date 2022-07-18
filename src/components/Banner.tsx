import banner from '../assets/building-banner.jpg'

interface BannerProps {
   
}

export function Banner(prop : BannerProps) {
    return(
        <div className='flex flex-col justify-center bg-banner bg-cover bg-center w-full h-[360px] text-base-100 px-16'>
            <h1 className='font-headings text-[64px] leading-tight uppercase'>Dream home for sale</h1>
            <p className='w-[492px] text-xl leading-tight'>Want to find a home? We are ready to help you find one that your lifestyle and needs</p>
        </div>
    )
}