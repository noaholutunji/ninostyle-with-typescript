import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App, { Container } from 'next/app';
import rootReducer from '../src/store/reducers/rootReducer';
// import setAuthorizationToken from '../src/components/utils/setAuthorizationToken';
// import jwtDecode from 'jwt-decode';
// import { setCurrentUser } from '../src/store/actions/authActions';
import withRedux from 'next-redux-wrapper';

const stored = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

type Props = {
  Component: React.Component;
  store: Store;
};

class MyApp extends App<Props> {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }

  render() {
    const { store, Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(stored)(MyApp);
