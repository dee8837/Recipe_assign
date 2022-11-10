const Render = ({ color }) => {
  return (
    <div style={{ display: "flex",flexWrap:"wrap",padding:0 }}>
      {color.map((e, idx) => {
        return (
          <div
            className="renders" key={idx}
            style={{ height: 300, width: 200, marginTop:100,padding:0,marginLeft:50, backgroundColor:"#ABD9FF"}}
          >
            <p
              style={{
                backgroundColor: `${e.color_code}`,
                minHeight: 210,
                width: 200,
                padding:0,
                margin:0,
              
               
              }}
            ></p>
            <p className="text" >
              {e.color_code}
            </p>
            <span
              className="text"
              style={{ color: `${e.color_code}`, fontSize: 20, }}
            >
              {" "}
              {e.color_name}
            </span>
          </div>
        );
      })}
    </div>
  );
};
export default Render;
