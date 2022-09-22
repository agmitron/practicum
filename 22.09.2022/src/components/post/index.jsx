import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './post.style';

export function fetchData() {
    console.log('Post.fetchData()');

    return axios.get('https://jsonplaceholder.typicode.com/posts/3').then(response => {
        return {
            title: response.data.title,
            body: response.data.body,
        };
    });
}

export function Post(props) {
    console.log(props);
    console.log('Post.render()');
    const [state, setState] = useState({
        isLoading: true,
        title: '',
        description: '',
    })

    useEffect(() => {
        console.log(props);
        if (props.staticContext) {
            setState({
                isLoading: false,
                title: props.staticContext.title,
                description: props.staticContext.body,
            });
        } else if (window.initial_state) {
            setState({
                isLoading: false,
                title: window.initial_state.title,
                description: window.initial_state.body,
            });
        } else {
            setState({
                isLoading: true,
                title: '',
                description: '',
            });
        }
    }, [])


    useEffect(() => {
        fetchData().then(data => {
            setState({
                ...state,
                isLoading: false,
                title: data.title,
                description: data.body,
            });
        });
        return () => {
            console.log('Post componentDidMount()');
        }
    }, [])
    // when component mounts, fetch data

    return (
        <div className='ui-post'>
            <p className='ui-post__title'>Post Widget</p>

            {
                state?.isLoading ? 'loading...' : (
                    <div className='ui-post__body'>
                        <p className='ui-post__body__title'>{state?.title}</p>
                        <p className='ui-post__body__description'>{state?.description}</p>
                    </div>
                )
            }
        </div>
    );
}