export function ImageCard({imgurl, onClick}) {
    return (
        <img alt={imgurl} src={imgurl} onClick={onClick} className='rounded-lg w-full h-full object-cover'/>
    )
}