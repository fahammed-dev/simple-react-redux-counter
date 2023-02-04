import { useDispatch, useSelector } from 'react-redux';
import {
    decrementCounter,
    incrementCounter,
    resetCounter
} from '../redux/actions/counterActions';

const Counter = () => {
    const count = useSelector((state) => state.count);

    const dispatch = useDispatch();

    function handleIncrement() {
        dispatch(incrementCounter());
    }

    function handleDecrement() {
        dispatch(decrementCounter());
    }

    function handleResetCounter() {
        dispatch(resetCounter());
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="text-2xl mb-10">
                <h1>React Redux Counter App</h1>
            </div>
            <div className="bg-white rounded-lg p-10 shadow-lg">
                <div className="text-5xl font-bold text-center">
                    <button
                        className="text-red-600 hover:text-red-700 mr-5"
                        onClick={handleDecrement}
                    >
                        -
                    </button>
                    <span id="counter">{count}</span>
                    <button
                        className="text-green-600 hover:text-green-700 ml-5"
                        onClick={handleIncrement}
                    >
                        +
                    </button>
                </div>
                <div className="mt-5 text-center">
                    <button
                        className="bg-gray-400 px-5 py-2 rounded"
                        onClick={handleResetCounter}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
