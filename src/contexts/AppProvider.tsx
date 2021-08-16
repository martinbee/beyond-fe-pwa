import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { StylesProvider } from '@material-ui/core/styles';

// import { AuthProvider } from 'lib/auth';

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};
type AppProviderProps = {
  children: React.ReactNode;
};

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => (
  <div role="alert">
    <h2>Ooops, something went wrong :( </h2>
    <pre>{error.message}</pre>
    <Button onClick={resetErrorBoundary}>Refresh</Button>
  </div>
);

const reloadApp = () => window.location.assign(window.location.origin);

const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

const AppProvider = ({ children }: AppProviderProps) => (
  <React.Suspense
    fallback={
      <div className="h-screen w-screen flex items-center justify-center">
        <CircularProgress size={60} />
      </div>
    }
  >
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reloadApp}>
      <ApolloProvider client={apolloClient}>
        <StylesProvider injectFirst>
          <Router>{children}</Router>
        </StylesProvider>
      </ApolloProvider>
    </ErrorBoundary>
  </React.Suspense>
);

export default AppProvider;
