import useScreenSize from "../hooks/useScreenSize";

const LayoutComponentTow = () => {
  const onSmallDevice = useScreenSize();

  return (
    <div>
      <h1 className={onSmallDevice ? "small" : "big"}>Layout two</h1>
    </div>
  );
};

export default LayoutComponentTow;
