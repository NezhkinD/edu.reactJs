import React from 'react';
import classes from './Profile.module.css';


const Profile = () => {
    return (
        <div className={classes.content}>
            <img src={'https://html5css.ru/css/img_forest.jpg'}/>
            <div>ava + desc</div>
            <div>my posts</div>
            <div>new posts
                <div className={classes.item}>post 1</div>
                <div className={classes.item}>post 2</div>
            </div>
        </div>
    );
}

export default Profile;