import { Switch, Route } from 'react-router';
import './style/App.scss';
import Invoices from './components/Invoices';
import AllInvoices from './components/AllInvoices';
import Pay from './components/Pay';
import ContractDetail from './components/ContractDetail';
import Error from './components/Error';

function App() {
  return (
    <Switch>
      <Route path="/" component={Invoices} exact />
      <Route path="/all-invoices" component={AllInvoices} exact />
      <Route path="/payment-process" component={Pay} exact />
      <Route path="/contract-detail" component={ContractDetail} exact />
      <Route path="*" component={Error} />
    </Switch>
  );
}

export default App;
