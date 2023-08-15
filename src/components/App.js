import React from 'react'

const App = () => {
  return (
    <div id="main">
               {/* Do not remove the main div */}
               <ol key="realtiveList">
                  <li key="relativeListItem1">Shiva</li>
                  <li key="relativeListItem2">Vishnu</li>
                  <li key="relativeListItem3">Parvathi</li>
                  <li key="relativeListItem4">Maheshwara</li>
               </ol>
    </div>
  )
}

export default App
