import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface Props {
  onClickBack: () => void;
  onClickNext: () => void;
  disabled: boolean;
}

const Buttons = ({ onClickBack, onClickNext, disabled = false }: Props) => {
  return (
    <>
      <Button
        variant="outlined"
        size="medium"
        startIcon={<ArrowBackIosIcon />}
        onClick={onClickBack}
        disabled={disabled}
      >
        Back
      </Button>
      <Button
        variant="outlined"
        size="medium"
        endIcon={<ArrowForwardIosIcon />}
        onClick={onClickNext}
      >
        Next
      </Button>
    </>
  );
};

export default Buttons;
