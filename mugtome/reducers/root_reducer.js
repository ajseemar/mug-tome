import { combineReducers } from "redux";

import EntitiesReducer from './entities/entities_reducer';
import SessionReducer from "./session_reducer";
import ErrorsReducer from "./errors/errors_reducer";
import UIReducer from "./ui/ui_reducer";

export default combineReducers({
    entities: EntitiesReducer,
    session: SessionReducer,
    errors: ErrorsReducer,
    ui: UIReducer
});