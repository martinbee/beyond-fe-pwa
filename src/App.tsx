import AppProvider from './contexts/AppProvider';
import { AppRoutes } from './routes';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Home from '@/screens/Home';
// import Users from '@/screens/Users';

// export default function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/users/:userId">
//           <Users />
//         </Route>
//         <Route path="/">
//           <Home />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }
