import React from 'react';
import styled from 'styled-components';
import {Switch, Route} from 'react-router-dom';

import Home from './../pages/Home';
import MyProjects from '../pages/MyProjects';
import MyTasks from './../pages/MyTasks';
import ReportGeneration from './../pages/ReportGeneration';
import ProjectTracker from './../pages/ProjectTracker';
import UserManagement from './../pages/UserManagement';



function MainPage() { 

    // const path = [
    //     {link:"/MyProjects", components:"MyProjects"},
    //     {link: "/Mytasks", components:"Mytasks"},
    //     {link:"/ReportGeneration", components:"ReportGeneration"},
    //     {link:"/ProjectTracker", components:"ProjectTracker"}
    // ]

    return (
        <DataSection>
            <div className="navbar">
                <a href="/home">Home</a>
                <a href="/profile">Profile</a>
                <a href="/service">Service</a>
            </div>
            
            <div className="displayData">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/MyProjects" component={MyProjects} />
                    <Route path="/MyTasks" component={MyTasks} />
                    <Route path="/ReportGeneration" component={ReportGeneration} />
                    <Route path="/ProjectTracker" component={ProjectTracker} />
                    <Route path="/UserManagement" component={UserManagement} />
                    
                    {/* {path.map((item)=>(
                        console.log(item.components)
                    ))} */}
                </Switch>
            </div>
        </DataSection>
    )
}

export default MainPage;

const DataSection = styled.div`
    width:100%;
    height: auto;
    margin: 2rem 1rem;
    background-color: white;
    
    .navbar{
        height:5rem;
        width:100%;
        // background-color:yellow;
        display:flex;
        justify-content:start;
        align-items:center;
        border-bottom: 1px solid rgba(0,0,0,0.1);

        a{
            display:block;
            text-decoration:none;
            padding: 0.5rem 1.5rem;
            margin: 0 1rem;
            color:rgba(0,0,0,0.8);
            font-size: 1.8rem;
            font-weight:400;

            &: hover{
                background-color: #eeeeee;
                border-radius: 0.5rem;   

                color:blue;
            }
        }
    }

    .displayData{
        padding:2rem;
        text-align: center;
    }
    

`
