import Rect from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';


const chipChangeHandler = (value) => {

    switch(value){
        case "Low":
            return "success";
        case "Medium":
            return "warning";
        case "High":
            return "error"
        default:
            return "default";
        }

  }



const Task = (props) => {
    
    return (
        <Grid
            item
            key={props.id}
            xs={12}
            md={4}
        >
            <Card sx={{
                backgroundColor: props.done ? 'lightgrey' : 'lightblue',
                padding: '20px'
                }}> 
                <CardHeader
                    title={props.title}
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: '3px',
                        padding: '20px',
                        textAlign: 'center'
                    }}
                />
                <CardContent>
                    <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'baseline',
                        mb: 2,
                        padding: '20px'
                    }}
                    >
                    <Typography component="p" variant="subtitle2" color="text.primary">
                        Due: {props.deadline}
                    </Typography>
                    </Box>

                    {/*Priority code*/}
                    <Typography component="p" variant="subtitle2" align="center" color="text.primary">
                        Priority: {props.priority}
                    </Typography>
                    {/*End*/}

                    {/*Priority code - Chip version*/}
                    <Chip 
                        label={props.priority} 
                        align="center" 
                        color={chipChangeHandler(props.priority)}
                        >
                    </Chip>
                    {/*End*/}

                    <Typography
                        component="p"
                        variant="subtitle1"
                        align="center"
                        sx={{fontStle: 'italic'}}
                        >
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions
                    sx={{justifyContent: 'space-between', padding: '20px'}}>
                    <Button variant="contained" size="small" color="success" onClick={props.markDone}>
                        Done
                    </Button>
                    <Button variant="contained" size="small" color="error" onClick={props.deleteTask}>
                        Delete
                    </Button>
                    </CardActions>
            </Card>
        </Grid>
        

    )
}

export default Task;