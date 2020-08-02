import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { ReactComponent as Logo } from "../../assets/fast-food.svg";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";

const customStyles = {
  content: {
    margin: 0,
    padding: 0,
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "50%",
    width: "25%",
    boxShadow: "10px 10px 34px 2px rgba(0,0,0,0.75)",
    borderRadius: "2px",
    position: "relative",
  },
  button: {},
};

const CollectionItem = ({ item, addItem }) => {
  const { name, unit_price, image, description } = item;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="collection-item" onClick={openModal}>
        <div
          className="image"
          style={{
            backgroundImage: `url(${image})`,
            width: '100%',
            height: '100%',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">R${unit_price}</span>
        </div>

      </div>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Description Modal"
        ariaHideApp={false}
      >
        <div className="modalHeader">
          <button onClick={closeModal}>X</button>
        </div>
        <div className="modalDesc">
            <img className="modalImage" src={image} />
            <span className="name">{name}</span>
            <span className="price">R${unit_price}</span>
            <span className="description">{description}</span>
            <CustomButton onClick={() => addItem(item)} inverted>
              Adicionar a comanda
            </CustomButton>
          </div>
      </Modal>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
