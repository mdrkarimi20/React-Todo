import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    spacing: 2,
    palette: {
        primary: {
            main: "#00f7c6",
        },
        secondary: {
            main: "#eff700",
        },
        error: {
            main: "#00f7c6",
        },
        info: {
            main: "#CDE0DE",
        },
    },
    overrides: {
        MuiPaper: {
            root: {
                backgroundImage: "linear-gradient(to right, #cb51fe 10%, #4d91df 100%)",
                color: "white",
                border: "1px solid white",
            },
        },
        MuiTypography: {
            colorTextSecondary: {
                color: "white",
            },
        },
        MuiContainer: {
            root: {
                backgroundColor: "#5e005f",
                margin: "0",
                padding: "0.8rem",
                minHeight: "100vh",
                fontFamily: `'Yekan'`,
                position: "relative",
            },
        },
        MuiGrid: {
            root: {
                backgroundColor: "#c454fc",
            },
        },
        MuiInputBase: {
            input: {
                color: "#FEFEFE",
                borderColor: "#FEFEFE",
            },
        },
        MuiInputLabel: {
            root: {
                color: "#ccc",
            },
        },
        MuiFab: {
            root: {
                position: "absolute",
                bottom: 6,
                right: 12,
            },
        },
        MuiIconButton: {
            label: {
                color: "#00f7c6",
            },
        },
    },
});

export default theme;