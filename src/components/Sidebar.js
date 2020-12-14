import React from 'react'
import styled from 'styled-components';
import { SidebarData } from './SidebarData';
import {Link} from 'react-router-dom';

function Sidebar() {
    return (
        <SideMenu>
            <ul className="SidebarList">
                { SidebarData.map((val,key)=>(
                    <li 
                        key={key}
                        className="row"
                        id={window.location.pathname === val.link ? "active": ""}
                        onClick={()=>{
                            window.location.pathname = val.link;
                        }}>
                        {/* <div>{val.icon}</div> */}
                         
                        {/* <Link to={val.link}> {val.title} </Link> */}
                        <div>{val.title}</div>

                        {console.log(val.link)}
                        
                        {/* {(val.subMenuItems.length !== 0)?
                            <div className="subMenu">
                                {val.subMenuItems.map((subItems,subIndex)=>(
                                    <div key={subIndex}>{subItems.name}</div>))}
                                    
                            </div>
                            :""
                        } */}
                    </li>
                ))}
            </ul>
        </SideMenu>
    )
}

export default Sidebar;

const SideMenu = styled.div`
    width:30%;
    min-width: 20rem;
    max-width:50rem;
    height: auto;
    margin: 2rem 1rem;
    // background-color: #2F4050;
    color: rgba(0,0,0,0.7);
    font-weight:400;

    .SidebarList{
        height:100%;
        width:100%;  

        .row{
            width:100%;
            min-height:5rem;
            margin: 0 0 1.5rem 0;
            padding: 1rem;
            background-color: white;  
            list-style-type:none;
            font-size: 1.7rem;

            &:hover{
                cursor: pointer;
                background-color: #293846;
                color:white;
            }   
        }

        #active{
            background-color: #293846;
            color: white;
        }
    }   
`