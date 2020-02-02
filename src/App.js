import React from 'react';

import { Card } from './components';

function App() {
  return (
    <div className="App">
      <Card bgColor="#eee" options={[{ value: 'chocolate', label: 'Chocolate' }]}>
        Hey there!
      </Card>
    </div>
  );
}

export default App;
