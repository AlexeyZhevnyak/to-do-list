import {AntdRegistry} from "@ant-design/nextjs-registry";
import '@ant-design/v5-patch-for-react-19';
import '../index.css';
import '../App.css';

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <AntdRegistry>
            <html lang="en">
            <head>
                <meta charSet="UTF-8"/>
                <link rel="icon" type="image/svg+xml" href="/icon.svg"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>My App</title>
                <meta name="description" content="My App is a..."/>
            </head>
            <body>
            <div className='app'>
                {children}
            </div>
            </body>
            </html>
        </AntdRegistry>
    )
}