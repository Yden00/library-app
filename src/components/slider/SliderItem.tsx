
const SliderItem = ({ image }:any) => {
  return (
    <li className="min-w-[450px] max-w-[450px] h-[560px] mr-6" key={image.id}>
        <img src={image.path} alt={image.id} />
    </li>
  )
}

export default SliderItem
