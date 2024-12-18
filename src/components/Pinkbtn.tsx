interface MyPinkBtn {
  text: any;
  width: string;
  height: string;
}

export default function Pinkbtn({ text, width, height }: MyPinkBtn) {
  const Style = {
    width: width,
    height: height,
    borderRadius: "10px",
    border: "0cap",
    backgroundColor: "rgba(250, 224, 225, 1)",
    fontWeight: "bold",
    fontSize: "17px",
  };
  return (
    <button type="submit" style={Style}>
      {text}
    </button>
  );
}
