import React, { useReducer, useContext, createContext, Dispatch } from 'react';

type ContextState = {
  token: string;
  isPopup: boolean;
  signInWriteCard: boolean;
  userData: any;
  receiverName: string | undefined;
};

type ContextAction =
  | { type: 'SET_TOKEN'; token: string }
  | { type: 'TOGGLE_POPUP'; isPopup: boolean }
  | { type: 'TRY_SIGNIN_WRITECARD'; signInWriteCard: boolean }
  | { type: 'SET_USER_DATA'; userData: any }
  | { type: 'SET_RECEIVER_NAME'; receiverName: string | undefined };

type AppDispatch = Dispatch<ContextAction>;

const AppStateContext = createContext<ContextState | null>(null);
const AppDispatchContext = createContext<AppDispatch | null>(null);

const reducer = (state: ContextState, action: ContextAction): ContextState => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'TOGGLE_POPUP':
      return {
        ...state,
        isPopup: action.isPopup,
      };
    case 'TRY_SIGNIN_WRITECARD':
      return {
        ...state,
        signInWriteCard: action.signInWriteCard,
      };
    case 'SET_USER_DATA':
      return {
        ...state,
        userData: action.userData,
      };
    case 'SET_RECEIVER_NAME':
      return {
        ...state,
        receiverName: action.receiverName,
      };
    default:
      throw new Error('token action error');
  }
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {
    token: '',
    isPopup: false,
    signInWriteCard: false,
    userData: {},
    receiverName: '',
  });

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>{children}</AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export function useAppState() {
  const state = useContext(AppStateContext);
  if (!state) throw new Error('Cannot find AppProvider');
  return state;
}

export function useAppDispatch() {
  const dispatch = useContext(AppDispatchContext);
  if (!dispatch) throw new Error('Cannot find AppProvider');
  return dispatch;
}
