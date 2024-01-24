import React, { useEffect,useState } from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/dCandidate'
import { Button, ButtonGroup, Container, Grid,Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles } from '@material-ui/core'
import DCandidateForm from './DCandidateForm'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
//root is used to overright the child properties
const styles = theme => ({
  root :{
    "& .MuiTableCell-head":{
       fontSize: "1.25rem"
    }
  },
   paper:{
     margin : theme.spacing(2),
     padding : theme.spacing(2)
   }
})



const DCandidates = ({classes,...props}) => {
  const [currentId, setCurrentId] = useState(0)
   
  //useEffect runs when the page/component loads
  useEffect(()=>{
    props.fetchAllCandidates()
  },[]) 

  const onDelete = id => {
    if (window.confirm('Are you sure to delete?'))
        props.deleteDCandidate(id,() => window.alert('Deleted'))
  }


  return (
    <Paper className={classes.paper} elevation={3}>
      <Grid container>
          <Grid item xs={6}>
            <DCandidateForm {...({currentId,setCurrentId})}></DCandidateForm>
          </Grid>
          <Grid item xs={6}>
            <TableContainer>
              <Table>
                  <TableHead className={classes.root}>
                      <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Mobile</TableCell>
                          <TableCell>Blood Group</TableCell>
                          <TableCell></TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                     {
                       props.dCandidateList.map((record,index) => {
                         return(
                          <TableRow key={index} hover>
                              <TableCell>{record.fullName}</TableCell>
                              <TableCell>{record.mobile}</TableCell>
                              <TableCell>{record.email}</TableCell>
                              <TableCell>
                                  <ButtonGroup varient="text">
                                      <Button 
                                         onClick={() => {setCurrentId(record.id)}}><EditIcon color="primary"/></Button>
                                      <Button onClick={()=>onDelete(record.id)}><DeleteIcon color="secondary"/></Button>
                                  </ButtonGroup>
                              </TableCell>
                          </TableRow>
                         )
                       })
                     }
                  </TableBody>
              </Table>
            </TableContainer>
          </Grid>
      </Grid>
    </Paper>
  )
}

const mapStateToProps = state => ({
  dCandidateList : state.dCandidate.list
})

const mapActionsToProps = {
  fetchAllCandidates : actions.fetchall,
  deleteDCandidate : actions.Delete
}

export default connect(mapStateToProps,mapActionsToProps)(withStyles(styles)(DCandidates))

