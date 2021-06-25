import React, { useEffect, useImperativeHandle, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { useHistory, useParams } from 'react-router';



const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

 const Dropdown =({datavalue}) =>{
  

  const classes = useStyles();
  const [age, setAge] = useState('pending');
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };


  const [design2, setdesign2] = useState(
  );

   useEffect(() => {
    const dropdownvalue ={...datavalue}
    dropdownvalue.age =age
   
    setdesign2(dropdownvalue)
  
 
   
     
   }, []);

   console.log(design2)

    
  
  
    
  




  








  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
       {age}
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">product</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            
          </MenuItem>
          <MenuItem value={'Pending'}>Pending</MenuItem>
          <MenuItem value={'On Going'}>On going</MenuItem>
          <MenuItem value={'Done'}>Done</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}


export default Dropdown