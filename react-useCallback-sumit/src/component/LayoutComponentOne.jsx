import useScreenSize from "../hooks/useScreenSize";

const LayoutComponentOne = () => {
  const onSmallDevice = useScreenSize();

  return (
    <div>
      <h1 id="heading">I am on {onSmallDevice ? "small" : "big"} display</h1>
    </div>
  );
};

export default LayoutComponentOne;
