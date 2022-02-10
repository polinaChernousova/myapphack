import React, { useContext, useState } from "react";
import { AdminContext } from "../contexts/AdminProvider";
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  TextareaAutosize,
} from "@mui/material";
import { ToastContainer } from "react-toastify";

const initProduct = {
  name: "",
  image: "",
  genre: "",
  chapter: "",
  data: "",
  price: "",
  desc: "",
};

const AddPage = () => {
  const [newProduct, setNewProduct] = useState(initProduct);
  const { addProduct } = useContext(AdminContext);
  console.log(newProduct);

  const handleSubmit = (event) => {
    event.preventDefault();
    for (const key in newProduct) {
      if (!newProduct[key]) {
        alert("Заполните поля!");
        return;
      }
    }
    addProduct(newProduct);
    setNewProduct(initProduct);
  };

  return (
    <div className="add-edit-page" style={{ marginTop: "100px" }}>
      <Container>
        <h2>ADD PRODUCT</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            style={{ marginTop: "20px" }}
            className="input-add"
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            value={newProduct.name}
            label="Введите название"
            id="outlined-basic"
            variant="outlined"
          />
          <TextField
            style={{ marginTop: "20px" }}
            className="input-add"
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            value={newProduct.image}
            label="Вставьте фото"
            id="outlined-basic"
            variant="outlined"
          />

          <FormControl fullWidth>
            <InputLabel id="color-select">Жанр</InputLabel>
            <Select
              style={{ marginTop: "20px" }}
              onChange={(e) =>
                setNewProduct({ ...newProduct, genre: e.target.value })
              }
              value={newProduct.genre}
              labelId="color-select"
              label="Выберите жанр"
            >
              <MenuItem value="Антиутопия">Антиутопия</MenuItem>
              <MenuItem value="Комедия">Комедия</MenuItem>
              <MenuItem value="Боевик">Боевик</MenuItem>
              <MenuItem value="Драма">Драма</MenuItem>
              <MenuItem value="Жизнь">Жизнь</MenuItem>
              <MenuItem value="Сёнэн">Сёнэн</MenuItem>
              <MenuItem value="Приключения">Приключения</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="color-select">Раздел</InputLabel>
            <Select
              style={{ marginTop: "20px" }}
              onChange={(e) =>
                setNewProduct({ ...newProduct, chapter: e.target.value })
              }
              value={newProduct.chapter}
              labelId="color-select"
              label="Выберите раздел"
            >
              <MenuItem value="DC Comics">DC Comics</MenuItem>
              <MenuItem value="Dynamite Entertaiment">
                Dynamite Entertaiment
              </MenuItem>
              <MenuItem value="Marvel">Marvel</MenuItem>
              <MenuItem value="Disney">Disney</MenuItem>
              <MenuItem value="Manga">Manga</MenuItem>
              <MenuItem value="Dark Horse">Dark Horse</MenuItem>
              <MenuItem value="Wildstorm"> Wildstorm </MenuItem>
              <MenuItem value="Oni Press "> Oni Press </MenuItem>
              <MenuItem value="Valiant"> Valiant</MenuItem>
              <MenuItem value="Manhwa"> Manhwa </MenuItem>
              <MenuItem value="Boom! Studios">Boom! Studios</MenuItem>
            </Select>
          </FormControl>
          <TextareaAutosize
            style={{ marginTop: "20px" }}
            onChange={(e) =>
              setNewProduct({ ...newProduct, desc: e.target.value })
            }
            value={newProduct.desc}
            minRows={3}
            placeholder="Введите описание"
          />
          <TextField
            style={{ marginTop: "20px" }}
            className="input-add"
            onChange={(e) =>
              setNewProduct({ ...newProduct, data: e.target.value })
            }
            value={newProduct.data}
            label="Введите дату"
            id="outlined-basic"
            variant="outlined"
            type="number"
          />
          <TextField
            style={{ marginTop: "20px" }}
            className="input-add"
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: +e.target.value })
            }
            value={newProduct.price}
            label="Введите цену"
            id="outlined-basic"
            variant="outlined"
            type="number"
          />

          <Button
            style={{ marginTop: "20px", marginBottom: "20px" }}
            type="submit"
            variant="contained"
          >
            ADD
          </Button>
        </form>
      </Container>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default AddPage;
