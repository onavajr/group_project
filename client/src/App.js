import './App.css';
import { Router } from '@reach/router';
import AllProductmanager from './components/AllProductmanager';
import CreateProductManager from './components/CreateProductmanager';
import DetailProductmanager from './components/DetailProductmanager';
import EditProductmanager from './components/EditProductmanager';
import ProductHeader from './components/ProductHeader';
import LoginRegistration from './views/LoginRegistration';

function App() {
  return (
    <div className="App">
      <Router>
        <ProductHeader default/>
        <AllProductmanager path="/productmanager/" />
        <CreateProductManager path="/productmanager/new" />
        <DetailProductmanager path="/productmanager/:id" />
        <EditProductmanager path="/productmanager/:id/edit"/>
        <LoginRegistration path="/productmanager/login" />
      </Router>

    </div>
  );
}

export default App;
