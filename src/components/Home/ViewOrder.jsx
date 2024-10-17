import CustomDialog from "../common/CustomDialog";

const ViewOrder = ({ open, handleOpen, order }) => {
  return (
    <CustomDialog
      open={open}
      handleOpen={handleOpen}
      title={"Order Details"}
      anableCross={true}
      className="w-[40vw] h-max"
    ></CustomDialog>
  );
};

export default ViewOrder;
