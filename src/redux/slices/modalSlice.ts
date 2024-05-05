
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = () => ({
  type: OPEN_MODAL as typeof OPEN_MODAL,
});

export const closeModal = () => ({
  type: CLOSE_MODAL as typeof CLOSE_MODAL,
});

interface State {
  showModal: boolean;
}

const initialState: State = {
  showModal: false,
};



const modalReducer = (state: State = initialState, action: any) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
