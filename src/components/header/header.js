import React from "react"
import HeaderComponent from "./header-component"
import { connect } from "react-redux"

import './header.css'


const Header = ({}) => {



    
        return (
           <div>
            
            < HeaderComponent
                    
                    />
                    
           </div>
        )
    
}

const mapState = () =>{
    return{
    }
}

const mapDispatch = (dispatch) =>{
    return{
        

    }
}


export default connect(mapState, mapDispatch)(Header) 