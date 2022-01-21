import React from "react"
import { useStyles } from "./style"
import { Grid } from "@mui/material"
import Box from "@mui/material/Box"
import UserList from "./UserList"
import { Divider } from "@mui/material"

const Users = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <div className={classes.Container}>
        <span className={classes.Title}> Add user</span>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ sx: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <form className={classes.form}>
                <Box sx={{ width: "100%" }}>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ sx: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={12}>
                      <input
                        type="text"
                        placeholder="First Name"
                        className={classes.Inputs}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <input
                        type="text"
                        placeholder="Last Name"
                        className={classes.Inputs}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <input
                        type="number"
                        placeholder="Phone"
                        className={classes.Inputs}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <input
                        type="email"
                        placeholder="Email "
                        className={classes.Inputs}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <input
                        type="password"
                        placeholder="Password"
                        className={classes.Inputs}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        className={classes.Inputs}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <button type="submit" className={classes.SendBtn}>
                        Add
                      </button>
                    </Grid>
                  </Grid>
                </Box>
              </form>
            </Grid>
            <Grid item xs={12}>
              <Divider />
              <h1>
                <span className={classes.Title}>Users</span>
              </h1>

              <UserList />
            </Grid>
          </Grid>
        </Box>
      </div>
    </React.Fragment>
  )
}

export default Users
