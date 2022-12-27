import {Component} from 'react'
import Loader from 'react-loader-spinner'
import PackageItem from '../PackageItem'

import './index.css'

// Replace your code here
class Package extends Component {
  state = {
    dataList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    console.log(response)
    const data = await response.json()
    const formattedData = data.packages.map(eachItem => ({
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      name: eachItem.name,
      description: eachItem.description,
    }))

    this.setState({dataList: formattedData, isLoading: false})
  }

  render() {
    const {dataList, isLoading} = this.state

    return (
      <div className="app-container">
        <h1 className="title">Travel Guide</h1>
        <>
          {isLoading ? (
            <div testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            <ul className="travelGuides-list">
              {dataList.map(eachList => (
                <PackageItem key={eachList.id} packageDetails={eachList} />
              ))}
            </ul>
          )}
        </>
      </div>
    )
  }
}

export default Package
