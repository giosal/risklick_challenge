import AdminJS from 'adminjs';
import express from 'express';
import AdminJSExpress from '@adminjs/express';
import {Adapter} from "adminjs-sql";
import {Database} from "adminjs-sql/lib/adapter/Database";
import {Resource} from "adminjs-sql/lib/adapter/Resource";

const PORT = 3001;
// We'll need to register the SQL Adapter
AdminJS.registerAdapter({
    Database,
    Resource
});
const start = async () => {
    const app = express();
    // This facilitates the connection to the MariaDB database
    const db = await Adapter.init('mysql', {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '3Boudines63',
        database: 'risklick_challenge',
    });

    // We will need to create an instance of AdminJS
    const admin = new AdminJS({
        resources: [
            {
                resource: db.table('posts'),
                options: {
                    properties: {
                        card_content: {
                            type: 'richtext',
                        },
                    },
                },
            },
        ],
    });
    const adminRouter = AdminJSExpress.buildRouter(admin);
    app.use(admin.options.rootPath, adminRouter);
    app.listen(PORT, () => {
        console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`);
    });
};
start();
