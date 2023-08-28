import React, { Component } from "react";


export function WithLogging(WrappedComponent){
     
    console.log(`BooklIst Method called`)
     class Wrapper extends Component{
    
        constructor(props){
    
            super(props)

            
    
        }
    
    
        render(){
         return(<div>
            {
                
                    <WrappedComponent books={this.props.books}  key={this.props.title}/>
                 
                }
            
            
         </div>)
    
    
        }
    }

    return Wrapper

        
}