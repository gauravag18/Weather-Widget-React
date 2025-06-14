import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}){

    let HOT_URL="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let COLD_URL ="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL="https://images.unsplash.com/photo-1536329978773-2f8ac431f330?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    return (
    <div className="InfoBox">
       <h1>Weather is described as  {info.weather}</h1>
        <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity>80?RAIN_URL:(info.temp>20?HOT_URL:COLD_URL)}
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                   <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p>      
                        <p>Temperature Feels Like = {info.feelslike}&deg;C</p>                           <p>The Weather Feels Like  = {info.feelslike}&deg;C</p>
                        <p>Humidity = {info.humidity}%</p>
                        <p>Minimum Temp = {info.tempMin}&deg;C</p>
                        <p>Maximum Temp = {info.tempMax}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    </div>
    );
}