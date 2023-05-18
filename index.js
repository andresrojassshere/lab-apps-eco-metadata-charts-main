import { express, cors, dotenv, fs } from './dependencies.js';
import userRoutes from './routes/userRoutes.js';
import dashboardRoutes from './routes/dashboardRouters.js';

dotenv.config();
const PORT = process.env.PORT;
const app = express();
const STATIC_APP = express.static('./static/client-app');
const STATIC_DASHBOARD = express.static('./static/dashboard-app');
app.use(express.json());
app.use('/mobile-app', STATIC_APP);
app.use('/dashboard-app', STATIC_DASHBOARD);
app.use('/user', userRoutes);
app.use('/dashboard', dashboardRoutes);



app.listen(PORT, () => {
    console.table({ 
        "Dashboard app:": `http://localhost:${PORT}/dashboard-app`,
        "Mobile app:": `http://localhost:${PORT}/mobile-app` });
});