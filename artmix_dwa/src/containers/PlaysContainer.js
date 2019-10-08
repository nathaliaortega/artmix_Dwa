import React, { Component } from "react";
import styled from "styled-components";
import Card from "../components/Card";
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 0.5rem;
  padding: 20px;
`;
const Search = styled.input`
  padding-left: 5%;
  height: 30px;
  border-radius: 10px;
  font-size: 1.1em;
`;
const Title = styled.h1`
  width: 50%;
`;
const Modal = styled.div`
  padding-left: 5%;
  background-color: rgb(188, 141, 167);
  padding: 20px;
  height: 100vh;
`;
const ModalBox = styled.div`
  background-color: white;
  justify-content: center;
  align-content: center;
  border-radius: 10px;
  padding: 10px;
`;
const Add = styled.button`
  margin: 10px;
  width: 100px;
  border-radius: 10px;
  font-size: 1.2em;
`;
class PlaysContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      modal: false,
      imageNew: "",
      authorNew: ""
    };
  }
  componentDidMount() {
    window.localStorage.clear();
    const plays = [
      {
        author: "William Shakespeare",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/51BNfws6kzL._SX316_BO1,204,203,200_.jpg"
      },
      {
        author: "William Shakespeare",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/41stzQ0MsgL._SX318_BO1,204,203,200_.jpg"
      }
    ];
    window.localStorage.setItem("plays", JSON.stringify(plays));
  }

  handleChange = (e, field) => {
    var value = e.target.value.toLowerCase();
    this.setState({
      filterText: value
    });
  };
  handleModal = e => {
    e.preventDefault();
    this.setState({
      modal: !this.state.modal
    });
  };
  handleAdd = (e, list) => {
    e.preventDefault();
    const { imageNew, authorNew } = this.state;
    var newPlay={
      author: authorNew,
        image:
          imageNew
    };
    list.push(newPlay);    
    window.localStorage.clear();
    window.localStorage.setItem("plays",JSON.stringify(list))
    
    this.setState({
      modal: false
    });
  };
  updateValue = (e, field) => {
    e.preventDefault();
    this.setState({
      [field]: e.target.value
    });
  };
  render() {
    const { filterText, modal } = this.state;
    let cards;
    var ifModal;
    const playsStorage = JSON.parse(window.localStorage.getItem("plays"));
    const playsList = playsStorage.filter(val =>
      val.author.toLowerCase().includes(filterText)
    );
    cards = (
      <Grid>
        {playsList.map(({ key, author, image }) => (
          <Card key={image} Image={image} author={author} />
        ))}
      </Grid>
    );
    if (modal) {
      ifModal = (
        <>
          <Modal>
            <ModalBox>
              <h3>Ingrese una nueva Obra</h3>
              <label>Autor: </label>
              <Search
                onChange={e => {
                  this.updateValue(e, "authorNew");
                }}
              ></Search>
              <br />
              <br />
              <label>Imagen: </label>
              <Search
                onChange={e => {
                  this.updateValue(e, "imageNew");
                }}
              ></Search>
              <br />
              <br />
              <Add onClick={this.handleModal}>Cancelar</Add>
              <Add
                onClick={e => {
                  this.handleAdd(e, playsStorage);
                }}
              >
                Enviar
              </Add>
            </ModalBox>
          </Modal>
        </>
      );
    } else {
      ifModal = (
        <>
          <Title>Artmix</Title>
          <Add onClick={this.handleModal}>Add</Add>
          <Search
            placeholder="Busque por autor aquí"
            onChange={e => {
              this.handleChange(e, "filterText");
            }}
          ></Search>
          {cards}
        </>
      );
    }

    return <>{ifModal}</>;
  }
}
export default PlaysContainer;
