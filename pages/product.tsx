import Image from "next/image";
import logo from "@/public/octopus-logo.svg";
import basket from "@/public/basket.svg";
import productImage from "@/public/philips-plumen.jpg"
import Button from "@/components/button";
import SpecificationsList from "@/components/specificationList";
import productData from "@/productdata/productData.json"
import { useEffect, useState } from "react";
import UpDownButtonGroup from "@/components/upDownButtonGroup";
import Modal from "@/components/modal";

const Product = () => {
  const [itemCount, setItemCount] = useState(1);
  const [cartFlag, setCartFlag] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [checkoutMessage, setCheckoutMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Increase count button
  const handleIncrement = () => {
    if (isModalOpen) {                        // This is a funtion for increase button in Modal.
      setCartCount(preCount => preCount + 1)
    } else {                                  // This is a function for increase button in Main page
      setItemCount(prevCount => prevCount + 1);
    }
  };

  const handleDecrement = () => {
    if (isModalOpen) {                        // This is a funtion for decrease button in Modal.
      if (cartCount == 1) {
        setCartCount(1);
      } else {
        setCartCount(preCount => preCount - 1);
      }
    } else {                                  // This is a function for decrease button in Main page
      if (itemCount == 1) {
        setItemCount(1);
      } else {
        setItemCount(prevCount => prevCount - 1);
      }
    }
  };

  const handleAddToCart = () => {             // Add to cart button action
    setCartCount(itemCount);
    setItemCount(1);
    setCartFlag(true);
  }

  const handleModalOpen = () => {             // Open Modal action
    setIsModalOpen(true);
  };

  const handleModalClose = () => {             // Close Modal action
    setIsModalOpen(false);
    setCheckoutMessage("");
  };

  const handleCheckout = () => {             // Checkout button action in Modal
    setCheckoutMessage("✔ You have checked out");
    setCartCount(0);
  };

  return (
    <main className="flex flex-col min-h-screen ">

      {/* Header */}

      <header id="header" className="flex flex-row justify-between mx-4 fixed top-0 left-0 right-0 bg-siphon z-10 pt-1">
        <div className="flex items-center justify-center">
          <Image src={logo.src} width={200} height={50}></Image>
        </div>

        <div className="relative flex items-center justify-center">
          <Image src={basket.src} width={25} height={25} onClick={handleModalOpen} style={{ cursor: 'pointer' }}></Image>
          {cartFlag && cartCount>0 ? <span className="absolute top-4 end-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-red-500 text-white">{cartCount}</span> : <></>}
        </div>
      </header>

      {/* Content */}

      <section id="content" className="flex-grow pt-[72px] flex justify-center p-4 sm:pb-[100px] pb-[130px]">
        <div className="flex flex-col md:flex-row xl:w-[50%] gap-6 lg:w-[80%]">
          <div className="w-full md:w-[50%] flex flex-col gap-2 sm:px-[20%] md:px-0">
            {/* Product Image */}
            <div className="relative w-full h-0 pb-[100%]">
              <Image src={productImage.src} layout="fill" objectFit="cover" className="rounded-xl" alt="Product Image" />
            </div>
            {/* Product name and power */}
            <div className="flex flex-col gap-2">
              <div className="font-bold text-3xl">{productData[0].name}</div>
              <div>{productData[0].power} // Packet of 4</div>
            </div>
          </div>

          <div className="w-full md:w-[50%] flex flex-col gap-2 mt-2 sm:px-[20%] md:px-0">
            <div className="flex flex-row justify-between font-bold text-2xl">
              <div>&#xa3;{productData[0].price}</div>
              {/* Increase and Decrease item button group */}
              <UpDownButtonGroup itemCount={itemCount} handleDecrement={handleDecrement} handleIncrement={handleIncrement}></UpDownButtonGroup>
            </div>
            <div className="text-black h-12">
              {/* Add to Cart Button */}
              <Button content="Add to cart" backgroundColor="sohoLights" width="full" height="12" onClick={handleAddToCart}></Button>
            </div>
            {/* Product description */}
            <div className="bg-hemocyanin p-2">
              <div className="text-2xl my-4 font-bold">Description</div>
              <div>{productData[0].description}</div>
            </div>
            {/* Product Specifications */}
            <div className="flex flex-col gap-2 p-2">
              <div className="text-2xl my-2 mt-4 font-bold">Specifications</div>
              <SpecificationsList title="Brand" content={productData[0].brand}></SpecificationsList>
              <SpecificationsList title="Item weight (g)" content={productData[0].weight.toString()}></SpecificationsList>
              <SpecificationsList title="Dimensions" content={`${productData[0].height} x ${productData[0].width} x ${productData[0].length}`}></SpecificationsList>
              <SpecificationsList title="Item Model number" content={productData[0].model_code}></SpecificationsList>
              <SpecificationsList title="Colour" content={productData[0].colour}></SpecificationsList>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="flex items-center justify-center bg-hemocyanin px-4 py-2 fixed bottom-0 left-0 right-0">
        <div className="text-sm">
          Octopus Energy Ltd is a company registered in England and Wales. Registered number: 09263424. Registered office: 33 Holborn, London, EC1N 2HT. Trading office: 20-24 Broadwick Street, London, W1F 8HT
        </div>
      </footer>

      {/* Modal */}

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        {cartCount < 1 && !checkoutMessage ?
          <div className="flex justify-center m-4">There is no product in your cart!</div>
          :<div className="flex flex-col gap-4 mt-4">
            <div className="flex flex-row justify-around px-4">
              <Image src={basket.src} width={50} height={50}></Image>
              <UpDownButtonGroup itemCount={cartCount} handleDecrement={handleDecrement} handleIncrement={handleIncrement}></UpDownButtonGroup>
            </div>
            {checkoutMessage ? (
              <p className="text-center">{checkoutMessage}</p>
            ) : (<></>)}
            <div className="text-black h-12">
              <Button content="Checkout" backgroundColor="sohoLights" width="full" height="12" onClick={handleCheckout}></Button>
            </div>
          </div>}
      </Modal>

    </main>
  );
}

export default Product;
