import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.Tech Computer Science and Engineering" where="Lovely Professional University" from="July 2019" to="Present"/>
            <Widecard title="Intemidiate" where="S.V.S Sr. Secondary School" from="2017" to="2019"/>
            <Widecard title="High School" where="Sri Satya Sai Vidya Vihar" from="2008" to="2017"/>
            </div>
            )
        }
    }
    
export default Education
    