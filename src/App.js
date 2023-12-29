import './App.css';
import HeaderComponent from '../src/components/HeaderComponent'
import BodyComponent from '../src/components/BodyComponent'

import FooterComponent from '../src/components/FooterComponent'

function App() {
  return (
    <div>
      <h1>learn react</h1>
      {/* Header Component */}
      <HeaderComponent/>
      {/* Body Component */}
      <BodyComponent/>
      {/* Footer Component */}
      <FooterComponent/>
    </div>
  );
}

export default App;
