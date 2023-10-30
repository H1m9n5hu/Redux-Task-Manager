import React, { useEffect, useState } from 'react';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import {addTask, deleteAllTask, deleteTask, updateTask } from '../Redux/Actions/index'

const Home = () => {
    const [newTask, setNewTask] = useState('');
    const dispatch = useDispatch();
    const data = useSelector((state) => state.newTask);
    const [flag, setFlag] = useState(false);
    const [editTask, setEditTask] = useState('');
    const [editValue, setEditValue] = useState('');

    const editClickHandler = (data) => {
        setEditTask(data);
        setFlag(true);
    }

    useEffect(()=>{
        setEditValue(editTask.task);
    },[editTask])

    const addBtnHandler = () => {
        if(newTask !== '') {
            let uniqueID = new Date().getTime().toString();
            let obj = {
                id: uniqueID,
                task: newTask,
                completed: false
            }
            setNewTask('');
            dispatch(addTask(obj));
        }
        else
            alert("First add your task please!");
    }
    const pressEnterBtnHandler = (e) => {
        if(e.key === 'Enter') {
            addBtnHandler();
        }
    }

    const updateBtnHandler = () => {
            let editTaskObj = {
                id: editTask.id,
                task: editValue,
                completed: false
            }
            setNewTask('');
            dispatch(updateTask(editTaskObj));
            setFlag(false);
    }
    const updatePressEnterBtnHandler = (e) => {
        if(e.key === 'Enter') {
            updateBtnHandler();
        }
    }

    return (
        <div className='app'>
            <h1 className='title'>Task Manager</h1>
            {
                flag ? (
                    <div>
                        <input className='inputField' type='text' onChange={(e) => setEditValue(e.target.value)} value={editValue||""} onKeyDown={updatePressEnterBtnHandler}></input>
                        <button className='addBtn' onClick={updateBtnHandler} type='button'>Update</button>
                    </div>
                ):(
                    <div>
                        <input className='inputField' type='text' onChange={(e) => setNewTask(e.target.value)} value={newTask} onKeyDown={pressEnterBtnHandler} placeholder='Add your tasks'></input>
                        <button className='addBtn' onClick={addBtnHandler} type='button'>Add</button>
                    </div>
                )
            }
            
            <div className='tasksContainer'>
                {
                    data.map(data =>
                        <div className='content'>
                            <div className='textContainer'>
                                <li className='contextText'>{data.task}</li>
                            </div>
                            <div className='iconContainer'>
                                <span onClick={() => editClickHandler(data)}><i className='editBtn' class="material-icons">edit</i></span>
                                <span onClick={() => dispatch(deleteTask(data.id))}><i class="material-icons">delete</i></span>
                            </div>
                        </div>
                    )   
                }
            </div>

            { data.length > 1 && (
                <div>
                    <button className='deleteAllBtn' onClick={()=> dispatch(deleteAllTask())} type='button'>Delete All</button>
                </div>
            )}
        </div>
    )
};

export default Home;