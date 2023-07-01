import { Typography } from "@mui/material";
import { CheckOutButton, TotalItemsContainer } from "./ShoppingCartStyle";
import { Row } from "./ShoppingCartE2";
import { useNavigate } from "react-router-dom";

interface Props {
  purchaseItems: (Row | undefined)[];
}
function ShoppingCartE3({ purchaseItems }: Props) {
  const navigate = useNavigate();

  function calculateTotal(array: (Row | undefined)[]) {
    let value = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== undefined) {
        value += (array[i] as Row).totalPrice;
      }
    }
    return value;
  }

  function calculateSaving(array: (Row | undefined)[]) {
    let value = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== undefined) {
        value += (array[i] as Row).totalSaved;
      }
    }
    return value;
  }

  const y: number =
    purchaseItems.length > 0 ? calculateTotal(purchaseItems) : 0;

  const z: number =
    purchaseItems.length > 0 ? calculateSaving(purchaseItems) : 0;

  const savingContainer = (
    <div
      style={{
        display: "flex",
        width: "max-content",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontSize: "0.9rem" }}>Saved:</Typography>
      <Typography sx={{ color: "#ee4d2d", fontSize: "0.9rem" }}>
        RM {z.toFixed(2)}
      </Typography>
    </div>
  );

  return (
    <>
      <TotalItemsContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "max-content",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "1.1rem" }}>
              Total ({purchaseItems.length} item):
            </Typography>
            <Typography sx={{ color: "#ee4d2d", fontSize: "1.4rem" }}>
              RM {y.toFixed(2)}
            </Typography>
          </div>

          {z > 0 && savingContainer}
        </div>

        <CheckOutButton
          disableRipple
          disabled={purchaseItems.length === 0 && true}
          onClick={() => navigate("/checkout")}
        >
          Check Out
        </CheckOutButton>
      </TotalItemsContainer>
    </>
  );
}

export default ShoppingCartE3;
