import axios, { Axios } from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { toast } from "react-toastify";
import { API, API_COM } from "../helpers/const";
import { ClientContext } from "./ClientProvider";

export const AdminContext = createContext();

const INIT_STATE = {
  products: null,
  getProductToEdit: null,
  comment: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, products: action.payload };
    case "GET_PRODUCT_TO_EDIT":
      return { ...state, productToEdit: action.payload };
    case "GET_COMMENT":
      return { ...state, comment: action.payload };
    default:
      return state;
  }
};

const AdminProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addProduct = async (newProduct) => {
    try {
      await axios.post(API, newProduct);
      toast.success("Успешно добавлено!");
    } catch (error) {
      toast.error("Ошибка сервера! Попробуйте снова!");
      console.log(error);
    }
  };

  const getProduct = async () => {
    try {
      const response = await axios(API);

      let action = {
        type: "GET_PRODUCT",
        payload: response.data,
      };

      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductToEdit = async (id) => {
    try {
      const response = await axios(`${API}/${id}`);
      let action = {
        type: "GET_PRODUCT_TO_EDIT",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  const saveEditProduct = async (productEdit) => {
    try {
      await axios.patch(`${API}/${productEdit.id}`, productEdit);
      getProduct();
      toast.success("Изменения сохранены");
    } catch (error) {
      toast.error("Попробуйте позже");
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      getProduct();
      toast.success("Успешно удалено!");
    } catch (error) {
      console.log(error);
    }
  };

  // !COOOOOMMMMENNTS

  const addComment = async (newComment) => {
    try {
      await axios.post(API_COM, newComment);
      getComment();
    } catch (error) {
      console.log(error);
    }
  };

  const getComment = async () => {
    try {
      const response = await axios(API_COM);
      let action = {
        type: "GET_COMMENT",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <AdminContext.Provider
        value={{
          addProduct,
          addComment,
          getProduct,
          deleteProduct,
          getProductToEdit,
          saveEditProduct,

          getComment,

          products: state.products,
          productToEdit: state.productToEdit,
          comment: state.comment,
        }}
      >
        {props.children}
      </AdminContext.Provider>
    </div>
  );
};

export default AdminProvider;
