import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LoginContainer from 'components/LoginContainer'
import LinkBtn from 'components/LinkBtn'
import NotFound from 'components/NotFound'
import Profile from '../Profile'


class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='main-wrapper'>
                <header className="header">
                    <div className="top-menu">
                        <LinkBtn className='not-found' to="/NotFound" label={'404'} /> &#160;
                            <LinkBtn to="/login" label={'Логин'} />
                    </div>
                </header>

                <div className="content">
                    <Switch>
                        <Redirect from="/" to="/login" exact />
                        <Route path="/profile" component={Profile} />
                        <Route path="/login" component={LoginContainer} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </div>
        );
    }
}


export default Home
