import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { CreditCardOutlined } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "var(--side-color)",
  padding: theme.spacing(15),
  textAlign: "center",
  borderRadius: "1rem",
  color: "white",
}));

const ItemProfit = styled(Paper)(({ theme }) => ({
  backgroundColor: "var(--side-color)",
  borderRadius: "1rem",
  color: "white",
  height: "150px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "start",
  padding: theme.spacing(2),
  flexDirection: "column",
  overflow: "hidden",
  // border: "1px solid var(--card-color)",
}));

export default function Dashboard() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={8}>
          <Grid container spacing={2} columns={6} marginBottom={5}>
            <Grid item xs={6} md={2}>
              <ItemProfit sx={{
                position: "relative",
              }}>
                <CreditCardOutlined
                  sx={{
                    fontSize: "3rem",
                    backgroundColor: "var(--card-color)",
                    padding: "0.5rem",
                    borderRadius: "15px",
                    border: "1px solid var(--primary-color)",
                  }}
                />
                <div>
                  <h4
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Total Balance
                  </h4>
                  <h3>R$ 700,54</h3>
                </div>
                <CreditCardOutlined
                  sx={{
                    fontSize: "10rem",
                    opacity: "0.05",
                    position: "absolute",
                    top: "-20px",
                    right: "-40px",
                    transform: "rotate(10deg)"
                  }}
                />
              </ItemProfit>
            </Grid>
            <Grid item xs={6} md={2}>
              <ItemProfit>2</ItemProfit>
            </Grid>
            <Grid item xs={6} md={2}>
              <ItemProfit>3</ItemProfit>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <Item>1</Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item>2</Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item>3</Item>
            </Grid>
            <Grid item xs={6} md={8}>
              <Item>4</Item>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4}>
          <Item
            sx={{
              height: "100%",
            }}
          >
            1
          </Item>
        </Grid>
      </Grid>
    </>
  );
}
