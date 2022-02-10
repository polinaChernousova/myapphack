import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { AdminContext } from "../contexts/AdminProvider";

export default function AdminTable() {
  const { getProduct, products, deleteProduct } =
    React.useContext(AdminContext);
  React.useEffect(() => {
    getProduct();
  }, []);

  if (!products) {
    return <h2>Loading...</h2>;
  }
  return (
    <TableContainer sx={{ marginTop: "200px" }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>#</TableCell>
            <TableCell>Название</TableCell>
            <TableCell align="right">Обложка</TableCell>
            <TableCell align="right">Жанр</TableCell>
            <TableCell align="right">Раздел</TableCell>
            <TableCell align="right">Описание</TableCell>

            <TableCell align="right">Дата выпуска</TableCell>
            <TableCell align="right">Цена</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Button
                  onClick={() => deleteProduct(item.id)}
                  color="error"
                  variant="contained"
                >
                  &times;
                </Button>
              </TableCell>

              <TableCell>
                <Link to={`/edit/${item.id}`}>
                  <Button color="warning" variant="contained">
                    Edit
                  </Button>
                </Link>
              </TableCell>

              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">
                <img width={80} src={item.image} alt="product_image" />
              </TableCell>
              <TableCell align="right">{item.genre}</TableCell>
              <TableCell align="right">{item.chapter}</TableCell>
              <TableCell align="right">{item.desc}</TableCell>
              <TableCell align="right">{item.data}</TableCell>
              <TableCell align="right">{item.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
