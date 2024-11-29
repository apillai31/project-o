import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom"
import {Card, TextField, Button, Box, Typography, Snackbar, CardContent} from '@mui/material';
import LoginImage from "../Images/dover.png";
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export const Login: React.FC = (props : any) => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState<'success' | 'error'>('error');
    const navigate = useNavigate();

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const user_pwd: {[key: string]:string} = 
        {
            "Rahulr01": '12345',
            "Ayodhya02": '67890',
            "Chandra04": '13579'
        };


        if (user_pwd[username] && password === user_pwd[username]) 
        {
            setSeverity('success')
            setMessage("Login successfull!!");
            navigate("/Home");
        }
        else {
            setSeverity('error')
            setMessage("Invalid username or password!!!")
        }

        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?:string) => {
        if(reason === 'clickaway')
        {
            return ;
        }
        setOpen(false);
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '120vh',
            backgroundColor: '#001C3A'
        }}>
            <Card sx={{width:650, height:750}}>
            <CardContent>
            <Box sx={{display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '1vh',}}>
                <img style={{ minWidth: "30%", maxWidth: "90%", maxHeight: '100vh' }} src={LoginImage} alt="Dover" />
            </Box>
            <Box component="form"
            onSubmit={handleLogin}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',  // Align right
                minHeight: '100vh',
                justifyContent: 'top',
            }}>
            <Typography variant="h3" gutterBottom>
                PROJECT-O
            </Typography>
            <TextField
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{ mb: 2, width: '300px' }} 
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ mb: 2, width: '300px' }} 
            />
            <Button type="submit" variant="contained" color="primary">
                Login
            </Button>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </Box>
            </CardContent>
        </Card>
        </Box>
    )
}