import { Container, Box } from '@mui/material'

const DefaultLayout = ({ children }) => {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '75vh',
          marginBottom: '5rem'
        }}
      >
        {children}
      </Box>
    </Container>
  )
}

export default DefaultLayout