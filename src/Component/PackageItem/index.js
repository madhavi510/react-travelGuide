import './index.css'

const PackageItem = props => {
  const {packageDetails} = props
  const {description, imageUrl, name} = packageDetails

  return (
    <li className="packages-list">
      <img src={imageUrl} className="place-image" alt={name} />
      <h1 className="heading">{name}</h1>
      <p className="content">{description}</p>
    </li>
  )
}

export default PackageItem
