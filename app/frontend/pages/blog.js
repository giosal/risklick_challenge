import Head from "next/head";
import Logo from "@/app/frontend/pages/components/AnimatedText.component";
import {ThemeProvider} from "@mui/material";
import {theme} from "@/app/frontend/pages/styles/styles.mui";
import MenuApp from "@/app/frontend/pages/components/Menu.component";
import PostList from "@/app/frontend/pages/components/Cards.component";

export default function Blog() {
    return (
        <>
            <Head>
                <title>Welcome to my blog!</title>
            </Head>
            <Logo />
            <ThemeProvider theme={theme}>{MenuApp(<PostList />)}</ThemeProvider>
        </>
    );
}
