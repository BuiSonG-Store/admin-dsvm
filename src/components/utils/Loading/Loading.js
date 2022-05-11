import React,{useState,useEffect} from "react";

const Loading = () => {
    const [load,setLoad] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 1000);
  }, [])
  return (
   <>
   {load && <div className="preloader">
  <div className="d-table">
    <div className="d-table-cell">
      <img  src="../assets/images/logos/logo-2.png" alt="Images" />
      <h4>Đặc Sản Vùng Miền Số 1 Việt Nam</h4>
    </div>
  </div>
</div> }
   </>

  )
}

export default Loading