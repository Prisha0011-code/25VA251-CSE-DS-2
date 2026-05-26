import './App.css'
import React from 'react'
function Props({students}){
    
        conststudentList=[];
        for(let x in students){
            students.push(
                <div key={x} style={{backgroundColor:"#8decfdff", padding:"20px"}}>
                    <h2>{students[x].name}</h2>
                    <h2>{students[x].rollNo}</h2>
                    <h2>{students[x].course}</h2>
            </div>
            
            );                        
        }
        return(
            <div style={{display:"flex", flexWrap:"wrap", gap:"20px"}}>
                {students}
            </div>

    )
}
function Props(props) { 
    return(
        <>
        <div style={{backgroundColor:"#8decfdff", padding:"20px"}}>
            <h2>{props.name}</h2>
            <h2>{props.rollNo}</h2>
            <h2>{props.course}</h2></div>
        </>
    )
} 
export default Props;    