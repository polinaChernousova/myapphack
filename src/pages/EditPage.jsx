import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AdminContext } from "../contexts/AdminProvider";

const EditPage = () => {
  const params = useParams();
  const { getProductToEdit, productToEdit, saveEditProduct } =
    useContext(AdminContext);
  const [productEdit, setProductToEdit] = useState(productToEdit);
  const navigate = useNavigate();

  console.log(productToEdit);

  useEffect(() => {
    getProductToEdit(params.id);
  }, []);

  useEffect(() => {
    if (productToEdit) {
      setProductToEdit(productToEdit);
    }
  }, [productToEdit]);

  console.log(productToEdit);

  const handleSubmit = (event) => {
    event.preventDefault();

    for (const key in productEdit) {
      if (!productEdit[key]) {
        alert("Зфполните поля");
        return;
      }
    }
    saveEditProduct(productEdit);
    navigate("/admin-panel");
  };
  if (!productEdit) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="add-edit-page" style={{ marginTop: "80px" }}>
      <Container>
        <h2>Edit Page</h2>

        <form onSubmit={handleSubmit}>
          <TextField
            style={{ marginTop: "20px" }}
            value={productEdit.name}
            onChange={(e) =>
              setProductToEdit({ ...productToEdit, name: e.target.value })
            }
            label="Введите название"
            variant="standard"
          />
          <TextField
            style={{ marginTop: "20px" }}
            value={productEdit.image}
            onChange={(e) =>
              setProductToEdit({ ...productEdit, image: e.target.value })
            }
            label="Вставьте фото"
            variant="standard"
          />
          <TextField
            style={{ marginTop: "30px" }}
            value={productEdit.desc}
            onChange={(e) =>
              setProductToEdit({ ...productEdit, desc: e.target.value })
            }
            label="Вставьте описание"
            variant="standard"
          />
          <FormControl fullWidth>
            <InputLabel style={{ marginTop: "20px" }} id="color-select">
              Жанр
            </InputLabel>
            <Select
              style={{ marginTop: "20px" }}
              value={productEdit.genre}
              onChange={(e) =>
                setProductToEdit({ ...productEdit, genre: e.target.value })
              }
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
            <InputLabel style={{ marginTop: "20px" }} id="color-select">
              Раздел
            </InputLabel>
            <Select
              style={{ marginTop: "20px" }}
              value={productEdit.chapter}
              onChange={(e) =>
                setProductToEdit({ ...productEdit, chapter: e.target.value })
              }
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
          <TextField
            style={{ marginTop: "20px" }}
            value={productEdit.data}
            className="input-add"
            onChange={(e) =>
              setProductToEdit({ ...productEdit, data: e.target.value })
            }
            label="Введите дату"
            id="outlined-basic"
            variant="outlined"
            type="number"
          />
          <TextField
            style={{ marginTop: "20px" }}
            value={productEdit.price}
            className="input-add"
            onChange={(e) =>
              setProductToEdit({ ...productEdit, price: e.target.value })
            }
            label="Введите цену"
            id="outlined-basic"
            variant="outlined"
            type="number"
          />

          <Button
            style={{
              marginTop: "20px",
              backgroundColor: "grey",
              color: "white",
            }}
            type="submit"
          >
            Сохранить изменения
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default EditPage;
