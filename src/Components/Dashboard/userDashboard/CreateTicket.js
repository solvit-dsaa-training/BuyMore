import React from "react"
import { useStyles } from "./style"
import { Grid } from "@mui/material"
import Box from "@mui/material/Box"

const CreateTicket = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <div className={classes.Container}>
        <span className={classes.Title}>Create Ticket</span>
        <div>
          <form className={classes.form}>
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ sx: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12}>
                  <div>
                    <select className={classes.Inputs}>
                      <option> Select Type</option>
                      <option>GENERAL</option>
                      <option> VIP</option>
                      <option> VVIP</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Price"
                      className={classes.Inputs}
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Number Of Tickets"
                      className={classes.Inputs}
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <button type="submit" className={classes.SendBtn}>
                    Create
                  </button>
                </Grid>
              </Grid>
            </Box>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CreateTicket
