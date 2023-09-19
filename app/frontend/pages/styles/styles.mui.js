import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    marginBottom: 20,
                },
            },
        },
    },
});
