import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import {createMemoryHistory} from 'history'
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from "../store/store"
import Header from '../components/Header';

describe('Header component', () => {
    afterEach(cleanup)

    test('should has img with logo class', () => {
        const textProp = 'Логотип проекта Mesto';
        render(
            <BrowserRouter>
                <Provider store={store}><Header/></Provider>
            </BrowserRouter>
        );
        const img = screen.getByAltText(textProp);
        expect(img).toHaveClass('logo');
    })

    test('should has header-wrapper-element with class header__wrapper', () => {
        const textProp = 'header-wrapper-element';
        const pathProp = '/signup';
        render(
            <BrowserRouter>
                <Provider store={store}><Header path={pathProp} /></Provider>
            </BrowserRouter>
        );
        const element = screen.getByTestId(textProp);
        expect(element).toHaveClass('header__wrapper');
    })

    test('should has login element', () => {
        const textProp = 'link-signin-element';
        const history = createMemoryHistory();
        history.push('/signin')
        render(
            <Router history={history}>
                <Provider store={store}>
                    <Header/>
                </Provider>
            </Router>
        );
        const element = screen.getByTestId(textProp);
        userEvent.click(element);
        expect(screen.getByTestId('link-signup-element')).toHaveTextContent('Войти');
    })

    test('should be equal to snapshot', () => {
        const history = createMemoryHistory();
        history.push('/signin')
        const {asFragment} = render(
            <Router history={history}>
                <Provider store={store}>
                    <Header/>
                </Provider>
            </Router>
        );
        expect(asFragment()).toMatchSnapshot();
    })  
})
