import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";
import { API } from "../helpers/const";
// import { API_COM } from "../helpers/const";

export const ClientContext = createContext();

const INIT_STATE = {
  products: null,
  detail: null,
  cart: null,
  cartCount: JSON.parse(localStorage.getItem("cart"))
    ? JSON.parse(localStorage.getItem("cart")).products.length
    : 0,
  favoriteCount: JSON.parse(localStorage.getItem("favorite"))
    ? JSON.parse(localStorage.getItem("favorite")).products.length
    : 0,
  comment: null,
  favorite: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_DETAIL":
      return { ...state, detail: action.payload };

    case "ADD_PRODUCT_TO_CART":
      return { ...state, cartCount: action.payload };
    case "DELETE_PRODUCT_FROM_CART":
      return { ...state, cartCount: action.payload };
    case "GET_CART":
      return { ...state, cart: action.payload };

    case "GET_COMMENT":
      return { ...state, comment: action.payload };

    // избранное
    case "ADD_FAVORITE_PRODUCT":
      return { ...state, favoriteCount: action.payload };
    case "DELETE_PRODUCT_FROM_FAVORITE":
      return { ...state, favoriteCount: action.payload };
    case "GET_FAVORITE":
      return { ...state, favorite: action.payload };
    default:
      return state;
  }
};

const ClientProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getProducts = async () => {
    try {
      const response = await axios(`${API}/${window.location.search}`);

      let action = {
        type: "GET_PRODUCTS",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  // !  КОООРЗИИНА

  // добавили в корзину
  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    let productCart = {
      product: product,
      count: 1,
      subPrice: product.price,
    };
    cart.products.push(productCart);
    cart.totalPrice = cart.products.reduce((prev, item) => {
      return prev + item.subPrice;
    }, 0);
    localStorage.setItem("cart", JSON.stringify(cart));

    let action = {
      type: "ADD_PRODUCT_TO_CART",
      payload: cart.products.length,
    };
    dispatch(action);
  };

  //проверил в корзине ли товар

  const checkProductInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
      };
    }

    let check = cart.products.find((item) => {
      return item.product.id === id;
    });
    if (!check) {
      return false;
    } else {
      return true;
    }
  };

  // удаляем с корзины

  const deleteProductFromCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
      };
    }
    cart.products = cart.products.filter((item) => {
      return item.product.id !== id;
    });

    cart.totalPrice = cart.products.reduce((prev, item) => {
      return prev + item.subPrice;
    }, 0);
    localStorage.setItem("cart", JSON.stringify(cart));
    let action = {
      type: "DELETE_PRODUCT_FROM_CART",
      payload: cart.products.length,
    };
    dispatch(action);
    getCart();
  };
  // ! СТРАНИЦА КОРЗИНЫ
  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    let action = {
      type: "GET_CART",
      payload: cart,
    };
    dispatch(action);
  };

  const changeCount = (flag, id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.map((item) => {
      if (item.product.id === id) {
        if (flag) item.count++;
        else item.count--;
        item.subPrice = item.count * item.product.price;
        return item;
      } else {
        return item;
      }
    });
    cart.totalPrice = cart.products.reduce((prev, item) => {
      return prev + item.subPrice;
    }, 0);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  };

  // !СТРАНИЦА ДЕТАЛЕЙ
  const getDetail = async (id) => {
    try {
      const response = await axios(`${API}/${id}`);
      let action = {
        type: "GET_DETAIL",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  //! ПАГИНАЦИЯ
  const productsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (state.products) {
      setPosts(state.products);
    }
  }, [state.products]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = posts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalProductsCount = posts.length;

  //! ИЗБРАННОЕ
  const addFavoriteProduct = (product) => {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        products: [],
        totalPrice: 0,
      };
    }

    let productCart = {
      product: product,
      count: 1,
      subPrice: product.price,
    };
    favorite.products.push(productCart);
    favorite.totalPrice = favorite.products.reduce((prev, item) => {
      return prev + item.subPrice;
    }, 0);
    localStorage.setItem("favorite", JSON.stringify(favorite));

    let action = {
      type: "ADD_FAVORITE_PRODUCT",
      payload: favorite.products.length,
    };
    dispatch(action);
  };

  //проверил в корзине ли товар

  const checkFavoriteInCart = (id) => {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        products: [],
      };
    }

    let check = favorite.products.find((item) => {
      return item.product.id === id;
    });
    if (!check) {
      return false;
    } else {
      return true;
    }
  };

  // удаляем с корзины

  const deleteProductFromFavorite = (id) => {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        products: [],
      };
    }
    favorite.products = favorite.products.filter((item) => {
      return item.product.id !== id;
    });

    favorite.totalPrice = favorite.products.reduce((prev, item) => {
      return prev + item.subPrice;
    }, 0);
    localStorage.setItem("favorite", JSON.stringify(favorite));
    let action = {
      type: "DELETE_PRODUCT_FROM_FAVORITE",
      payload: favorite.products.length,
    };
    dispatch(action);
    getFavorite();
  };

  const getFavorite = () => {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        products: [],
        totalPrice: 0,
      };
    }

    let action = {
      type: "GET_FAVORITE",
      payload: favorite,
    };
    dispatch(action);
  };

  return (
    <div>
      <ClientContext.Provider
        value={{
          getProducts,
          setCurrentPage,
          addProductToCart,
          checkProductInCart,
          deleteProductFromCart,
          changeCount,
          getDetail,
          getCart,

          // addComment,
          // getComment,
          comment: state.comment,

          addFavoriteProduct,
          checkFavoriteInCart,
          deleteProductFromFavorite,
          getFavorite,
          // changeFavoriteCount,

          favoriteCount: state.favoriteCount,
          favorite: state.favorite,
          //
          totalProductsCount,
          productsPerPage,
          currentPage,
          products: currentProducts,
          cartCount: state.cartCount,
          cart: state.cart,
          detail: state.detail,
        }}
      >
        {props.children}
      </ClientContext.Provider>
    </div>
  );
};

export default ClientProvider;
