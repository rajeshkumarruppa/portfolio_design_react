/*import './index.css'

const TabItem = props => {
  const {tabDetails} = props
  const {displayText} = tabDetails

  return (
    <li className="tab-item-container ">
      <button type="button" className="tab-btn">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
*/

import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
