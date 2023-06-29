import { createSlice } from "@reduxjs/toolkit";
import { cloneDeep, set } from "lodash";

const initialState = {
  isFormValid: true,
  data: {},
  errors: {},
};

const formReducer = {
  setFormData: (state, { payload }) => {
    const { name, value } = payload;
    const data = set(state.data, name, value);

    state = { ...state, data };
  },
  setFormValidity: (state, { payload }) => {
    const { isvalid, errors } = payload;

    state.errors = errors || {};
    state.isFormValid = isvalid;
  },
  clearFormData: () => {
    state = initialState;
  },
  removeFormField: () => {
    const newData = cloneDeep(state.data);
    delete newData[`${payload.key}`];
    state = { ...state, data: newData };
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: formReducer,
});

export const { setFormData, setFormValidity, clearFormData, removeFormField } =
  formSlice.actions;
export default formSlice.reducer;
