import './App.css';
import List from './components/List.jsx';
import AddTask from './components/AddTask.jsx';
import UserContexProvider from './context/UserContexProvider';

function App() {
  return (
    <UserContexProvider>
      <AddTask/>
      <List />
    </UserContexProvider>
  );
}

export default App;
