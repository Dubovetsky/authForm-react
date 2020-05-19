import React from 'react';

const Profile = () => {
    return (
        <div className='body'>
            <div className='profile'>
                <div>
                    <img className='content-header-img' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg' />
                </div>
                <div className='ava'>
                    avatar
                </div>
                <div className='menu'>
                        <button>Messages</button>
                    <div>
                        <button>Settings</button>
                    </div>
                    <div>
                        <button>Link-1</button>
                    </div>
                    <div>
                        <button>Link-2</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;