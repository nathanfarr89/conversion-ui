import { combineReducers } from 'redux';
import TempConvReducer from './reducer_tempconv';
import WeightConvReducer from './reducer_weightconv';
import MeasureConvReducer from './reducer_measureconv';
import FeetMetersConvReducer from './reducer_feetmetersconv';

const rootReducer = combineReducers({
    tempconv: TempConvReducer,
    weightconv: WeightConvReducer,
    measureconv: MeasureConvReducer,
    feetmetersconv: FeetMetersConvReducer
});

export default rootReducer;