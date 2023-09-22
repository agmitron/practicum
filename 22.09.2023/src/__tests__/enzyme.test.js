import ImagePopup from '../components/ImagePopup';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

let mockCard = {
    "likes": [],
    "_id": "1",
    "name": "Deer",
    "link": "https://cat.photo",
    "owner":
    {
        "name": "John",
        "about": "Web-developer",
        "avatar": "https://avatar.photo",
        "_id": "1",
        "cohort": "cohort-13"
    },
    "createdAt": "2021-10-24T19:41:51.239Z"
};

let mockCard_cat = {
    "likes": [],
    "_id": "1",
    "name": "Cat",
    "link": "https://deer.photo",
    "owner":
    {
        "name": "John",
        "about": "Web-developer",
        "avatar": "https://avatar.photo",
        "_id": "1",
        "cohort": "cohort-13"
    },
    "createdAt": "2021-10-24T19:41:51.239Z"
};

const clickFn = jest.fn();
describe('>>>H O M E --- Shallow Render REACT COMPONENTS',()=>{

    Enzyme.configure({ adapter: new Adapter() });
    let wrapper

    beforeEach(()=>{
        wrapper = Enzyme.shallow(<ImagePopup card={mockCard} onClose={clickFn}/>)
    })

    test('+++ render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    });

    test('+++ render the DUMB snap', () => {
        expect(wrapper).toMatchSnapshot();
     });
      
    test('+++ contains output', () => {
        wrapper
            .find('Popup')
            .simulate('close');
        expect(clickFn).toHaveBeenCalled();
    });

    test('+++ contains app', () => {
        const caption = wrapper.find('.popup__caption');
        const result = caption.text();
        expect(result).toEqual('Deer');
    });

    test('+++ new props app', () => {
        wrapper.setProps({ card: mockCard_cat });
        const caption = wrapper.find('.popup__caption');
        const result = caption.text();
        expect(result).toEqual('Cat');
    });
});