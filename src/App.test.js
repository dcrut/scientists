import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'
import PersonList from './components/PersonList'
import PersonEdit from './components/PersonEdit'

describe('<APP />', () => {

  it('has state', () => {
    const div = document.createElement('div');
    const app = shallow(<App />, div);
    expect(app.state().people).toHaveLength(3);
  });

  it('has a personList', () => {
      const div = document.createElement('div');
      const app = shallow(<App />, div);
      const personList = app.find(PersonList.name);
      expect(personList).toHaveLength(1);
    });

  it('passes people state', () => {
    const div = document.createElement('div');
    const app = shallow(<App />, div);
    const personList = app.find(PersonList.name);
    expect(personList.props().people).toHaveLength(3);
  });

  xit('can switch to edit mode', () => {
    const div = document.createElement('div');
    const app = shallow(<App />, div);

    app.node._self.onEdit(app.state().people[0]);
    const personEdit = app.find(PersonEdit.name);

    expect(app.state().editing).toBe(app.state().people[0]);
    expect(personEdit.props().person).toBe(app.state().people[0]);
  });

  xit('can switch to list mode', () => {
    const div = document.createElement('div');
    const app = shallow(<App />, div);
    app.node._self.onEdit(app.state().people[0]);

    app.node._self.onDone(app.state().people[0]);
    const personList = app.find(PersonList.name);

    expect(app.state().editing).toBe(null);
    expect(personList.props().people).toBe(app.state().people);
  });
})
