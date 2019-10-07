// Core
import { applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

const logger = createLogger({
  collapsed: true
});

const sagaMiddleware = createSagaMiddleware();

if (process.env._DEV_ && !window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  console.warn("please install Redux DevTools");
}
const composeEnhancers =
  (process.env._DEV_ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const middleware = [sagaMiddleware];

if (process.env._DEV_) {
  middleware.push(logger);
}

const enhancedStore = composeEnhancers(applyMiddleware(...middleware));

export { enhancedStore, sagaMiddleware };
