import Head from "next/head";
import React from "react";
import Shops from "./api/Shops";

const UploadPage = () => {
  
  const [image, setImage] = React.useState(null);
  const [createObjectURL, setCreateObjectURL] = React.useState(null);
  const [shops,setShops] = React.useState([]);
  
  const uploadToServer = async (event) => {
    const body = new FormData();
    body.append("file", image);
    const response = await fetch("/api/upload", {
      method: "POST",
      body
    });
  };
  
  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };
  
  function handle(shops){
    console.log(shops)
    //animals=Object.keys(animals);
    if (shops.length===0) {
      alert('err');
    }
    setShops(shops);
  }
  
  React.useEffect(()=>{
    fetch('api/getShops').then(data=>data.json()).then(data=>handle(data))
  },[]);
  
  
  function Shops(props){
    return (
      <option>{props.name}</option>
    );
  }
  
  return(
    <>
      <Head>
        <title>Upload Shop</title>
      </Head>
      <h2>Upload file</h2>
      <p>Выберите тип изображения </p>
      <select>
        {shops.map((shop,i)=><Shops name={shop} />)}
      </select>
        <input type="file" name="myImage" onChange={uploadToClient} /> <br />
        <button onClick={uploadToServer}>Send</button>
    </>
  );
};

export default UploadPage;
