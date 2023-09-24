import React from "react";

const HeaderComponent = ({ menuActiv, swipeRightMenu}) =>{


  return(

    <header>
    <div className="inner-header">
       
    </div>
    <div {...swipeRightMenu} className={`wrap-menu ${menuActiv ? 'active' : ''}`}>
    
      
    </div>
</header>
  )
}

export default HeaderComponent