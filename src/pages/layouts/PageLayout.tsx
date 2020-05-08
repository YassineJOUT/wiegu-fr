
import React, { ReactNode } from 'react';



type Props = {
  children: ReactNode
}

class PageLayout extends React.Component<Props>  {
  state = {
		collapse: false
	};

setCollaps = () => {
  this.setState(
    {
      collapse: !this.state.collapse
    }
  )
}
render = () =>{
  
  return (
    <div>
       
    </div>
  )
}
    
}
export default PageLayout;
