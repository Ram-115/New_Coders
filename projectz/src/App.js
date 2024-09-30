import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import AppRoutes from './Containers/Routes';

function App() {
  let theme = createTheme({
    palette : {
      primary : {
        main : '#24a4c4'
      },
      secondary : {
        main : '#FF9D29'
      }
    },
    typography : {
      fontFamily :
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
    },
    components : {
      MuiDialog : {
        styleOverrides : {
        paper : {
            borderRadius : '13px'
        }
        }
      },
      MuiTextField : {
        styleOverrides : {
          root : {
            borderRadius               : '8px',
            '& .MuiOutlinedInput-root' : {
          borderRadius : '8px'
            },
            '& .MuiOutlinedInput-notchedOutline' : {
              borderColor : 'rgba(0, 0, 0, 0.23)'
            }
        }
        }
      },
      MuiOutlinedInput : {
        styleOverrides : {
        root : {
            borderRadius : '8px'
        },
        notchedOutline : {
            borderColor : 'rgba(0, 0, 0, 0.23)'
        }
        }
      },
      MuiButton : {
        styleOverrides : {
        root : {
            borderRadius  : '8px',
            textTransform : 'capitalize'
        },
        containedPrimary : {
            backgroundColor : '#24a4c4',
            '&:hover'       : {
          backgroundColor : '#1c8ba4'
            }
        },
        containedSecondary : {
            backgroundColor : '#FF9D29',
            '&:hover'       : {
          backgroundColor : '#e08824'
            }
        }
        }
      }
    }
  });
  
  theme = createTheme(theme, {
    palette : {
      info : {
        main : theme.palette.secondary.main
      }
    }
  });
  return (
    <ThemeProvider theme={theme}>
   <AppRoutes/>
   </ThemeProvider>
  );
}

export default App;
