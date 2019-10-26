import React, {useState} from 'react';

const DewaAriandy = () => {
  const [data, SetData] = useState({
      nama: 'Dewa Ariandy',
      fb: 'https://www.facebook.com/dewa.ariandy',
      github: 'https://github.com/dewaariandy96'      
  });

  const containerStyle = { 
    display: "flex",
    alignItems: "center",
    justifyContent: "center", 
    flexDirection: "column",
  };

  return (
    <div style={containerStyle}>
        <h2>Data Profil : </h2>
        <p>Nama : {data.nama}</p> 
        <p>Facebook : {data.fb} </p>
        <p>Github : {data.github}</p>
    </div>
  )

}

export default DewaAriandy;