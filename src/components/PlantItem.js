import "../style/PlantItem.css"
import CareScale from "./CareScale"

function PlantItem({name,cover,id,light,water}){
    return (
		<li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

function handleClick(plantName){
	alert(`On a cliqué sur ${plantName}`)
}

export default PlantItem
export {handleClick}