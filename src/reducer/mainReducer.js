import { ACTION_TYPE } from "../utils/Constant";

export const initialValue = {
  inventoryData: [],
  menuSelected: "dashboard",
  departmentSelected: "",
  sorting: "name",
  lowStock: false
};

export const reducerFunction = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.SUCCESS:
      return {
        ...state,
        inventoryData: action.payload
      };

    case ACTION_TYPE.MENUSELECTED:
      return {
        ...state,
        menuSelected: action.payload
      };
    case ACTION_TYPE.DEPARTMENTSELECTED:
      return {
        ...state,
        departmentSelected: action.payload
      };

    case ACTION_TYPE.SORTING:
      return {
        ...state,
        sorting: action.payload
      };
    case ACTION_TYPE.LOWSTOCK:
      return {
        ...state,
        lowStock: action.payload
      };
    case ACTION_TYPE.ADD:
      return {
        ...state,
        inventoryData: [...state.inventoryData, action.payload]
      };
    default:
      return { ...state };
  }
};
