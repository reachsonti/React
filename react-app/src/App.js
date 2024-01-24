import logo from './logo.svg';
import './App.css';
import { store } from './actions/store'
import { Provider } from 'react-redux';
import DCandidateForm from './components/DCandidateForm';
import DCandidates from './components/DCandidates';
import { Container } from '@material-ui/core';


//The <Provider> component makes the Redux store available to any nested components that need to access the Redux store

function App() {
  return (  
    
      <Provider store={store}>
        <Container>                
        <DCandidates></DCandidates>
        </Container>
      </Provider>
    
    
  );
}

export default App;
