import React from 'react';
import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import Card from '../components/Card';
import store from "../store/store"

describe('Check Card component', () => {
  let mockCard = {
    "likes": [],
    "_id": "1",
    "name": "Deer",
    "link": "https://images.unsplash.com/",
    "owner":
    {
        "name": "John",
        "about": "Web-developer",
        "avatar": "https://images.unsplash.com/",
        "_id": "1",
        "cohort": "cohort-13"
    },
    "createdAt": "2021-10-24T19:41:51.239Z"
  };

  test('should be equal to snapshot', () => {
    const renderedValue = TestRenderer.create(<Provider store={store}>
      <Card card={mockCard} onImageClick={()=>{}} onDelete={()=>{}}/></Provider>);
    expect(renderedValue).toMatchSnapshot();
  })
})