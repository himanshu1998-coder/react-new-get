import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';


const AddUser = props => {

    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');


    const addUserHandler = (e) => {
        e.preventDefault();
        if(userName.trim().length === 0 || userAge.trim().lenght === 0){
            return;
        }if(+userAge < 1){
            return;
        }

        console.log(userName, userAge);
        setUserName('');
        setUserAge('');
    };

    const userNameChangeHandler = (e) => {
        setUserName(e.target.value);
    }
    const userAgeChangeHandler = (e) => {
        setUserAge(e.target.value);
    }

    return(
        <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input type="text" id="username" value={userName} onChange={userNameChangeHandler}></input>
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" value={userAge} onChange={userAgeChangeHandler}></input>
        <Button type='submit'>Add User</Button>
    </form>
        </Card>
    );
};

export default AddUser;