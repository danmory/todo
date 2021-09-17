import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store';

const UseTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default UseTypedSelector;
