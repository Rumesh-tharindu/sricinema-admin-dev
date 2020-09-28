import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import Upload from './Upload'
import Resources from './Resources'
import Analytics from './Analytics'





export default function Sidebar() {
    return (
    <Router>
    <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="users">
                        <NavIcon>
                            <i className="fa fa-user" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                           Users
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Upload">
                        <NavIcon>
                            <i className="fa fa-upload" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                           Upload
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="resources">
                        <NavIcon>
                            <i className="fa fa-list" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                           Resources
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="analytics">
                        <NavIcon>
                            <i className="fa fa-signal" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                           Analytics
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
                
            </SideNav>
            <main>
              
                
                <Route path="/" exact component={props => <Home />} />
                <Route path="/home" exact component={props => <Home />} />
                <Route path="/users" exact component={props => <Users />} />
                <Route path="/upload" exact component={props => <Upload />} />
                <Route path="/resources" exact component={props => <Resources />} />
                <Route path="/analytics" exact component={props => <Analytics />} />
             
            </main>
        </React.Fragment>
    )}
    />
</Router>
    )
}
