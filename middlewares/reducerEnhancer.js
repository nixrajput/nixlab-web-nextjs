const round = number => Math.round(number * 100) / 100;

const monitorReducerEnhancer =
    createStore => (reducer, initialState, enhancer) => {
        const monitoredReducer = (state, action) => {
            const start = performance.now();
            const newState = reducer(state, action);
            const end = performance.now();
            const diff = round(end - start);

            console.log('reducer process time:', diff);

            return newState;
        }

        if (process.env.NODE_ENV !== 'production') {
            return createStore(monitoredReducer, initialState, enhancer);
        }
        return createStore(reducer, initialState, enhancer);
    }

export default monitorReducerEnhancer;