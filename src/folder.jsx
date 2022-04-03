import React, { useState } from "react";

const Folder = (props) => {
  const [show, setShow] = useState(false);
  // console.log(props.data);
  // props.data.map((item) => {
  //   console.log(item);
  // });
  const handler = () => {
    setShow(!show);
  };

  return (
    <>
      <div onClick={handler}>{props.data.name}</div>
      {show && (
        <div className="file">
          {props.data.items ? (
            <div>
              {props.data.items.map((item) => {
                return <Folder data={item} />;
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
};

export default Folder;
