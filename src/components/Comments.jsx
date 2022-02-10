import {
  Button,
  Container,
  TableBody,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AdminContext } from "../contexts/AdminProvider";

const initComment = {
  name: "",
  comment: "",
};

const Comments = () => {
  const [newComment, setNewComment] = useState(initComment);
  const { addComment, getComment, comment } = useContext(AdminContext);
  console.log(comment);

  const handleSubmit = (event) => {
    event.preventDefault();
    for (const key in newComment) {
      if (!newComment[key]) {
        alert("Заполните поля");
        return;
      }
    }
    addComment(newComment);
    setNewComment(initComment);
  };

  useEffect(() => {
    getComment();
  }, []);

  if (!comment) {
    return <h2>loading...</h2>;
  }

  return (
    <div>
      <Container>
        <h2>Последние комментарии</h2>
        <form
          className="form-comment"
          style={{ display: "flex", marginTop: "15px" }}
          onSubmit={handleSubmit}
        >
          <TextField
            value={newComment.name}
            onChange={(e) =>
              setNewComment({ ...newComment, name: e.target.value })
            }
            label="Ваше имя"
            style={{ paddingRight: "10px" }}
          />
          <TextField
            value={newComment.comment}
            onChange={(e) =>
              setNewComment({ ...newComment, comment: e.target.value })
            }
            label="Ваш комментарий"
          />
          <Button
            style={{ justifyContent: "center", margin: "10px" }}
            type="submit"
            variant="contained"
          >
            добавить
          </Button>
        </form>
        <div style={{ margin: "15px" }}>
          <TableBody>
            {comment.map((item) => (
              <TableRow>
                <TableCell>{item.name}:</TableCell>

                <TableCell>{item.comment}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </div>
      </Container>
    </div>
  );
};

export default Comments;

// <ul style={{ display: "flex", gap: "20px" }}>
//   <li> Имя: {item.name}</li>
//   <br />
//   <li> {item.comment}</li>
// </ul>
