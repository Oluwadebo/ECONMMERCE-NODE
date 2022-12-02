import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
// import Navbar from "./Navbar";
import { baseUrl } from "./endpoint";

const Upload = () => {
  const navigate = useNavigate();
  const [loader, setloader] = useState(false)
  const [file, setfile] = useState("");
  const [product, setproduct] = useState("");
  const [price, setprice] = useState("");
  const [Err, setErr] = useState("")
  const token = localStorage.token
  const userId = localStorage.userId
  useEffect(() => {
    // if (token) { } else {
    //   navigate("/")
    // }
  }, [])
  const getfile = (e) => {
    let myfile = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(myfile)
    reader.onload = () => {
      setfile(reader.result);
    }
  }
  const upload = () => {
    if (file != "" && product != "" && price != "") {
      setErr("")
      setloader(prev => true)
      const userdata = { file, product, price, userId }
      axios.post(`${baseUrl}files`, userdata).then((credentials) => {
        if (credentials) {
          setloader(prev => false)
          navigate("/Dashboard")
        }
      })
    } else {
      if (file == "" && product == "" && price == "") {
        setErr("All input field are required")
      } else if (file == "") {
        setErr("file input field is required")
      } else if (product == "") {
        setErr("product name input field is required")
      } else {
        if (price == "") {
          setErr("product price input field is required")
        }
      }
    }
  }

  return (
    <>
      <div className="container">
        <div className="row  my-5">
          <div className="shadow col-12 px-3 pb-3 asd">
            <h2 className="m-4 text-white">
              <b>
                <i>Product form</i>
              </b>
            </h2>
            <p>
              <b className="text-danger"><marquee className="card">{Err}</marquee></b>
            </p>
            <div>
              <input type="file" className="form-control my-2" onChange={(e) => getfile(e)} accept='image/*' />
              <input type="text" className="form-control my-2" placeholder="Product name" onChange={(e) => setproduct(e.target.value)} />
              <input type="text" className="form-control my-2" placeholder="Product price (add your currency)" onChange={(e) => setprice(e.target.value)} />
              <button className="btn form-control py-3 mt-3 asdb" onClick={upload}>Upload
                {loader && (
                  <div className="spin">
                    <div className="loader"></div>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
